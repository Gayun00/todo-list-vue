import { createTodo, editTodo, getTodo } from '@/api'
import type { TodoItem } from '@/types'
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
    },
    initialPageParam: 1
  })
}

export const createTodoMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (params: TodoItem) => createTodo(params),
    mutationKey: todoListKeys.all,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todoListKeys.all })
    }
  })
}

export const editTodoMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ params, id }: { params: TodoItem; id: string }) => editTodo(params, id),
    mutationKey: todoListKeys.all,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todoListKeys.all })
    }
  })
}
