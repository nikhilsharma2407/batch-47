import React from 'react'
import "./styles.scss"
import { Spinner } from 'react-bootstrap'

function Loader({ isLoading }) {
    return isLoading ? <Spinner className='loader' animation="border" role="status" size='xxl' /> : null
}

export default Loader