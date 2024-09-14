<script setup>
import { RouterView } from 'vue-router'

const globalConfig = {
}
</script>

<template>
  <t-config-provider :global-config="globalConfig">
    <RouterView />
  </t-config-provider>
</template>

<style lang="less"></style>
