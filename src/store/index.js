import { createStore } from 'vuex'
import dir from './modules/dir';

export default createStore({
  modules: {
    dir,
  }
})
