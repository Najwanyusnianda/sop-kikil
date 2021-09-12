<template>

<div class="w-full">
    <!--<div class="flex justify-between">
                        <p class="font-semibold text-md p-4 text-gray-700 dark:text-white">
            Hasil Pencarian : 'kegiatan'
            <span class="text-sm text-gray-500 dark:text-gray-300 dark:text-white ml-2">
                (20)
            </span>
        </p>
    </div>-->
    <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full ">

        <div class="block m-auto px-5">

        </div>
        <ul v-if="sop_list.length >0" class="  divide-y divide-gray-200 overflow-scroll ">

                        <li v-for="item in sop_list" :key=item.id >
                <a class="block hover:bg-gray-50 dark:hover:bg-gray-900">
                    <div class="px-4 py-4 sm:px-6">
                        <div class="flex items-center justify-between">
                            <p class="text-md text-gray-700 dark:text-white md:truncate">
                                {{ item.sop_name }}
                            </p>
                            <div class="ml-2 flex-shrink-0 flex">
                                <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Backlog
                                </p>
                            </div>
                        </div>
                        <div class="mt-2 sm:flex sm:justify-between">
                            <div class="sm:flex">
                                <p class="flex items-center text-md font-light text-gray-500 dark:text-gray-300">
                                    December 10, 2020
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </li>


        </ul>
    </div>
</div>

</template>

<script>
export default {
    name:'SopList',
    props:{
        sop_list:{
            type:Array,
            default:function(){
                return []
            }

        }
    },
    data(){

    }
}
</script>