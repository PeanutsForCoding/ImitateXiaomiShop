<script setup>
import { ref } from 'vue';

const serviceList = ref([
  {
    name: '预约维修服务',
    path: '',
    icon: 'icon-settings'
  },
  {
    name: '7天无理由退货',
    path: '',
    icon: 'icon-assessed-badge'
  },
  {
    name: '15天免费换货',
    path: '',
    icon: 'icon-a-expressdiscount'
  },
  {
    name: '满69包邮',
    path: '',
    icon: 'icon-goods'
  },
  {
    name: '1100余家售后网点',
    path: '',
    icon: 'icon-location'
  },
])
</script>

<template>
  <t-footer>
    <div class="footer-services flex items-center">
      <template v-for="(item, index) in serviceList" :key="index">
        <router-link class="flex-1 flex items-center justify-center" :to="item.path">
          <i :class="['iconfont', item.icon]"></i>
          <div class="footer-services-item text-center text-[18px] text-text5">{{ item.name }}</div>
        </router-link>
      </template>
    </div>
    <div class="flex justify-between w-[1226px] mx-auto py-[40px]">
      <div class="footer-menus flex">
        <div class="w-[160px]">
          <div class="title mb-[26px]">选购指南</div>
          <ul>
            <li>手机</li>
            <li>电视</li>
            <li>笔记本</li>
            <li>平板</li>
            <li>穿戴</li>
            <li>耳机</li>
            <li>家电</li>
            <li>路由器</li>
            <li>平板</li>
            <li>配件</li>
          </ul>
        </div>
        <div class="w-[160px]">
          <div class="title mb-[26px]">服务中心</div>
          <ul>
            <li>申请售后</li>
            <li>售后政策</li>
            <li>维修服务价格</li>
            <li>订单查询</li>
            <li>以旧换新</li>
            <li>保障服务</li>
            <li>防伪查询</li>
            <li>F码通道</li>
          </ul>
        </div>
        <div class="w-[160px]">
          <div class="title mb-[26px]">线上门店</div>
          <ul>
            <li>小米之家</li>
            <li>服务网点</li>
            <li>授权体验店/专区</li>
          </ul>
        </div>
        <div class="w-[160px]">
          <div class="title mb-[26px]">关于小米</div>
          <ul>
            <li>了解小米</li>
            <li>加入小米</li>
            <li>投资者关系</li>
            <li>可持续发展</li>
            <li>廉洁举报</li>
          </ul>
        </div>
        <div class="w-[160px]">
          <div class="title mb-[26px]">关注我们</div>
          <ul>
            <li>新浪微博</li>
            <li>官网微信</li>
            <li>联系我们</li>
            <li>公益基金会</li>
          </ul>
        </div>
      </div>
      <div class="w-[244px] h-[208px]">
        <div class="flex flex-col items-center justify-center border-l-[1px] border-text5 border-solid">
          <div class="text-[22px] mb-[5px] text-theme1">400-100-5678</div>
          <div class="text-[12px] text-text5 mb-[5px]">8:00-18:00（仅收市话费）</div>
          <div class="customer-service-btn">
            <i class="iconfont icon-customer-service"></i>
            人工客服
          </div>
        </div>
        <div class="flex flex-col items-center justify-center mt-[25px]">
          <div class="text-[22px] mb-[5px] text-theme1">400-180-8888</div>
          <div class="text-[12px] text-text5 mb-[5px]">8:00-18:00（仅收市话费）</div>
          <div class="text-[12px] text-text5 mb-[5px]">适用于：MIX FOLD、巨屏电视系列</div>
          <div class="customer-service-btn">
            <i class="iconfont icon-customer-service"></i>
            人工客服
          </div>
        </div>
      </div>
    </div>
  </t-footer>
</template>

<style lang='less' scoped>
.t-layout__footer {
  color: #333;
  background-color: #fff;
  min-width: 1226px;

  .footer-services {
    padding: 27px 0;
    margin: 0 auto;
    width: 1226px;
    height: 80px;
    border-bottom: 1px solid #e0e0e0;

    a {
      border-right: 1px solid var(--color-text5);

      &:last-child {
        border-right: none;
      }

      &:hover {
        color: var(--color-theme1);

        div {
          color: var(--color-theme1);
        }
      }
    }

    .iconfont {
      font-size: 35px;
      margin-right: 6px;
    }

    &-item {}
  }

  .footer-menus {
    padding-left: 160px;

    .title {
      font-size: 14px;
      line-height: 1.25;
      color: #424242;
    }

    ul {
      li {
        font-size: 12px;
        margin-top: 10px;
        cursor: pointer;

        &:hover {
          color: var(--color-theme1);
        }
      }
    }
  }

  .customer-service-btn {
    box-sizing: border-box;
    width: 120px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border: 1px solid var(--color-theme1);
    font-size: 12px;
    color: var(--color-theme1);
    cursor: pointer;

    &:hover {
      background: var(--color-theme1);
      color: var(--color-theme2);
    }

    .icon-customer-service {
      font-size: 18px;
      vertical-align: middle;
    }
  }
}
</style>