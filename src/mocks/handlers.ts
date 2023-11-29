import { STORAGE_KEY } from '@/constants'
import type { TodoItem } from '@/types'
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/todo', () => {
    const todoList = JSON.parse(localStorage.getItem(STORAGE_KEY.TODO_LIST) || '[]')
    return HttpResponse.json({ data: todoList })
  }),

  http.put('/todo/:id', async ({ request, params }) => {
    const data = (await request.json()) as TodoItem
    const { id } = params
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
    return HttpResponse.json({ message: 'succeed' })
  }),

  http.post('/todo', async ({ request }) => {
    const data = (await request.json()) as TodoItem
    const todoList = JSON.parse(localStorage.getItem(STORAGE_KEY.TODO_LIST) || '[]')
    localStorage.setItem(
      STORAGE_KEY.TODO_LIST,
      JSON.stringify([...todoList, { ...data, id: Date.now().toString() }])
    )
    return HttpResponse.json({ message: 'succeed' })
  })
]
