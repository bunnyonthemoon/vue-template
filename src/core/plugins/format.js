export default {
	methods: {
		formatText(val) {
			if (val) return val.split(' ').join('').replace(/[^-0-9]/gim, '') * 1
		},
		maskInput(input, val) {
			if (!input) return
			val = val || input.value
			let caret = getCaretPosition(input),
				spacesOld = getSpacesCaret(val, caret.start)
			input.value = this.maskVal(val)
			let spacesNew = getSpacesCaret(input.value, caret.start)
			setCaretPosition(input, caret.start + spacesNew - spacesOld, caret.end + spacesNew - spacesOld)

			function getSpacesCaret(val, pos) {
				let count = 0
				for (let i = 0; i < pos; i++)
					if (val[i] == ' ') count++
				return count
			}
			function getCaretPosition(input) {
				if (document.selection) {
					input.focus();
					let range = document.selection.createRange(),
						rangelen = range.text.length;
					range.moveStart('character', -input.value.length)
					return {
						start: range.text.length - rangelen,
						end: range.text.length
					}
				}
				else if (input.selectionStart || input.selectionStart == '0')
					return {
						start: input.selectionStart,
						end: input.selectionEnd
					}
				else return {
					start: 0,
					end: 0
				}
			}
			function setCaretPosition(input, start, end) {
				if (input.setSelectionRange) {
					input.focus()
					input.setSelectionRange(start, end)
				} else if (input.createTextRange) {
					var range = input.createTextRange()
					range.collapse(true)
					range.moveEnd('character', end)
					range.moveStart('character', start)
					range.select()
				}
			}
		},
		maskText(val) {
			val = val.split(' ').join('').replace(/[^-0-9]/gim, '')
			val *= 1
			val += ''
			let end = ''
			for (let i = val.length - 1, j = 0; i >= 0; i--, j++) {
				if (j > 0 && j % 3 == 0) {
					end = ' ' + end
				}
				end = val[i] + end
			}
			return end
		},
		
	}
}