import React from 'react'
import { useRouter } from '~/hooks/hooks.ts'

const Book = () => {
  const { params } = useRouter()

  return <h2>Book: {params.id}</h2>
}

export default Book
