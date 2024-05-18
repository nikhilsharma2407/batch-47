import React from 'react'
import "./styles.scss"
import { Badge, Button } from 'react-bootstrap'

function CartCounter({quantity = 0, product}) {
    return (
        <>
            <Button variant='outline-danger' className='round-btn' >-</Button>
            <Badge pill bg="info mx-1">{quantity}</Badge>
            <Button variant='outline-success' className='round-btn' >+</Button>
        </>
    )
}

export default CartCounter