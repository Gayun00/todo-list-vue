<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { ref } from 'vue'
import TodoItemComposerVue from '@/components/TodoItemComposer.vue'
import { createTodoMutation } from '@/queries'
import type { TodoItem } from '@/types'

const { title, date, description, status } = defineProps({
  title: String,
  description: String,
  status: String,
  date: String
})
const createTodo = createTodoMutation()

const isOpen = ref(false)
const toggleComposer = () => {
  console.log('click')
  isOpen.value = !isOpen.value
}

// TODO: editTodo 작성 후 교체
const onCreateTodo = (values: TodoItem) => {
  createTodo.mutate(values)
}
</script>

<template>
  <Card v-if="!isOpen" class="mt-5 w-full" @click="toggleComposer">
    <CardHeader>
      <div class="flex justify-between">
        <CardTitle>{{ title }}</CardTitle>
        <p>{{ date }}</p>
      </div>
    </CardHeader>
    <CardContent class="flex justify-between items-center">
      <CardDescription>{{ description }}</CardDescription>
      <div>{{ status }}</div>
    </CardContent>
    <CardFooter class="flex gap-x-4"> </CardFooter>
  </Card>

  <TodoItemComposerVue
    v-if="isOpen"
    :isOpen="isOpen"
    :toggleComposer="toggleComposer"
    :onSubmitForm="onCreateTodo"
    :buttonText="'수정'"
  />
</template>
