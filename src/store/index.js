import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            user: {
                username: "Johnny",
                lastname: ":D"
            },
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        chnageUserData(state, newUserData) {

            state.user.username = newUserData.username
            state.user.lastname = newUserData.lastname
        }
    },
    actions: {
        changeName(context, newUserData) {
            context.commit('chnageUserData', newUserData)
        },
        increment(context) {
            console.log('hi')
            context.commit('increment')
        },
        decrement(context) {
            context.commit('decrement')
        }
    }
})
export default store