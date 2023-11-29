export type FilterCategory = 'title' | 'description' | 'status' | 'date'
export interface TodoItem {
  id: string
  title: string
  description: string
  date: string
  status: 'todo' | 'inprogress' | 'done'
}
