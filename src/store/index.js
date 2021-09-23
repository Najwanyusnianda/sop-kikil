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
    current_month:{name:'Oktober', value:10},
    current_year:2021,
    months:[
      {name:'Januari', value:1},{name:'Februari', value:2},{name:'Maret', value:3},{name:'April', value:4},{name:'Mei', value:5},{name:'Juni', value:6},{name:'Juli', value:7},{name:'Agustus', value:8},{name:'September', value:9},{name:'Oktober', value:10},{name:'November', value:11},{name:'Desember', value:12},
    ]
  },
  mutations: {
    SET_LOADING(state,payload){
      state.is_loading=payload
    },
    SET_MONTH(state,selected_month){
      state.current_month=selected_month
    }
  },
  actions: {
    changeMonth({commit},selected_month){
      commit('SET_MONTH',selected_month)
    }
  },
  modules: {
  },
  getters:{
    months_name:state=>{
      return state.months.map((month)=>{
          return month.name
      })
    }
  }
})
