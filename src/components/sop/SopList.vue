<template>

<div class="w-full">
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto ">
    <div v-for="sop in sops" :key="sop.id" class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col ">
      <div class="sm:w-16 sm:h-16 w-16 h-16 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-8 sm:h-8 w-8 h-8" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>

      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">{{sop.title}}</h2>
        <p class="leading-relaxed text-base">{{sop.description}}</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">Detail
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>

    <button class="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Lihat lebih banyak</button>
  </div>
</section>
</div>

</template>

<script>
import dayjs from 'dayjs'
export default {
    name:'SopList',
    props:{
        sop_list:{
            type:Array,
            default:function(){
                return []
            }

        },
        tags_list:{
            type:Array,
            default:function(){
                return []
            }

        },

    },
    data(){

    },
    computed: {
        sops() {
            return this.sop_list.map((sop) => {
                let tags = this.tags_list.filter((tag) => {
                    return tag.sop_id == sop.id
                })
                return {
                    "id": sop.id,
                    "title": sop.title,
                    "file_url": sop.file_url,
                    "description":  this.text_truncate(sop.description,200),
                    "img_url": '',
                    "updated": dayjs(sop.updated_at).format('YYYY-MM-DD HH:mm:ss'),
                    "tags": tags


                }

            })
        }
    },
    methods:{
                text_truncate(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  }
    }

}
</script>