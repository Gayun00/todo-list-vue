import type { FilterCategory } from '@/types'

export const CATEGORY_DISPLAY_NAME: Record<FilterCategory, string> = {
  title: '제목',
  description: '설명',
  date: '날짜',
  status: '상태'
}

export const STORAGE_KEY = {
  TOKEN: 'token'
}

export const URL = {
  API_SERVER: 'http://localhost:5173'
}
