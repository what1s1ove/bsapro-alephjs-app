import { ENV } from '~/common/enums/enums.ts'
import { Books } from './books/books.service.ts'
import { Http } from './http/http.service.ts'

const http = new Http()

const books = new Books({
  http,
  baseUrl: ENV.APP.SERVER_URL,
})

export { http, books }
