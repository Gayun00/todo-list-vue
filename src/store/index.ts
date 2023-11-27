import { createStore } from 'vuex'

interface InitialState {
  category: string
}

export const store = createStore({
  state() {
    return {
      category: 'title'
    }
  },
  mutations: {
    updateItemFilter(state: InitialState, payload: { category: string }) {
      state.category = payload.category
    }
  }
})
