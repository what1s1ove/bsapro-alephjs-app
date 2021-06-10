import type { APIRequest } from 'aleph/types.ts'

const handler = async (req: APIRequest) => {
  const count = parseInt(localStorage.getItem('count') || '0')

  req.json({ count })
}

export default handler
