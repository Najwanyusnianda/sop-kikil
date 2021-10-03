<template>
<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>

      <img class="mx-auto h-30 w-auto" src="../assets/lambang_bps-01.svg" alt="BPS Kabupaten Aceh Singkil">
      <h2 class="mt-6 text-center text-3xl text-blue-800 font-extrabold tracking-wider ">
        SOP KIKIL
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        <span class="font-semibold">S</span>tandar <span class="font-semibold">O</span>perasional <span class="font-semibold">P</span>rosedur <span class="font-semibold">Ki</span>nerja Anggaran BPS Kabupaten Aceh Sing<span class="font-semibold">kil</span>
        <!--<a href="#" class="font-medium text-blue-600 hover:text-blue-500">
          start your 14-day free trial
        </a>-->
      </p>

    </div>
      <span v-if="loginError" class="p-5 bg-red-200 text-red-800 flex justify-center">{{ loginError }}</span>
       <span class="bg-green-200 text-green-600" v-if="loginSuccessful">Login Berhasil</span>
    <form class="mt-8 space-y-6" @submit.prevent="pushLogin">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input    name="username"
                v-model="auth.username"
                type="username" required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Username">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password"
                v-model="auth.password"
                type="password"
                placeholder="Password"
                name="password"
          autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" >
        </div>
      </div>

      <div class="flex items-center justify-between">
        <!--<div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>-->

        <div class="text-sm">
          Belum terdaftar atau lupa password?
          <a href="http://wa.me/6282261044800" class="font-medium text-blue-600 hover:text-blue-500">
            Hubungi Admin
          </a>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: solid/lock-closed -->
            <svg class="h-5 w-5 text-blue-500 group-hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import {
   // mapGetters,
    mapState,
    mapActions
} from 'vuex';
export default {
    name:'Login',
    data () {
        return {
        auth:{
        username: '',
        password: ''
            }
        }
    },
    computed:{
              ...mapState([
    'loggingIn',
    'loginError',
    'loginSuccessful'
  ]),
    },
    methods: {
        ...mapActions([
            "login"
        ]),
        pushLogin(){
         // this.$router.push({name:'Dashboard'})
          this.login(this.auth).then((response)=>{
            console.log(response)
            this.$router.push({name:'Dashboard'})
          }).catch(error => {
            console.log("error:")
            console.log(error)
       // if (error.response.status === 401) {
          this.$store.commit('LOGIN_STOP', "user tidak ditemukan")
            console.log('Failed to login')
//this.$router.push({name:'Dashboard'})
           //this.$router.push({name:'Login'})
       // }

      })
        }
    },
}
</script>