import type { TodoItem } from '@/types'
import { request } from '@/utils/httpRequest'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'

const todoListKeys = {
  all: ['todoList'] as const
}

export const useTodoListQuery = () => {
  return useQuery<TodoItem[]>({
    queryKey: todoListKeys.all,
    queryFn: () => {
      return request.get<null, TodoItem[]>({
        path: '/todo',
        isMock: true
      })
    }
  })
}

export const createTodoMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (params: TodoItem) => {
      return request.post<TodoItem, any>({
        path: '/todo'
      })
    },
    mutationKey: todoListKeys.all,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todoListKeys.all })
    }
  })
}
