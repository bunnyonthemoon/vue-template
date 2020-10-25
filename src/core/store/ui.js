import Axios from 'axios'
import router from 'core/router'

export default {
    namespaced: true,
    state: () => ({
        window: {
            width: 0,
            height: 0
        }
    }),
    getters: {
        popup(state, getters, rootState) {
            return {
                name: rootState.route.query.popup,
                query: rootState.route.query.query
            }
        },
        window: ({ window }) => window
    },
    mutations: {
        popup({ popup }, { name = null, query = null }) {
            if (name)
                router.push({ query: { popup: name, query } })
            else
                router.push({ query: null })
        },
        resize(state) {
            state.window.width = window.innerWidth
            state.window.height = window.innerHeight
        }
    },
    actions: {
    }
}
