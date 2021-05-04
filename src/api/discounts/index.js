import { Router } from 'express'

// Methods
import List from './methods/list'

const router = Router()

router.get('/', List)

export default router
