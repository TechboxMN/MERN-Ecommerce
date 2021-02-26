import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listBannersDetails, updateBanner } from '../actions/imageActions'
import { BANNER_UPDATE_RESET } from '../constants/imageConstants'

const ImageEditScreen = ({ match, history }) => {
    const bannerId = match.params.id

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const bannerDetails = useSelector((state) => state.bannerDetails)
    const { loading, error, banner } = bannerDetails

    const bannerUpdate = useSelector((state) => state.bannerUpdate)
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = bannerUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: BANNER_UPDATE_RESET })
            history.push('/admin/imagelist')
        } else {
            if (!banner.name || banner._id !== bannerId) {
                dispatch(listBannersDetails(bannerId))
            } else {
                setName(banner.name)
                setImage(banner.image)
            }
        }
    }, [dispatch, history, bannerId, banner, successUpdate])

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }

            const { data } = await axios.post('/api/upload', formData, config)

            setImage(data)
            setUploading(false)
        } catch (error) {
            setUploading(false)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            updateBanner({
                _id: bannerId,
                name,
                image,
            }),
        )
    }

    return (
        <>
            <Link to='/admin/imagelist' className='btn btn-light my-3'>
                Go Back
            </Link>
            <FormContainer>
                <h1>Edit Banner</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && (
                    <Message variant='danger'>{errorUpdate}</Message>
                )}
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId='image'>
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter image url'
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            ></Form.Control>
                            <Form.File
                                id='image-file'
                                label='Choose File'
                                custom
                                onChange={uploadFileHandler}
                            ></Form.File>
                            {uploading && <Loader />}
                        </Form.Group>
                        <Button type='submit' variant='primary'>
                            Update
                        </Button>
                    </Form>
                )}
            </FormContainer>
        </>
    )
}

export default ImageEditScreen
