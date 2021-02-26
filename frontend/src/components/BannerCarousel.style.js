import styled from 'styled-components'
import { Carousel, Image } from 'react-bootstrap'

export const BannersCarousel = styled(Carousel)`
    display: flex;
    margin: 0 0 20px;
    .carousel-indicators {
        li {
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 6px !important;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            text-indent: -999px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-radius: 50%;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: 0.5;
            transition: opacity 0.6s ease;
        }
    }
    .carousel-indicators .active {
        opacity: 1;
    }

    .carousel-control-next,
    .carousel-control-prev {
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5%;
        color: #fff;
        text-align: center;
        opacity: 0.5;
        transition: opacity 0.15s ease;
    }
`
