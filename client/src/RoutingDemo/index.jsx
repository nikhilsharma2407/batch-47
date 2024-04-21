import React from 'react'
import { useLocation, useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom';

function RoutingDemo() {
    const { pathname, search, state } = useLocation();

    // http://localhost:3000/routing/iphone-256?searchTerm=android&location=INDIA&language=en
    const params = useParams()
    // const [state, setstate] = useState(second)
    const [searchParams, setSearchParams] = useSearchParams();
    console.log("🚀 ~ RoutingDemo ~ searchParams:")
    console.log("🚀 ~ RoutingDemo ~ params:", params)  // {productId:1234}


    return (
        <>
            <div>
                path - {pathname}
            </div>
            <div>route param - {params.productId}</div>
            <div>searchQuery - {search}</div>
            <div>search - {searchParams.get('searchTerm')}</div>
            <div>search-location - {searchParams.get('location')}</div>

            <input type="text" onChange={e => setSearchParams({ searchTerm: e.target.value })} 
            placeholder='Enter search term' />
        </>
    )
}

export default RoutingDemo