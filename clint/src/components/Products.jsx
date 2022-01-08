import { useEffect, useState } from 'react';
import styled from 'styled-components'
import ProductItem from './ProductItem';
import { publicRequest } from '../requestMethods';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: row;
`
const ProductContaner = styled.div`
    flex: 4;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    // background-color: #fff;
`
const FillterContaner = styled.div`
    flex: 1;
    // background-color: #f5fbfd;
    // border-radius: 10px;
    padding: 10px;
`

const Products = ({cat, filters, sort}) => {
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(cat ? `/products?category=${cat}` : "/products")
                setProducts(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        getProducts()
    },[cat])


    useEffect(() => {
        cat && setFilterProducts (
            products.filter(item => Object.entries(filters).every(([key, value]) => 
                item[key].includes(value)
            ))
        )
    },[products ,cat, filters])


    useEffect(() => {
        if(sort === "newest") {
            setFilterProducts((prev) => 
                [...prev].sort((a,b) => a.createdAt - b.createdAt)
            )
        } else if(sort === "asc") {
            setFilterProducts((prev) => 
                [...prev].sort((a,b) => a.price - b.price)
            )
        } else {
            setFilterProducts((prev) => 
                [...prev].sort((a,b) => b.price - a.price)
            )
        }
    },[sort])

    return ( 
        <Container>
            <FillterContaner>
                Fillter
            </FillterContaner>
            <ProductContaner>
                {cat ? filterProducts.map(item => (
                    <ProductItem item={item} key={item._id} />
                )) : products.map(item => (
                    <ProductItem item={item} key={item._id} />
                ))}
            </ProductContaner>
        </Container>
     );
}
 
export default Products;