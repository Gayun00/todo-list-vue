import { STORAGE_KEY } from '@/constants'

export const getTodo = async ({ pageParam = 1 }) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY.TODO_LIST) || '[]')
  return {
    pageData: data || [],
    cursor: pageParam === 3 ? undefined : pageParam + 1
  }
}
