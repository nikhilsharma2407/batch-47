import React from 'react'
import { Badge, Button, Card, Col, Image } from 'react-bootstrap'
import "./styles.scss"
import { CartPlus, TrashFill } from 'react-bootstrap-icons'
import CartCounter from '../CartCounter'
import StarRatings from 'react-star-ratings'
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
            lg={{ span: 4, offset: 0 }}
            xl={{ span: 3 }}
        >
            <Card className='product'>
                <Card.Img src={image} variant='top' fluid className='image p-3' />
                <Card.Body className='content'>
                    <div className="text">{title}</div>
                    <div>{price}</div>
                    <div className='text desc'>{description}</div>
                    {/* <img src={image} /> */}
                    <div className='mt-2 d-flex align-items-center'>
                        <StarRatings
                            rating={rating.rate}
                            starRatedColor="yellow"
                            numberOfStars={5}
                            name='rating'
                            starDimension='30px'
                        />
                        <Badge pill bg="info mx-1">{rating.count}</Badge>
                    </div>
                </Card.Body>
                <Card.Footer>
                    {/* <Button variant='outline-primary'><CartPlus /> Add to Cart</Button> */}
                    <div className='d-flex align-items-center'>
                        <CartCounter quantity={10} />
                        <TrashFill className='text-danger ms-auto' height="20px" width="20px" />
                    </div>
                </Card.Footer>
            </Card >
        </Col>
    )
}

export default ProductCard