import { createStore } from 'vuex'
import axios from 'axios'
//import dayjs from 'dayjs'
//import dayjs from 'dayjs'



axios.defaults.baseURL='http://127.0.0.1:8000/api/'

export default createStore({
  state: {
    user: null,
    loggingIn:false,
    loginError: null,
    loginSuccessful: false,
    showModal:false,
    is_loading:false,

    current_month:'',
    current_year:2021,
    months:[
      {name:'Januari', value:1},{name:'Februari', value:2},{name:'Maret', value:3},{name:'April', value:4},{name:'Mei', value:5},{name:'Juni', value:6},{name:'Juli', value:7},{name:'Agustus', value:8},{name:'September', value:9},{name:'Oktober', value:10},{name:'November', value:11},{name:'Desember', value:12},
    ]
  },
  mutations: {
    SET_USER(state,user){

      state.user= user
      localStorage.setItem('user',JSON.stringify(user))
      axios.defaults.headers.common.Authorization= `Bearer ${user.token}`
    },
    LOGIN_START: state => state.loggingIn = true,
    LOGIN_STOP: (state, errorMessage) => {
      state.loggingIn = false;
      state.loginError = errorMessage;
      state.loginSuccessful = !errorMessage;
    },
    CLEAR_USER(){
      localStorage.removeItem('user')
      location.reload()
    },
    SET_LOADING(state,payload){
      state.is_loading=payload
    },
    SET_MONTH(state,selected_month){
      state.current_month=selected_month
    },


  },
  actions: {
    login({commit},credentials){
      //alert("start")
      commit('LOGIN_START');
      return axios.post('/login',credentials)
      .then((response)=>{
        const result = response.data;
        if(!result.success){

          commit('LOGIN_STOP', result.message)
        }else{
          commit('SET_USER',response.data)
        }


      })
    },
    logout({commit}){
      commit('CLEAR_USER')
    },



    changeMonth({commit},selected_month){
      commit('SET_MONTH',selected_month)
    },


  },
  modules: {
  },
  getters:{
    months_name:state=>{
      return state.months.map((month)=>{
          return month.name
      })
    },
    isLogged:(state)=> !!state.user,
    getUser:(state)=>{
      if(state.user){
        return state.user.user
      }

    },

  }
})
