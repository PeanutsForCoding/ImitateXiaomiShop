<script setup>
import { ref } from 'vue';
import { getImg } from '&utils/getImg'

const shopRecommendList = ref([
  {
    img: 'xiaomi14',
    id: '1',
    path: ''
  },
  {
    img: 'xiaomiwatch',
    id: '2',
    path: ''
  },
  {
    img: 'xiaomiear',
    id: '3',
    path: ''
  }
])
</script>

<template>
  <div class="shop-recommendation-wrapper flex-1 grid grid-cols-3 grid-rows-1 gap-4">
    <div class="shop-recommendation-item" v-for="item in shopRecommendList" :key="item.id">
      <router-link :to="item.path">
        <img class="w-[100%] h-[100%]" :src="getImg(item.img)" alt="">
      </router-link>
    </div>
  </div>
</template>

<style lang='less' scoped></style>