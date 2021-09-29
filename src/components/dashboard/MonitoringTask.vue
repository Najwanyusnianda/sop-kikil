<template>
                <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                  <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center">

                      <div class="flex flex-col">
                        <span class="font-bold text-md text-black dark:text-white ml-2">
                          Kegiatan Rutin
                        </span>
                        <span class="text-sm text-gray-500 dark:text-white ml-2">
                            {{ current_month.name }}
                        </span>
                      </div>
                    </div>

                  </div>
                  <hr>
                                <ul v-if="tasks.length > 0" >
                                        <li   v-for="task in tasks" :key="task.id" class="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                            <div class="flex items-center justify-start text-sm">
                                                <span class="mx-4">
                                                    01


                                                </span>
                                                <span>
                                                    {{ task.name }}
                                                </span>
                                            </div>
                                            <svg v-if="task.is_complete" width="20" height="20" fill="currentColor" viewBox="0 0 1024 1024" class="text-green-500 mx-4">
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="currentColor">
                                                </path>
                                            </svg>
                                            <svg v-else width="20" height="20" fill="currentColor" class="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                </path>
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </li>

                                </ul>

                                <ul v-else class="flex justify-center">
                                    <span
                                        class=" px-2 py-1 flex  mt-4 items-center rounded-md font-semibold text-yellow-500 bg-yellow-100">
                                             Kegiatan tidak ditemukan
                                    </span>

                                </ul>

                  <!--<span
                    class="px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-md font-semibold text-yellow-500 bg-yellow-100">
                    DUE DATE : 18 JUN
                  </span>-->
                </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'MonitoringTask',
    data() {
        return {
            tasks: [{
                    "id": 1,
                    "indicator_id": 9001,
                    "name": "Penyampaian LPJ Bendahara",
                    "completed_date": "",
                    "is_complete": "FALSE",
                    "note": "",
                    "start_date": "2021-11-01",
                    "end_date": "2021-11-10",
                    "month_num": 11,
                    "deskripsi": "<strong>Laporan Pertanggungjawaban Bendahara (LPJ Bendahara) adalah laporan yang dibuat oleh Bendahara Penerimaan/Pegeluaran atas uang/surat berharga yang dikelolanya sebagai pertanggungjawaban pengelolaan uang.<br /><Satker wajib menyampaikan LPJ Bendahara yang dihasilkan dari aplikasi SAS ke aplikasi SPRINT secara rutin setiap bulan dengan batas waktu&nbsp;<strong>10 (sepuluh) hari kerja</strong>&nbsp;setelah bulan bersangkutan berakhir atau pada hari kerja sebelumnya jika tanggal 10 adalah hari libur.",
                    "dasar_hukum": "<ol>\n<li>Peraturan Menteri Keuangan Nomor&nbsp;<a href=\"https://jdih.kemenkeu.go.id/FullText/2013/162~PMK.05~2013Per.HTM\">162/PMK.05/2013</a>&nbsp;tentang Kedudukan dan Tanggung Jawab Bendahara pada Satuan Kerja Pengelola Anggaran Pendapatan dan Belanja Negara.</li>\n<li>Peraturan Menteri Keuangan Nomor&nbsp;<a href=\"https://jdih.kemenkeu.go.id/FullText/2013/162~PMK.05~2013Per.HTM\">230/PMK.05/2016</a>&nbsp;tentang Perubahan atas Peraturan Menteri Keuangan Nomor 162/PMK.05/2013 Tentang Kedudukan dan Tanggung Jawab Bendahara pada Satuan Kerja Pengelola Anggaran Pendapatan dan Belanja Negara</li>\n<li>Peraturan Direktur Jenderal Perbendaharaan Nomor&nbsp;<a href=\"https://drive.google.com/file/d/1NR66wSomrZ7mn4qd_Bb4y25UqEr6pvzv/view?usp=sharing\">PER-03/PB/2014</a>&nbsp;tentang Petunjuk Teknis Penatausahaan, Pembukuaan, dan Pertanggungjawaban Bendahara pada Satuan Kerja Pengelola Anggaran Pendapatan dan Belanja Negara serta Verifikasi Laporan Pertanggungjawaban Bendahara</li>\n</ol>",
                    "lampiran": "<ol>\n<li>Laporan Pertanggungjawaban (LPJ) Bendahara Pengeluaran sesuai format PER-03/PB/2014 dari aplikasi SAS atau SAKTI (Khusus bagi Bendahara satker di wilayah kerja KPPN Kotabumi yang mengelola dana APBN)</li>\n<li>Laporan Saldo Rekening Bendahara (dapat dicetak di SILABI bersamaan dengan pencetakan LPJ)</li>\n<li>Copy Rekening Koran Bendahara Pengeluaran</li>\n</ol>"
                },
                {
                    "id": 2,
                    "indicator_id": 9002,
                    "name": "Konfirmasi Data Capaian Output",
                    "completed_date": "",
                    "is_complete": "FALSE",
                    "note": "",
                    "start_date": "2021-11-01",
                    "end_date": "2021-11-10",
                    "month_num": 11,
                    "deskripsi": "Pelaporan data capaian output merupakan bagian dari monev pelaksanaan anggaran yang bertujuan untuk mewujudkan belanja berkualitas sesuai dengan prinsip penganggaran berbasis kinerja. Selain itu, data capaian output dipergunakan dalam rangka penilaian kinerja anggaran. Batas akhir pelaporan bagi Satker pengguna Aplikasi SAS&nbsp;<strong>paling lambat 10 hari kerja pada bulan berikutnya<strong>",
                    "dasar_hukum": "<ol>\n<li>Peraturan Menteri Keuangan Nomor 195/PMK.05/2018 tentang Monitoring Dan Evaluasi Pelaksanaan Anggaran Belanja Kementerian Negara/Lembaga</li>\n<li>Peraturan Dirjen Perbendaharaan Nomor PER-4/PB/2021 tentang Petunjuk Teknis Penilaian Indikator Kinerja Pelaksanaan Anggaran Belanja Kementerian Negara/Lembaga</li>\n<li>Nota Dinas Direktur Jenderal Perbendaharaan Nomor ND-1/PB/PB.2/2021 hal Pelaksanaan dan Petunjuk Teknis Pelaporan Data Capaian Output Tahun 2021 Bagi Satker Pengguna Aplikasi SAS</li>\n</ol>",
                    "lampiran": ""
                },
                {
                    "id": 3,
                    "indicator_id": 9003,
                    "name": "Pengajuan SPM Gaji Induk",
                    "completed_date": "",
                    "is_complete": "FALSE",
                    "note": "",
                    "start_date": "2021-11-01",
                    "end_date": "2021-11-10",
                    "month_num": 11,
                    "deskripsi": "Surat Perintah Membayar Langsung, yang selanjutnya disingkat SPM-LS, adalah SPM langsung kepada Bendahara Pengeluaran atau Penerima Hak yang diterbitkan oleh PA/KPA atau pejabat lain yang ditunjuk atas dasar kontrak kerja, surat keputusan, surat tugas atau surat perintah kerja lainnya.SPM-LS untuk pembayaran gaji induk disampaikan kepada KPPN <strong>paling lambat tanggal 15 sebelum bulan pembayaran</strong>.Dalam hal tanggal 15 merupakan hari libur atau hari yang dinyatakan libur, penyampaian SPM-LS untuk pembayaran gaji induk kepada KPPN dilakukan paling lambat 1 (satu) hari kerja sebelum tanggal 15",
                    "dasar_hukum": "<ol>\n<li>Peraturan Menteri Keuangan Nomor&nbsp;<a href=\"https://jdih.kemenkeu.go.id/fullText/2012/190~PMK.05~2012Per.HTM\">190/PMK.05/2012</a>&nbsp;tentang Tata Cara Pembayaran Dalam Rangka Pelaksanaan Anggaran Pendapatan dan Belanja Negara</li>\n<li>Peraturan Menteri Keuangan Nomor&nbsp;<a href=\"https://jdih.kemenkeu.go.id/fullText/2018/178~PMK.05~2018Per.pdf\">178/PMK.05/2018</a>&nbsp;tentang Perubahan atas PMK 190/PMK.05/2012 tentang Tata Cara Pembayaran Dalam Rangka Pelaksanaan Anggaran Pendapatan dan Belanja Negara</li>\n<li>Peraturan Menteri Keuangan Nomor&nbsp;<a href=\"https://jdih.kemenkeu.go.id/fullText/2018/196~PMK.05~2018Per.pdf\">43/PMK.05/20</a>20&nbsp;tentang tentang Mekanisme Pelaksanaan Anggaran Belanja Negara dalam Penanganan Pandemi Corona Virus Disease 2019</li>\n</ol>",
                    "lampiran": "<ol>\n<li>SPM 2 lembar beserta Arsip Data Komputer (ADK)nya;</li>\n<li>Daftar Perubahan Data Pegawai beserta ADK Perubahan Data Pegawai (.PRB);</li>\n<li>ADK Gaji (.GPP);</li>\n<li>Surat Setoran Pajak (SSP);</li>\n<li>Daftar Rekening Terlampir (penerima lebih dari 1 pegawai);</li>\n<li>Apabila Pegawai Baru CPNS, ADK kirim pegawai baru (.krm) setelah SK,SPMT, data keluarga direkam pada aplikasi GPP dengan lengkap dan benar.</li>\n<li>Apabila Pegawai Baru Pindahan: ADK kirim pegawai baru (.krm)</li>\n</ol>"
                }
            ]
        }

    },
    props: {
        current_month: {
            type: Object,

        }
    },
    methods: {
        async getTaskList(month) { //async
            this.$store.commit('is_loading', true)
            const url = `/monthly_withdrawing/${month}`

            await axios.get(url)
                .then((response) => {
                    const res = response.data
                    this.tasks = res.data
                    this.$store.commit('is_loading', false)
                }).catch((error) => {
                    console.log(error)
                    this.$store.commit('is_loading', false)
                })
        }
    }
}
</script>
