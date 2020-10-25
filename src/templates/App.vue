<template lang="pug">

#app
	v-header
	//- transition(name="page" mode="out-in")
	router-view.page
	//- .loader
	v-footer
	v-popup

</template>
<script>
import vHeader from 'ui/header'
import vFooter from 'ui/footer'
import vPopup from 'ui/popup'

export default {
	components: { vHeader, vFooter, vPopup }
}
</script>
<style lang="stylus" scoped>

#app
	position relative
	min-height 100vh
	padding 130px 0
	overflow-y scroll

.page
	position relative
	width 1300px
	margin auto
	transition opacity .1s
	&.page-leave-to, &.page-enter, &.loading
		opacity 0
		+ .loader
			opacity 1
			top 50%
	&.page-leave, &.page-enter-to
		opacity 1
	+$small-desktop()
		width 1080px

.loader
	position fixed
	width 100px
	height 100px
	margin-left -50px
	margin-top -50px
	top -100px
	left 50%
	border-radius: 100%
	transition: opacity .1s, top .01s .1s
	animation: spin 1.4s infinite linear
	border: 3px solid $grey
	border-bottom-color transparent
	opacity 0

@keyframes spin
    0%
        transform: rotate(0)
    100%
        transform: rotate(360deg)

</style>
