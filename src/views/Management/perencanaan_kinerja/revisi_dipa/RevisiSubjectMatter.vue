<template>
    <table class=" text-sm font-base text-gray-600 w-5/6 mx-auto items-center">
        <thead>
            <tr>
                <th>Subbagian/Fungsi</th>
                <th>Status Revisi</th>
                 <th>Tanggal Upload</th>
                <th>Upload Hasil Revisi</th>


            </tr>
        </thead>
        <tbody>
            <tr class="items-center text-center " v-for="sm in map_revisi_sm" :key="sm.sm_kode">
                <td class="text-left justify-between flex py-2 items-center mx-auto">
                    <span>
                        {{ sm.sm }}
                    </span>

                    <span class="px-2 py-1 flexfont-semibold text-xs rounded-md text-gray-500 bg-gray-200">
                        {{ sm.sm_kode }}
                    </span>
                </td>

                <td class="text-xs">

                    <span class="text-green-700 bg-green-200 px-1 rounded-md"  v-if="sm.is_revisi_complete">
                        sudah diupload
                    </span>

                    <span class="text-gray-500" v-else>
                        belum diupload
                    </span>

                </td>
                <td>

                    <span class="text-gray-500 text-xs" v-if="sm.is_revisi_complete" >
                        {{ sm.date_complete }}
                    </span>


                </td>
                <td>

                                        <button v-if="!sm.is_revisi_complete" @click="uploadRevisiSm(sm.sm_kode)" class="bg-gray-200 text-gray-600 font-light hover:bg-gray-300
                                            focus:ring-offset-gray-200 focus:ring-gray-500 font-semibold text-xs p-1  px-4 rounded inline-flex items-center shadow focus:ring-2 focus:ring-offset-2  ">
                                            <span class=" ">upload</span>
                                        </button>
                                        <button v-else @click="uploadRevisiSm(sm.sm_kode)" class="bg-green-100 text-gray-600 font-light hover:bg-gray-300
                                            focus:ring-offset-gray-200 focus:ring-gray-500 font-semibold text-xs p-1  px-4 rounded inline-flex items-center shadow focus:ring-2 focus:ring-offset-2  ">
                                            <span class=" ">Perbaiki</span>
                                        </button>
                </td>

            </tr>
        </tbody>
    </table>


</template>
<script>
import dayjs from 'dayjs'
export default {
    name:'RevisiSubjectMatter',
    props:{
        is_revisi:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{

            revisi_sm:[
                {sm:'Bagian Umum',sm_kode:'11026', is_revisi_complete:false,date_complete:''},
                {sm:'Fungsi Sosial',sm_kode:'11026', is_revisi_complete:true,date_complete:'2021-09-04'},
                {sm:'Fungsi Nerwilis',sm_kode:'11026', is_revisi_complete:false,date_complete:''},
                {sm:'Fungsi Produksi',sm_kode:'11026', is_revisi_complete:true,date_complete:'2021-10-03'},
                {sm:'Fungsi Distribusi',sm_kode:'11026',is_revisi_complete:false,date_complete:''},
                {sm:'Fungsi IPDS',sm_kode:'11026',is_revisi_complete:false,date_complete:''}
            ]
        }
    },
    computed:{
        map_revisi_sm(){
            return this.revisi_sm.map((sm)=>{
                return {
                    sm:sm.sm,
                    sm_kode:sm.sm_kode,
                    is_revisi_complete:sm.is_revisi_complete,
                    date_complete:dayjs(sm.date_complete).format("DD MMM YYYY")
                }
            })

        }
    },
    methods:{
        uploadRevisiSm(kode_sm){
            //alert("wow")
            this.$emit("openUploadRevisiForm",kode_sm)
        }
    }
}
</script>