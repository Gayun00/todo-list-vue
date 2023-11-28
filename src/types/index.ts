export type FilterCategory = 'title' | 'description' | 'status' | 'date'
export interface TodoItem {
  title: string
  description: string
  date: string
  status: 'todo' | 'inprogress' | 'done'
}
