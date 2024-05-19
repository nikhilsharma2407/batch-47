import React from 'react'
import "./styles.scss"
import { Badge, Button } from 'react-bootstrap'
import useApi from '../useApi'
import { ENDPOINTS, REQUEST_TYPES } from '../apiUtil'

function CartCounter({ product, disabled }) {
    const {quantity} = product;
    const { makeRequest: increment } = useApi(ENDPOINTS.CART.INCREMENT, REQUEST_TYPES.PATCH)
    const { makeRequest: decrement } = useApi(ENDPOINTS.CART.DECREMENT, REQUEST_TYPES.PATCH)
    return (
        <>
            <Button disabled={disabled} variant='outline-danger' className='round-btn' onClick={()=>decrement(product)}>-</Button>
            <Badge pill bg="info mx-1">{quantity}</Badge>
            <Button disabled={disabled} variant='outline-success' className='round-btn' onClick={()=>increment(product)} >+</Button>
        </>
    )
}

export default CartCounter