import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import {
    listBanners,
    deleteBanner,
    createBanner,
} from '../actions/imageActions'
import { BANNER_CREATE_RESET } from '../constants/imageConstants'

const ImageListScreen = ({ history, match }) => {
    const dispatch = useDispatch()

    const bannerList = useSelector((state) => state.bannerList)
    const { loading, error, banners } = bannerList

    const bannerDelete = useSelector((state) => state.bannerDelete)
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = bannerDelete

    const bannerCreate = useSelector((state) => state.bannerCreate)
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        banner: createdBanner,
    } = bannerCreate

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch({ type: BANNER_CREATE_RESET })

        if (!userInfo.isAdmin) {
            history.push('/login')
        }

        if (successCreate) {
            history.push(`/admin/image/${createdBanner._id}/edit`)
        } else {
            dispatch(listBanners())
        }
    }, [
        dispatch,
        history,
        userInfo,
        successDelete,
        successCreate,
        createdBanner,
    ])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteBanner(id))
        }
    }

    const createBannerHandler = () => {
        dispatch(createBanner())
    }
    return (
        <>
            <Row className='align-items-center'>
                <Col>
                    <h1>Products</h1>
                </Col>
                <Col className='text-right'>
                    <Button className='my-3' onClick={createBannerHandler}>
                        <i className='fas fa-plus'></i> Create Product
                    </Button>
                </Col>
            </Row>
            {loadingDelete && <Loader />}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
            {loadingCreate && <Loader />}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Table
                        striped
                        bordered
                        hover
                        responsive
                        className='table-sm'
                    >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {banners.map((banner, index) => (
                                <tr key={index}>
                                    <td>{banner._id}</td>
                                    <td>{banner.name}</td>
                                    <td>
                                        <LinkContainer
                                            to={`/admin/image/${banner._id}/edit`}
                                        >
                                            <Button
                                                variant='light'
                                                className='btn-sm'
                                            >
                                                <i className='fas fa-edit'></i>
                                            </Button>
                                        </LinkContainer>
                                        <Button
                                            variant='danger'
                                            className='btn-sm'
                                            onClick={() =>
                                                deleteHandler(banner._id)
                                            }
                                        >
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
        </>
    )
}

export default ImageListScreen
