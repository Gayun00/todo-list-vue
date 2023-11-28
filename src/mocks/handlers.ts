import { http, HttpResponse } from 'msw'

export const handlers = [
  http.post('/todo', () => {
    return HttpResponse.json({ message: 'succeed' })
  })
]
