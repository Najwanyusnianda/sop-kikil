<template>
    <div class="flex items-center h-screen justify-center  w-full mx-auto font-theme ">
        <div class="w-2/3 bg-white flex ">
          <div class="bg-blue-700  flex-col  items-center justify-start">
          <h2 class="font-bold text-xl text-white tracking-wider pl-2">SOP KIKIL </h2>
            <div class="ml-2 ">

              <span class="text-white font-thin text-sm">
                Standar Operrasional Prosedur Kinerja Anggaran BPS Kabupaten Aceh Singkil
              </span>
            </div>
          </div>

          <form @submit.prevent="pushLogin" class="bg-white  rounded px-12  pb-8 mb-4  ">
            <!-- @csrf -->


            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-normal mb-2"
                for="username"
              >
                Username
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-1 focus:outline-none focus:border-blue-500"
                name="username"
                v-model="auth.username"
                type="username"
                required
                autofocus
                placeholder="Username"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-normal mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-1 focus:outline-none focus:border-blue-500"
                v-model="auth.password"
                type="password"
                placeholder="Password"
                name="password"
                required
                autocomplete="current-password"
              />
            </div>
            <div class="flex items-center justify-between">

                 <div v-if="!loggingIn" class="container-loading">
                  <button class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Sign In</button>
                </div>
                <div v-if="loggingIn" class="container-loading">
                  <button disabled class="disabled:opacity-50 opacity-50 px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Signing In....</button>
                </div>
              <div class="item">
                              <a
                class="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Daftar
              </a>
              |
              <a
                class="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Lupa Password?
              </a>
              </div>

            </div>
          </form>


             <span v-if="loginError" class="p-5 bg-red-200 text-red-800 flex justify-center">{{ loginError.message }}</span>

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
          this.$router.push({name:'Dashboard'})
          this.login(this.auth).then(()=>{
           // console.log(this.auth)
            this.$router.push({name:'Dashboard'})
          }).catch(error => {
        if (error.response.status === 401) {
          this.$store.commit('LOGIN_STOP', error.response.data)
            console.log('Failed to login')
this.$router.push({name:'Dashboard'})
           // this.$router.push({name:'Login'})
        }

      })
        }
    },
}
</script>