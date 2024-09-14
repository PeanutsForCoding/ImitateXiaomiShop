<script setup>
import { ref } from 'vue';
import { getImg } from '&utils/getImg';
</script>

<template>
  <router-link :to="path">
    <div class="recommendation-banner-wrapper">
      <div class="recommendation-banner-content">
        <img class="w-[100%] h-[100%]" :src="getImg('mix_flip')" alt="">
      </div>
    </div>
  </router-link>
</template>

<style lang='less' scoped>
.recommendation-banner-wrapper {
  margin: 22px 0;
  height: 120px;

  .recommendation-banner-content {
    width: 1226px;
    margin: 0 auto;
    height: 100%;
    background: var(--color-theme2);
  }
}
</style>