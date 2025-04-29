import { id } from '@instantdb/admin'
import { v4 } from 'uuid'

export default defineEventHandler(async () => {
  try {
    console.log('server-side uuid v4:', v4)
    console.log('server-side instantdb id:', id)
  
    const uuidId = v4()
    console.log('server-side uuid v4():', uuidId)
  
    const instantdbId = id()
    console.log('server-side instantdb id():', instantdbId)

    return { uuidId, instantdbId }
  } catch (error) {
    console.error('error:', error)
    return { error: error instanceof Error ? error.message : 'Unknown error' }
  }
})