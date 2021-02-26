import express from 'express'
import asyncHandler from 'express-async-handler'
import {
    createBanner,
    deleteBanner,
    getBannerById,
    getBanners,
    updateBanner,
} from '../controllers/imageControllers.js'
import { protect, admin } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').get(getBanners).post(protect, admin, createBanner)
router
    .route('/:id')
    .get(getBannerById)
    .delete(protect, admin, deleteBanner)
    .put(protect, admin, updateBanner)

export default router
