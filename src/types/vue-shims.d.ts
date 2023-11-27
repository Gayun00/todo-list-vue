import { Store } from 'vuex'
import type { FilterCategory } from '.'

declare module '@vue/runtime-core' {
  interface State {
    category: FilterCategory
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
