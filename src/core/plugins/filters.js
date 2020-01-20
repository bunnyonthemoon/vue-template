export const priceMask = {
	install(Vue) {
		Vue.filter('priceMask', function(val){
			val = val.split(' ').join('').replace(/[^-0-9]/gim, '');
			val *= 1;
			val += '';
			var end = '';
			for (let i = val.length - 1, j = 0; i >= 0; i--, j++) {
				if (j > 0 && j % 3 == 0) {
					end = ' ' + end;
				}
				end = val[i] + end;
			}
			return end;
		})
	}
}