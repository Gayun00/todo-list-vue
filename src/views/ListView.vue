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
import type { FilterCategory, TodoItem } from '@/types'
import TodoItemComposerVue from '@/components/TodoItemComposer.vue'
import TodoItemVue from '@/components/TodoItem.vue'
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import { ScrollArea } from '@/components/ui/scroll-area'
import { createTodoMutation, useTodoListQuery } from '@/queries'
import { Button } from '@/components/ui/button'

const store = useStore()
const selectedValue = ref(store.state.category)
const selectItems = ref(['description', 'status', 'date'] as FilterCategory[])
const createTodo = createTodoMutation()

watch(selectedValue, (newVal) => {
  store.commit('updateItemFilter', { category: newVal })
})

const onCreateTodo = (values: TodoItem) => {
  createTodo.mutate(values)
}

const isOpen = ref(false)
const toggleComposer = () => {
  isOpen.value = !isOpen.value
}

const { data } = useTodoListQuery()
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
    <Button class="mt-4 w-full h-14" variant="secondary" @click="toggleComposer"> + </Button>

    <TodoItemComposerVue
      :isOpen="isOpen"
      :toggleComposer="toggleComposer"
      :onSubmitForm="onCreateTodo"
    />

    <ScrollArea class="h-[630px] w-full rounded-md border p-4">
      <div v-for="(page, index) in data?.pages" :key="index">
        <!-- TODO: infinite scroll 추가 -->
        <TodoItemVue
          v-for="item in page.pageData"
          :key="item.id"
          :title="item.title"
          :status="item.status"
          :description="item.description"
          :date="item.date"
          :id="item.id"
        />
      </div>
    </ScrollArea>
  </div>
</template>

<style></style>
