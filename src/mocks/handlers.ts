import { STORAGE_KEY } from '@/constants'
import type { TodoItem } from '@/types'
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/todo', () => {
    const todoList = JSON.parse(localStorage.getItem(STORAGE_KEY.TODO_LIST) || '[]')
    return HttpResponse.json({ data: todoList })
  }),
  http.post('/todo', async ({ request }) => {
    const data = (await request.json()) as TodoItem
    const todoList = JSON.parse(localStorage.getItem(STORAGE_KEY.TODO_LIST) || '[]')
    localStorage.setItem(STORAGE_KEY.TODO_LIST, JSON.stringify([...todoList, data]))
    return HttpResponse.json({ message: 'succeed' })
  })
]
