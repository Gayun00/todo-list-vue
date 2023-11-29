import { getTodo } from '@/api'
import type { TodoItem } from '@/types'
import { request } from '@/utils/httpRequest'
import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/vue-query'

const todoListKeys = {
  all: ['todoList'] as const
}
export const useTodoListQuery = () => {
  return useInfiniteQuery({
    queryKey: todoListKeys.all,
    queryFn: getTodo,
    getNextPageParam: (lastPage) => {
      return lastPage.cursor
    }
  })
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

export const editTodoMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ params, id }: { params: TodoItem; id: string }) => {
      return request.put<TodoItem, any>({
        path: `/todo/${id}`,
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
