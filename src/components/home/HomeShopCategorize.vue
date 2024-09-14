<script setup>
import { ref } from 'vue';
import { ChevronRightIcon } from 'tdesign-icons-vue-next'

const list = ref([
  {
    id: '1',
    name: '小米手机',
  },
  {
    id: '2',
    name: '小米手机',
  },
  {
    id: '3',
    name: '小米手机',
  },
  {
    id: '4',
    name: '小米手机',
  },
  {
    id: '5',
    name: '小米手机',
  },
  {
    id: '6',
    name: '小米手机',
  },
  {
    id: '7',
    name: '小米手机',
  },
  {
    id: '8',
    name: '小米手机',
  },
  {
    id: '9',
    name: '小米手机',
  },
  {
    id: '10',
    name: '小米手机',
  },
])

const bannerList = ref([
  {
    id: '1',
    bannerUrl: 'banner1',
    backgroundColor: '#494550'
  },
  {
    id: '2',
    bannerUrl: 'banner2',
    backgroundColor: '#837a72'
  },
  {
    id: '3',
    bannerUrl: 'banner3',
    backgroundColor: '#727a81'
  },
])


const activeSBannertyle = ref({
  background: bannerList.value[0].backgroundColor
})
function getBanner(url) {
  return new URL(`../../assets/images/home-banner/${url}.png`, import.meta.url).href
}

function handleChangeSwiper(current) {
  const currentItem = bannerList.value.find((item, index) => index === current)
  if (currentItem) {
    activeSBannertyle.value = { backgroundColor: currentItem.backgroundColor }
  }
}
</script>

<template>
  <div class="home-page-shopswiper-wrapper flex flex-row items-center">
    <div class="left-content" :style="activeSBannertyle">
      <ul class="flex flex-col items-center justify-between">
        <li class="flex flex-row items-center justify-between" v-for="item in list" :key="item.id">
          <span class="name">{{ item.name }}</span>
          <ChevronRightIcon color="white" size="20" />
        </li>
      </ul>
    </div>
    <div class="right-content">
      <t-swiper class="banner-swiper" :duration="300" :interval="3000" @change="handleChangeSwiper">
        <t-swiper-item v-for="item in bannerList" :key="item.id">
          <img class="banner-img" :src="getBanner(item.bannerUrl)" alt="">
        </t-swiper-item>
      </t-swiper>
    </div>
  </div>
</template>

<style lang='less' scoped>
.home-page-shopswiper-wrapper {
  position: relative;
  height: 460px;

  .left-content {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    padding: 20px 0;
    height: 100%;
    width: 234px;
    background: v-bind;

    ul {
      height: 100%;

      li {
        box-sizing: border-box;
        padding: 0 20px;
        height: 42px;
        width: 100%;
        color: white;
        cursor: pointer;

        &:hover {
          background: var(--color-theme1);
        }

        span {
          font-size: 14px;
        }
      }
    }
  }

  .right-content {
    height: 100%;
    flex: 1;

    .banner-swiper {
      :deep(.t-swiper__content) {
        height: 460px;
      }

      :deep(.t-swiper__arrow-left) {
        height: 40px;
        width: 40px;
        left: 250px;

        .t-icon-chevron-left {
          height: 100%;
          width: 100%;
        }
      }

      :deep(.t-swiper__arrow-right) {
        height: 40px;
        width: 40px;

        .t-icon-chevron-right {
          height: 100%;
          width: 100%;
        }
      }


      :deep(.t-swiper__navigation) {
        left: initial;
        right: 0;
      }

      .banner-img {
        height: 460px;
        width: auto;
      }
    }
  }
}
</style>