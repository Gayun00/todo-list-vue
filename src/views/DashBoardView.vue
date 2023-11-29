<script setup lang="ts">
import TodoPerDateChartVue from '@/components/charts/TodoPerDateChart.vue'
import TodoStatusChartVue from '@/components/charts/TodoStatusChart.vue'
</script>

<template>
  <main class="space-y-20">
    <TodoPerDateChartVue />
    <TodoStatusChartVue />
  </main>
</template>
