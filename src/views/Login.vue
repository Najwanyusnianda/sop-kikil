<template>
    <div class="flex items-center justify-center min-h-full w-5/6 font-theme ">
        <div class="w-full max-w-md ">
            <div
              class="text-gray-800 text-2xl flex justify-center border-b-2  bg-blue-500 py-4 "
            >
            <span class="text-white font-bold">
              Silahkan Login
            </span>

            </div>

            <br>

          <form @submit.prevent="pushLogin" class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4 -mt-2 ">
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
          <br>
             <span v-if="loginError" class="p-5 bg-red-200 text-red-800 flex justify-center">{{ loginError.message }}</span>
            <p v-if="loginSuccessful">Login Successful</p>
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