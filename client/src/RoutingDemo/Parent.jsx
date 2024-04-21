import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

function Parent() {
    return (
        <>
            <div>Parent</div>

            {/* correct path - http://localhost:3000/parent/child1 */}
            <Link to="child1">Child1</Link>
            {/* correct path - http://localhost:3000/parent/child2 */}
            <Link to="child2">Child2</Link>

            {/* wrong path - http://localhost:3000/child3 */}
            <Link to="/child3">Child3</Link> 
            
            {/* outlet is out placeholder   */}
            <Outlet />  
        </>
    )
}

export default Parent