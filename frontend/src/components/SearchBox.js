import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { FormContainer, FormControl } from './SearchBox.style'

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    return (
        <FormContainer onSubmit={submitHandler} inline>
            <FormControl
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='Та юу хайж байна?'
                className='mr-sm-2 ml-sm-5'
            ></FormControl>
            <Button type='submit' variant='outline-success' className='p-2'>
                <i class='ri-search-line'></i>
            </Button>
        </FormContainer>
    )
}

export default SearchBox
