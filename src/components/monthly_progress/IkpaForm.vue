<template>
    <div class="bg-white">
        <div class="justify-start flex w-1/5">
                                <button @click="removeTaskState()" type="button"
                    class="py-1 px-2 flex justify-center items-center   hover:bg-gray-500 focus:ring-gray-500 focus:ring-offset-gray-200 text-gray-700 hover:text-white w-full transition ease-in duration-200 text-center text-base text-sm  focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Laporan Bulanan
                </button>
        </div>
        <form @submit.prevent="postIkpa" enctype='multipart/form-data'>
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-5 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h5 class="sm:text-xl text-2xl font-medium title-font mb-3text-gray-900">Indikator Kinerja
                            Pelaksanaan Anggaran </h5>
                        <p class="lg:w-2/3 text-sm mx-auto leading-relaxed text-gray-400 ">Menambahkan laporan IKPA
                            Bulanan</p>
                    </div>

                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">



                            <!--<div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                </div>
                            </div>-->
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="description" class="leading-7 text-sm text-gray-600 w-1/2">Deskripsi
                                        Ringkas</label>
                                    <select v-model="bulan"
                                        class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                        name="month">
                                        <option value="">
                                            Pilih Bulan
                                        </option>
                                        <option :value="month.value" v-for="month in months" :key="month.value">
                                            {{ month.name }}
                                        </option>


                                    </select>
                                </div>
                            </div>

                            <div class="p-2 w-full">
                                <div class="relative">

                                    <label for="message" class="leading-7 text-sm text-gray-600">Upload File</label>
                                    <input type="file" id="ikpa_file" name="ikpa_file" ref="file"
                                        @change="handleFileUpload"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                </div>
                            </div>

                            <div class="p-2 w-full mt-5 pb-10">
                                <button type="submit"
                                    class="py-2 flex mx-auto text-white bg-blue-500 text-sm border-0 py-1 px-8 focus:outline-none hover:bg-blue-600 rounded ">Simpan</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </form>
    </div>
</template>
<script>
    //import dayjs from 'dayjs'
    import axios from 'axios'
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'IkpaForm',
        data() {
            return {
                ikpa_file: '',
                bulan: ''
            }
        },
        computed: {
            ...mapState(['months', 'current_month', 'current_year']),
        },
        methods: {
            handleFileUpload(e) {
                //  alert("wow")
                this.ikpa_file = e.target.files[0];
            },
            removeTaskState(){
                this.$emit("removeState")
            },
            async postIkpa() {

                const header = {
                    "Content-Type": "multipart/form-data"
                }
                const url = '/ikpa/uploads';
                const formData = new FormData();

                formData.append("ikpa_file", this.ikpa_file)
                formData.append('month_id', this.bulan)


                await axios.post(url,
                    formData, {
                        headers: header
                    }).then((response) => {
                    if (response.status === 200) {
                        const result = response.data
                        console.log(result)
                        this.removeTaskState()

                    }
                })













            },
        }
    }
</script>