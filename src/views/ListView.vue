<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { CATEGORY_DISPLAY_NAME } from '@/constants'
import type { FilterCategory } from '@/types'
import TodoItemComposerVue from '@/components/TodoItemComposer.vue'
import TodoItemVue from '@/components/TodoItem.vue'
import { ref, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const selectedValue = ref(store.state.category)
const selectItems = ref(['description', 'status', 'date'] as FilterCategory[])
// TODO: useCardsQuery의 data 값이 잘못 리턴되는 이슈 해결 후 교체 예정
const mockTodoList = [
  {
    title: 'card1',
    description: 'card 1 description',
    date: 'date',
    status: 'inprogress'
  },
  {
    title: 'card2',
    description: 'card 2 description',
    date: 'date',
    status: 'inprogress'
  }
]

watch(selectedValue, (newVal) => {
  store.commit('updateItemFilter', { category: newVal })
})
</script>

<template>
  <div class="w-full max-w-2xl min-w-max">
    <div class="flex gap-x-3 w-full max-w-2xl min-w-max">
      <div class="w-40">
        <Select v-model="selectedValue">
          <SelectTrigger>
            <SelectValue placeholder="제목" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem v-for="item in selectItems" :key="item" :value="item">
                {{ CATEGORY_DISPLAY_NAME[item] }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div class="w-full"><Input /></div>
    </div>
    <TodoItemComposerVue />

    <div v-if="Array.isArray(mockTodoList)">
      <div v-for="item in mockTodoList" :key="item.title">
        <TodoItemVue
          :title="item.title"
          :status="item.status"
          :description="item.description"
          :date="item.date"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
