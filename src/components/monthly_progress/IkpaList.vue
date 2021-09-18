<template>
    <div class=" p-4  dark:bg-gray-700 w-full">
        <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
               <!-- <span class="rounded-xl relative p-2 bg-blue-100">

                </span>-->
                <div class="mr-5 flex flex-col">
                    <span class="font-bold text-2xl text-gray-800 dark:text-white ml-2">
                        Indikator Kinerja Pelaksanaan Anggaran 
                    </span>
                    <span class="text-sm text-gray-500 dark:text-white ml-2">

                    </span>
                </div>
                            <span class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200">
                September 2021
            </span>
            </div>
            <div class="flex items-center">

                <select
                    class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    name="month">
                    <option value="">
                        Pilih Bulan
                    </option>
                    <option value="dog">
                        Dog
                    </option>
                    <option value="cat">
                        Cat
                    </option>

                </select>

                <button class="text-gray-200">
                    <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
       <!-- <div class="flex items-center justify-between mb-4 space-x-12">
            <span class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200">
                September 2021
            </span>
            <span
                class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-red-400 border border-red-400  bg-white">
                HIGHT PRIORITY
            </span>
        </div>-->

        <div class="block m-auto pt-4">

        </div>

        <div class="bg-white  flex items-center justify-center  shadow-lg rounded-2xl">
            <div class="w-full  overflow-hidden sm:rounded-lg ">
                <div class="flex w-full">
                    <table class="min-w-full leading-norma table-auto  ">
                        <thead>
                            <tr>

                                <th scope="col"
                                    class="px-5 py-2 bg-white  border-b border-gray-200 text-gray-800  text-left text-md uppercase font-bold">
                                    Indikator
                                </th>
                                 <th scope="col"
                                    class="px-5 py-2 bg-white  border-b border-gray-200 text-gray-800  text-left text-md uppercase font-bold">
                                    Bobot
                                </th>
                                <th scope="col"
                                    class="px-5 py-2 bg-white  border-b border-gray-200 text-gray-800  text-left text-md uppercase font-bold">
                                    Keterangan
                                </th>

                                <th scope="col"
                                    class="px-5 py-2 bg-white  border-b border-gray-200 text-gray-800  text-left text-md uppercase font-bold">

                                </th>
                            </tr>
                        </thead>

                        <tbody v-if="ikpas.length >0">

                            <tr v-for="task in ikpas" :key="task.indicator_id" class="even:bg-gray-100 odd:bg-white">

                                <td class="px-5 py-4  text-sm ">
                                    <p class="text-gray-700 whitespace-no-wrap font-semibold">
                                        {{ task.name }}
                                    </p>
                                </td>
                                <td class="px-5 py-2 text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ task.bobot}} %
                                    </p>
                                </td>
                                <td class="px-5 py-2  text-sm ">
                                    <span class="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-center"
                                        :class="[task.is_complete ? 'text-green-500 bg-green-50' : 'text-red-500 bg-red-50' ]">
                                        {{ task.is_complete ? 'Selesai' : 'Belum' }}
                                    </span>

                                </td>
                                <td class="px-5 py-2  text-sm">
                                        <button @click="viewDetail(task.indicator_id)" class="bg-gray-200 text-gray-600 font-light hover:bg-gray-300
                                            focus:ring-offset-gray-200 focus:ring-gray-500 font-semibold text-sm  px-4 rounded inline-flex items-center shadow focus:ring-2 focus:ring-offset-2  ">
                                            <span>Detail</span>
                                        </button>
                                </td>

                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'IkpaList',
    props:{
        ikpas:{
            type:Array,
            default:function(){
                return []
            }
        }
    }
}
</script>