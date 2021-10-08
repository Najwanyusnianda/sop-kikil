<template>
 <section class="text-gray-600 body-font min-w-4/5">
  <div class="px-5 py-5 mx-auto">
    <div class="min-w-full mx-auto ">
      <div class="mx-auto w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">Standar Operasional Prosedur</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{{current_sop.title}}</h1>
        <div class=" mb-4 w-100">
        <button @click="tabs=1" class="flex-grow " :class="[tabs== 1 ? 'text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1' : 'border-b-2 border-gray-300 py-2 text-lg px-1']">Deskripsi Ringkas</button>
         <!-- <button @click="tabs=2" class="flex-grow " :class="[tabs== 2 ? 'text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1' : 'border-b-2 border-gray-300 py-2 text-lg px-1']">Pelaksana</button>-->

        </div>
        <div class="min-w-4/5 " >
          <p class="opacity-0">vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</p>
          <p class="leading-relaxed mb-4">{{current_sop.description}}</p>
        </div>

        <div class="min-w-4/5 " >
<button @click="tabs=2" class="flex-grow " :class="[tabs== 1 ? 'text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1' : 'border-b-2 border-gray-300 py-2 text-lg px-1']">Pelaksana</button>
        <div class="flex w-full border-b border-gray-200 py-2" v-for="tag in current_sop.tags" :key="tag.tag_id">
          <span class="text-gray-500 text-sm">{{tag.description}}</span>
          <span class="ml-auto text-blue-900 opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
          </span>
        </div>


        </div>

        <div class="flex mt-5">
          <span class="title-font font-medium text-xs text-gray-600">Terakhir diperbarui : {{updated_at}}</span>
          <a   :href="current_sop.file_url" target="_blank" class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Download</a>

        </div>
      </div>

    </div>
  </div>
</section>
</template>

<script>
import dayjs from 'dayjs'
export default {
    name:'SopDetail',
    props:{
        current_sop:{
            type:Object
        },
         tag_list:{
            type:Array,
            default:function(){
                return []
            }}
    },
    data(){
      return{
        tabs:1
      }
    },
    computed:{
      updated_at(){
        return dayjs(this.current_sop.updated_at).format('YYYY-MM-DD HH:mm:ss')
      }
    }
}
</script>