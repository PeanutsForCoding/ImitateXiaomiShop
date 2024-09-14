<script setup>
import { ref } from 'vue';

const shopList = ref([{
  id: '1',
  imgUrl: '',
  name: 'xiaomi 14',
  price: '3999'
}, {
  id: '2',
  imgUrl: '',
  name: 'xiaomi 14',
  price: '3999'
}, {
  id: '3',
  imgUrl: '',
  name: 'xiaomi 14',
  price: '3999'
}, {
  id: '4',
  imgUrl: '',
  name: 'xiaomi 14',
  price: '3999'
}, {
  id: '5',
  imgUrl: '',
  name: 'xiaomi 14',
  price: '3999'
}, {
  id: '6',
  imgUrl: '',
  name: 'xiaomi 14',
  price: '3999'
}])

</script>

<template>
  <div class="shop-menu-item-wrapper">
    <ul class="shop-menu-item-list flex flex-row items-center gap-x-[100px]">
      <li v-for="item in shopList" :key="item.id" class="shop-menu-item flex flex-col items-center">
        <img class="shop-img" src="@/assets/images/phone.png" alt="">
        <div class="shop-name">{{ item.name }}</div>
        <div class="shop-price">{{ item.price }}元起</div>
      </li>
    </ul>
  </div>
</template>

<style lang='less' scoped>
.shop-menu-item {
  &-wrapper {
    position: absolute;
    top: 100px;
    z-index: 999;
    left: 0;
    padding: 0 150px;
    width: 100%;
    height: 200px;
    background: #fff;
    box-shadow: 0 2px 2px rgba(186, 182, 182, 0.2);
  }

  &-list {
    .shop {
      &-img {
        width: 140px;
        height: auto;
      }

      &-name {
        font-size: 14px;
        color: var(--color-text3);
      }

      &-price {
        font-size: 14px;
        color: var(--color-theme1);
      }
    }
  }
}
</style>