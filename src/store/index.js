import { createStore } from 'vuex'
import axios from 'axios'
//import dayjs from 'dayjs'



axios.defaults.baseURL='http://127.0.0.1:8000/api/'

export default createStore({
  state: {
    user:null,
    loggingIn:false,
    loginError:null,
    showModal:false,
    is_loading:false,
    current_month:10,
    current_year:2021,
  },
  mutations: {
    SET_LOADING(state,payload){
      state.is_loading=payload
    }
  },
  actions: {
  },
  modules: {
  }
})
