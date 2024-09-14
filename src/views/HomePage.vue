<script setup>
import { ref } from 'vue';
import ShopMenuItem from '@/components/home/ShopMenuItem.vue'
import HomeHeader from '@/components/home/HomeHeader.vue';
import HomeSubNavBar from '@/components/home/HomeSubNavBar.vue'
import HomeShopCategorize from '@/components/home/HomeShopCategorize.vue'
import ServiceRecommendation from '@/components/home/ServiceRecommendation.vue';
import ShopRecommendation from '@/components/home/ShopRecommendation.vue';
import RecommendationBanner from '@/components/home/RecommendationBanner.vue';
import PhoneRecommendation from '@/components/home/PhoneRecommendation.vue';
import OtherShopRecommendation from '@/components/home/OtherShopRecommendation.vue';
import HomeFooter from '@/components/home/HomeFooter.vue';

const show = ref(false)

</script>

<template>
  <div class="home-page-wrapper">
    <t-layout>
      <home-header />
      <t-layout class="home-page-main">
        <t-content>
          <home-sub-nav-bar @handleMouseEvent="(val) => show = val" />
          <home-shop-categorize />
          <div class="recommendation-wrapper flex items-center justify-between gap-x-4">
            <service-recommendation />
            <shop-recommendation />
          </div>
        </t-content>
        <Transition name="fade">
          <ShopMenuItem v-if="show" :transitionStyle="transitionStyle" />
        </Transition>
      </t-layout>
      <recommendation-banner />
      <phone-recommendation />
      <other-shop-recommendation />
      <other-shop-recommendation />
      <RecommendationBanner />
      <HomeFooter />
    </t-layout>
  </div>
</template>

<style lang='less' scoped>
.home-page-wrapper {
  padding-left: 5px;

  &>.t-layout {
    min-width: 1226px
  }
}

.home-page-main {
  position: relative;
  border: 1px solid #e5e5e5;
  border-top: none;
  background: var(--color-theme2);

  .t-layout__content {
    width: 1226px;
    margin: 0 auto;
    padding-bottom: 26px;
  }

  .recommendation-wrapper {
    margin-top: 14px;
    height: 170px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.7s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>