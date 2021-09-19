<template>
                    <div class="flex w-full">
                    <table class="min-w-full leading-norma table-auto  ">
                        <thead>
                            <tr>

                                <th scope="col"
                                    class="px-5 py-2 bg-white  border-b border-gray-200 text-gray-800  text-left text-md uppercase font-bold" v-for="col in columns" :key="col">
                                    {{ col.label }}
                                </th>

                            </tr>
                        </thead>

                        <tbody >

                            <tr v-for="(row) in rows" :key="row" class="even:bg-gray-100 odd:bg-white">

                                <td class="px-5 py-4  text-sm" v-for="col in columns" :key="col">
                                   <div class="">
                                       {{ row[col.field]}}
                                   </div>
                                </td>



                            </tr>
                        </tbody>
                    </table>

                </div>
</template>

<script>
export default {
    name:'TableTask',
    props:{
        columns:{
            type:Array,
            required:true

        },
        rows:{
            type:Array,
            required:true
        }
    },


}
</script>