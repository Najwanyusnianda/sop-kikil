<template>
    <div>

<section class="text-gray-600 body-font">
  <div class="container px-5  mx-auto">

    <router-view></router-view>
  </div>
</section>

    </div>
</template>
<script>
export default {
    name:'SopMenu',
    mounted(){

        this.$router.push({
        name:'Sop'
      })

    },
    created(){
        this.$router.push({
        name:'Sop'
      })
    }
}
</script>