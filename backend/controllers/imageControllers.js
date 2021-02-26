import asyncHandler from 'express-async-handler'
import Image from '../models/imageModel.js'

// @desc   Fetch all banners
// @route  GET /api/images
// @access Public

const getBanners = asyncHandler(async (req, res) => {
    const banners = await Image.find()

    res.json(banners)
})

// @desc   Fetch single banner
// @route  GET /api/images/:id
// @access Public

const getBannerById = asyncHandler(async (req, res) => {
    const banner = await Image.findById(req.params.id)

    if (banner) {
        res.json(banner)
    } else {
        res.status(404)
        throw new Error('Banner not found')
    }
})

// @desc   Delete a banner
// @route  DELETE /api/images/:id
// @access Private/Admin

const deleteBanner = asyncHandler(async (req, res) => {
    const banner = await Image.findById(req.params.id)

    if (banner) {
        await banner.remove()
        res.json({ message: 'Banner removed' })
    } else {
        res.status(404)
        throw new Error('Banner not found')
    }
})

// @desc   Create a banner
// @route  POST /api/images
// @access Private/Admin

const createBanner = asyncHandler(async (req, res) => {
    const banner = new Image({
        name: 'Sample name',
        user: req.user._id,
        image: '/images/sample.jpg',
    })

    const createdBanner = await banner.save()
    res.status(201).json(createdBanner)
})

// @desc   Update a banner
// @route  PUT /api/images/:id
// @access Private/Admin

const updateBanner = asyncHandler(async (req, res) => {
    const { name, image } = req.body

    const banner = await Image.findById(req.params.id)

    if (banner) {
        banner.name = name
        banner.image = image

        const updatedBanner = await banner.save()
        res.json(updatedBanner)
    } else {
        res.status(404)
        throw new Error('Banner not found')
    }
})

export { getBanners, getBannerById, deleteBanner, createBanner, updateBanner }
