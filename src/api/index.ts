import { STORAGE_KEY } from '@/constants'
import type { TodoItem } from '@/types'

export const getTodo = async ({ pageParam = 1 }) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY.TODO_LIST) || '[]')
  const sorted = data.reverse()
  return {
    pageData: sorted || [],
    cursor: pageParam === 3 ? undefined : pageParam + 1
  }
}

export const editTodo = async (data: TodoItem, id: string) => {
  const todoList = JSON.parse(localStorage.getItem(STORAGE_KEY.TODO_LIST) || '[]')
  const updatedTodoList = todoList.map((todo: TodoItem) => {
    if (todo.id === id) {
      return {
        id: todo.id,
        title: data.title,
        description: data.description,
        date: data.date,
        status: data.status
      }
    }
    return todo
  })

  localStorage.setItem(STORAGE_KEY.TODO_LIST, JSON.stringify(updatedTodoList))
  return JSON.stringify({ message: 'succeed' })
}

export const createTodo = async (data: TodoItem) => {
  const todoList = JSON.parse(localStorage.getItem(STORAGE_KEY.TODO_LIST) || '[]')
  localStorage.setItem(
    STORAGE_KEY.TODO_LIST,
    JSON.stringify([...todoList, { ...data, id: Date.now().toString() }])
  )
  return JSON.stringify({ message: 'succeed' })
}
