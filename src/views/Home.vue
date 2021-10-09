<template>
  <div class="flex w-full">
    <!--<monitoring-task></monitoring-task>-->
  </div>
</template>

<script>
// @ is an alias to /src
//import MonitoringTask from  '../components/monthly_progress/MonitoringTask.vue'

export default {
  name: 'Home',
  components: {
   // MonitoringTask
  },
  created(){
     this.$router.push({ name: 'Sop' })
  }
}
</script>
