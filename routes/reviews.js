import express from 'express'
import { createReview } from '../Controllers/reviewController.js'


const router = express.Router()

router.post('/:tourId',createReview)

export default router