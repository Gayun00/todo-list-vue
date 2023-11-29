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
import { editTodoMutation } from '@/queries'
import type { TodoItem } from '@/types'

const props = defineProps({
  id: String,
  title: String,
  description: String,
  status: String,
  date: String
})
const editTodo = editTodoMutation()

const isOpen = ref(false)
const toggleComposer = () => {
  isOpen.value = !isOpen.value
}
// TODO: editTodo 작성 후 교체
const onEditTodo = (values: TodoItem) => {
  if (!props.id) return
  editTodo.mutate({ params: values, id: props.id })
  toggleComposer()
}
</script>

<template>
  <Card v-if="!isOpen" class="mt-5 w-full" @click="toggleComposer">
    <CardHeader>
      <div class="flex justify-between">
        <CardTitle>{{ props.title }}</CardTitle>
        <p>{{ props.date }}</p>
      </div>
    </CardHeader>
    <CardContent class="flex justify-between items-center">
      <CardDescription>{{ props.description }}</CardDescription>
      <div>{{ props.status }}</div>
    </CardContent>
    <CardFooter class="flex gap-x-4"> </CardFooter>
  </Card>

  <TodoItemComposerVue
    v-if="isOpen"
    :isOpen="isOpen"
    :toggleComposer="toggleComposer"
    :onSubmitForm="onEditTodo"
    :buttonText="'수정'"
    :data="props"
  />
</template>
