import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

function Products() {

    const [products, setProducts] = useState([]);
    const [searchParam] = useSearchParams();


    const URL = 'https://fakestoreapi.com/products';

    // react reconciliation algorithm'

    const search = ({
        title,
        category,
        description,
    }) => {
        const searchTerm = searchParam.get('search');
        console.log("🚀 ~ Products ~ searchParam:", searchTerm);
        if (searchTerm){
            let isPresent =  title.toLowerCase().includes(searchTerm); 
            isPresent = isPresent ||  category.toLowerCase().includes(searchTerm);
            isPresent = isPresent ||  description.toLowerCase().includes(searchTerm);
            return isPresent;
        } 
        return true;
    
    }


    useEffect(() => {
        // IIFE
        (async () => {
            const { data } = await axios.get(URL);
            console.log("🚀 ~ data:", data);
            setProducts(data);
        })();

    }, [])


    return (
        <Container fluid>
            <Row>
                {products.filter(search).map(product => <ProductCard key={product.id} {...product} />)}
            </Row>
        </Container>
    )
}

export default Products