<template lang="pug">

transition(name="show" :duration="{ enter: 800, leave: 600 }")
    .popups(v-if="popup.name")
        .fade(@click="popup = null")

</template>
<script>
export default {
    computed: {
        popup: {
            get() {
                return this.$store.getters['ui/popup']
            },
            set(value) {
                this.$store.commit('ui/popup', { name: value })
            }
        }
    },
	components: { },
}

</script>
<style lang="stylus" scoped>

.popups
    position fixed
    top 0
    width 100%
    height 100%
    width 100vw
    height 100vh
    z-index 200
    &.show-enter, &.show-leave-to
        .fade
            opacity 0
        .popup
            top -100%
            top -100vh
            box-shadow 0 0 0 0 rgba(#000, 0)
    &.show-enter-active .popup
        animation showPopup .8s
    &.show-leave-active .popup
        animation hidePopup .6s

.fade
    position absolute
    width 100%
    height 100%
    top 0
    left 0
    z-index 1
    background-color $can-push
    cursor pointer
    opacity .7
    transition opacity .5s

.popup
    z-index 2
    position absolute
    width 400px
    left 50%
    left 50vw
    top 50%
    top 50vh
    transform translate(-50%, -50%)
    border-radius 30px
    background-color $bg
    // $medium-shadow()
    box-shadow 0 2px 8px 0 rgba(#000, .2)

@keyframes hidePopup
	0%
		margin-top 0
		top 50%
		top 50vh
	30%
		margin-top 35px
		top 50%
		top 50vh
	100%
		margin-top 0
		top -100%
		top -100vh
@keyframes showPopup
	0%
		margin-top 0
		top -100%
		top -100vh
	60%
		margin-top 45px
		top 50%
		top 50vh
	100%
		margin-top 0
		top 50%
		top 50vh

</style>
