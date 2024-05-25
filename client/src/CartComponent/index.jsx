import React from 'react'
import { Button } from 'react-bootstrap'
import useApi from '../useApi'
import { ENDPOINTS, REQUEST_TYPES } from '../apiUtil'

function CartComponent() {

    const { makeRequest } = useApi(ENDPOINTS.CART.CLEAR, REQUEST_TYPES.PUT);

    return (
        <Button variant='outline-primary' onClick={ ()=>makeRequest() }>Clear Cart</Button>
    )
}

export default CartComponent