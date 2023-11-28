<script setup lang="ts">
import { mockTodoList } from '@/mocks/data'
import type { TodoItem } from '@/types'
import ApexCharts from 'apexcharts'
import { onMounted } from 'vue'
import dayjs from 'dayjs'

const genrerateRecentDates = () => {
  const dates: Record<string, number> = {}
  const today = dayjs()

  for (let i = 0; i < 7; i++) {
    dates[today.subtract(i, 'day').format('YYYY-MM-DD')] = 0
  }

  return dates
}

const countTodoPerDate = (todoList: TodoItem[]) => {
  const recentDates = genrerateRecentDates()
  for (const todo of todoList) {
    const todoDate = dayjs(todo?.date).format('YYYY-MM-DD')
    recentDates[todoDate]++
  }
  return recentDates
}

const dates = countTodoPerDate(mockTodoList)

const options = {
  series: [
    {
      name: 'Desktops',
      data: Object.values(dates)
    }
  ],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: '일별 todo 갯수',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    }
  },
  xaxis: {
    categories: Object.keys(dates)
  }
}
onMounted(() => {
  var chart = new ApexCharts(document.querySelector('#line-chart'), options)
  chart.render()
})
</script>

<template>
  <div id="line-chart" class="w-full"></div>
</template>
