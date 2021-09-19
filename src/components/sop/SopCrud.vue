<template>
    <div>
        <div class=" p-4  dark:bg-gray-700 w-full">
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                    <!-- <span class="rounded-xl relative p-2 bg-blue-100">

                </span>-->
                    <div class="mr-5 flex flex-col">
                        <span class="font-bold text-2xl text-gray-800 dark:text-white ml-2">
                            Tugas Rutin Bulanan
                        </span>
                        <span class="text-sm text-gray-500 dark:text-white ml-2">

                        </span>
                    </div>
                    <span
                        class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200">
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
                <div class="w-full   sm:rounded-lg ">
                    <table-task :columns="columns_sop" :rows="sop_list"></table-task>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
import TableTask from '../../components/utils/TableTask.vue'

export default {
    name: 'SopCrud',
    components: {
        TableTask

    },
    data() {
        return {
            columns_sop: [{
                    label: 'Name',
                    field: 'name',
                },
                {
                    label: 'Age',
                    field: 'age',
                    type: 'number',
                },
                {
                    label: 'Created On',
                    field: 'createdAt',
                    type: 'date',
                    dateInputFormat: 'yyyy-MM-dd',
                    dateOutputFormat: 'MMM do yy',
                },
                {
                    label: 'Percent',
                    field: 'score',
                    type: 'percentage',
                },
            ],
            sop_list: [{
                    id: 1,
                    name: "John",
                    age: 20,
                    createdAt: '',
                    score: 0.03343
                },
                {
                    id: 2,
                    name: "Jane",
                    age: 24,
                    createdAt: '2011-10-31',
                    score: 0.03343
                },
                {
                    id: 3,
                    name: "Susan",
                    age: 16,
                    createdAt: '2011-10-30',
                    score: 0.03343
                },
                {
                    id: 4,
                    name: "Chris",
                    age: 55,
                    createdAt: '2011-10-11',
                    score: 0.03343
                },
                {
                    id: 5,
                    name: "Dan",
                    age: 40,
                    createdAt: '2011-10-21',
                    score: 0.03343
                },
                {
                    id: 6,
                    name: "John",
                    age: 20,
                    createdAt: '2011-10-31',
                    score: 0.03343
                },
            ]
        }
    }
}



</script>