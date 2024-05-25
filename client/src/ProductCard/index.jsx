import React, { useContext } from 'react'
import { Badge, Button, Card, Col, Image } from 'react-bootstrap'
import "./styles.scss"
import { CartPlus, TrashFill } from 'react-bootstrap-icons'
import CartCounter from '../CartCounter'
import StarRatings from 'react-star-ratings'
import useApi from '../useApi'
import { ENDPOINTS, REQUEST_TYPES } from '../apiUtil'
import { UserContext } from '../UserContextProvider'
import { useNavigate } from 'react-router'
function ProductCard({ product, cart = [], isLoading = false, isLoggedIn }) {
    const {
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
    } = product;


    console.log("🚀 ~ ProductCard ~ cart:", cart);
    const cartItem = cart.find(product => product.id === id) || {};
    console.log("🚀 ~ ProductCard ~ cartItem:", cartItem);

    const navigate = useNavigate();


    const { makeRequest: addToCart } = useApi(ENDPOINTS.CART.ADD_TO_CART, REQUEST_TYPES.POST, false);
    const { makeRequest: removeFromCart } = useApi(ENDPOINTS.CART.REMOVE_FROM_CART, REQUEST_TYPES.POST);

    const loginCheck = () => {
        if (!isLoggedIn) {
            navigate('login', { state: { redirectionURL: '/' } });
        }
    };



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
                    {cartItem?.quantity ? <div className='d-flex align-items-center'>
                        <CartCounter disabled={isLoading} product={cartItem} />
                        <TrashFill disabled={isLoading} onClick={() => { loginCheck(); removeFromCart(cartItem) }} className='text-danger ms-auto' height="20px" width="20px" />
                    </div> : <Button disabled={isLoading} onClick={() => { loginCheck(); addToCart(product) }} variant='outline-primary'><CartPlus /> Add to Cart</Button>}
                </Card.Footer>
            </Card >
        </Col>
    )
}

export default ProductCard