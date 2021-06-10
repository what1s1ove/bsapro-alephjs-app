import React from 'react'
import { useDeno } from '~/hooks/hooks.ts'
import { AppRoute } from '~/common/enums/enums.ts'
import { books as booksService } from '~/services/services.ts'

const Books = () => {
  const { books } = useDeno(async () => ({
    books: await booksService.findAll(),
  }))

  return (
    <>
      <h2>Books 🎨</h2>
      <ul>
        {books.map((it) => (
          <li key={it.id}>
            <a href={`${AppRoute.BOOKS}/${it.id}`}>{it.name}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Books
