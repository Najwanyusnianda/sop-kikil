<template>
  <vue-final-modal
    :resize-directions="['b']"

    v-slot="{ params, close }"
    v-bind="$attrs"
    classes="justify-center items-center  m-auto w-3/5 max-w-3/5  h-4/5"
    content-class="relative flex flex-col  max-h-full mx-4 p-4 border dark:border-gray-800 rounded bg-white dark:bg-gray-900"
    v-on="$attrs"
  >
    <span class="mr-8 text-2xl font-bold ">
      <slot name="title"></slot>
    </span>
    <div class="flex-grow overflow-y-auto">
      <slot v-bind:params="params"></slot>
    </div>
    <div class="flex-shrink-0 flex justify-center items-center pt-4">
      <button class="vfm-btn bg-gray-200 p-4 text-gray-600 px-2 rounded-md"  @click="$emit('confirm', close)">Tutup</button>
     <!-- <button class="vfm-btn" @click="$emit('cancel', close)">cancel</button>-->
    </div>
    <button class="absolute top-0 right-0 mt-2 mr-2" @click="close">
      <mdi-close></mdi-close>
    </button>
  </vue-final-modal>
</template>

<script>
export default {
  name: 'VTailwindModal',
  inheritAttrs: false,
  emits:['cancel','confirm']
}
</script>