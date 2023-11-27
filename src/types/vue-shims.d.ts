import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface State {
    category: string
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
