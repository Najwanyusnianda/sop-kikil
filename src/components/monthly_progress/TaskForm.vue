<template>
    <div class=" p-4  dark:bg-gray-700 w-full">
        <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">

                <button @click="removeTaskState()" type="button"
                    class="py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold  focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Tugas Bulanan
                </button>

            </div>
            <div class="flex items-center">

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
        <div class="flex items-center justify-between mb-4 space-x-12">

        </div>
        <div class="block m-auto">

        </div>

        <div class="flex items-center justify-center my-4 bg-white bg-white  flex items-center justify-center  shadow-lg rounded-2xl">
            <form class="flex w-full  max-w-lg space-x-3">
                <div class="w-full  max-w-2xl px-5  m-auto  rounded-lg  dark:bg-gray-800">


                    <div class="container mx-auto max-w-md  hover:shadow-lg transition duration-300">

                        <div class="py-12 p-10  rounded-xl">
                                                                        <div class="mb-6 text-xl font-light text-center text-gray-800 dark:text-white">
                        {{ task.name }}
                    </div>
                            <div class="mb-6">

                                                                    <label class="mr-4 text-gray-700 font-bold inline-block mb-2"
                                    for="name">Keterangan</label>

                                <select
                                    class="block w-52 text-gray-700 py-2 px-3 border w-full border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                    name="animals">

                                    <option value="1">
                                        Belum
                                    </option>
                                    <option value="0">
                                        Sudah
                                    </option>

                                </select>
                            </div>
                            <div class="">
                                <label class="mr-4 text-gray-700 font-bold inline-block mb-2" for="name">Tanggal</label>
                                <input type="text"
                                    class=" w-full block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="dd/mm/yyyy" />
                            </div>
                            <br>
                            <button
                                class="mt-5 w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300">Simpan</button>
                        </div>
                    </div>

                </div>
            </form>
        </div>

    </div>
</template>

<script>
export default {
    name:'TaskForm',
    props:{
        task:{
            type:Object
        }
    },
    methods:{
        removeTaskState(){
            this.$emit('removeTaskState')
        }
    }

}
</script>