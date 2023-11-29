<script setup lang="ts">
import { mockTodoList } from '@/mocks/data'
import type { TodoItem } from '@/types'
import * as d3 from 'd3'
import { onMounted } from 'vue'

// TODO: api 호출로 변경

const pie = d3.pie()

const countTodoPerStatus = (todoList: TodoItem[]) => {
  const counts: Record<string, number> = {
    todo: 0,
    inprogress: 0,
    done: 0
  }
  for (const todo of todoList) {
    counts[todo.status]++
  }
  return counts
}
const test = countTodoPerStatus(mockTodoList)
const data = Object.values(test)
const colors = ['#e06666', '#ffd966', '#93c47d']

onMounted(() => {
  const svg = d3.select('#pie-chart')
  const width = 200
  const height = 200
  const radius = Math.min(width, height) / 2
  const g = svg.append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
  const color = d3.scaleOrdinal(colors)

  const arc = d3.arc().innerRadius(0).outerRadius(radius)

  const arcs = g.selectAll('.arc').data(pie(data)).enter().append('g').attr('class', 'arc')

  arcs
    .append('path')
    .attr('fill', (d, i) => color(i.toString()))
    .attr('d', (d: any) => arc(d))
})
</script>
<template>
  <div class="flex items-center gap-x-40">
    <svg id="pie-chart" width="200" height="200"></svg>
    <div class="flex flex-col">
      <div class="flex items-center" v-for="(item, index) in Object.entries(test)" :key="item[0]">
        <svg width="20" height="20">
          <circle cx="10" cy="10" r="7" :fill="colors[index]"></circle>
        </svg>
        <p class="ml-2 pb-1">{{ item[0] }} {{ item[1] }}개</p>
      </div>
    </div>
  </div>
</template>
