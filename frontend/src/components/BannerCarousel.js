import React, { useEffect } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listBanners } from '../actions/imageActions'
import { BannersCarousel } from './BannerCarousel.style'
const BannerCarousel = () => {
    const dispatch = useDispatch()

    const bannerList = useSelector((state) => state.bannerList)
    const { loading, error, banners } = bannerList

    useEffect(() => {
        dispatch(listBanners())
    }, [dispatch])

    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant='danßger'>{error}</Message>
    ) : (
        <BannersCarousel controls={false} pause='hover' className='bg-dark'>
            {banners &&
                banners.map((banner, index) => (
                    <Carousel.Item key={index}>
                        <Image src={banner.image} alt={banner.name} fluid />
                    </Carousel.Item>
                ))}
        </BannersCarousel>
    )
}

export default BannerCarousel
