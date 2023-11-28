import type { TodoItem } from '@/types'
import { request } from '@/utils/httpRequest'
import { useMutation, useQueryClient } from '@tanstack/vue-query'

const todoListKeys = {
  all: ['todoList'] as const
}

export const createTodoMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (params: TodoItem) => {
      return request.post<TodoItem, any>({
        path: '/todo',
        params,
        isMock: true,
        shouldAuthorize: true
      })
    },
    mutationKey: todoListKeys.all,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todoListKeys.all })
    }
  })
}
