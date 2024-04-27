import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import "./styles.scss"
function ProductCard({ 
    id,
    title,
    price,
    description,
    category,
    image,
    rating, 
}) {
    return (
        <Col className='mt-3' span={10} offset={1} sm={{ span: 10, offset: 1 }} md={{ span: 5, offset: 0 }}
            lg={{ span: 4, offset:0 }}
            xl={{ span: 3 }}
        >
            <Card className='product'>
                <Card.Img src={image} variant='top' fluid className='image p-3'/>
                <Card.Body className='content'>
                    <div className="text">{title}</div>
                    <div>{price}</div>
                    <div  className='text desc'>{description}</div>
                    {/* <img src={image} /> */}
                </Card.Body>
            </Card >
        </Col>
    )
}

export default ProductCard