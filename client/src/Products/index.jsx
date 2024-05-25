import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import ProductCard from '../ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductFilter from '../ProductFilter';
import Sort from '../Sort';
import { UserContext } from '../UserContextProvider';

function Products() {
    const url = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState([]);
    const [searchParams] = useSearchParams();
    const [activeFilters, setActiveFilters] = useState([]);

    const { userData, isLoading, setIsLoading } = useContext(UserContext);

    const cart = userData?.cart;

    console.log([...searchParams.entries()]);

    const searchQuery = searchParams.get('search') || '';
    useEffect(() => {
        // IIFE
        (async () => {
            setIsLoading(true);
            const data = (await axios.get(url)).data;
            setIsLoading(false);
            console.log(data);
            console.log("🚀 ~ products:", products)
            setProducts(data);
            setFilters([...new Set(data.map(({ category }) => category))])
        })()
    }, [])

    const search = ({
        title,
        category,
        description,
    }) => {
        const searchTerm = searchParams.get('search');
        console.log("🚀 ~ Products ~ searchParam:", searchTerm);
        if (searchTerm) {
            let isPresent = title.toLowerCase().includes(searchTerm);
            isPresent = isPresent || category.toLowerCase().includes(searchTerm);
            isPresent = isPresent || description.toLowerCase().includes(searchTerm);
            return isPresent;
        }
        return true;

    }


    const filterProducts = ({ category }) => {
        if (activeFilters.length === 0) {
            return true;
        }
        return activeFilters.includes(category);
    }

    return (
        <Container fluid>
            <ProductFilter filterList={filters}
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
            />

            <Sort sortedList={products} setSortedList={setProducts} />

            <Row>
                {products.filter(filterProducts).filter(search).map(product => <ProductCard
                    isLoading={isLoading}
                    cart={cart} key={product.id}
                    product={product}
                    isLoggedIn={!!userData}
                />)}
            </Row>
        </Container>
    )
}

export default Products