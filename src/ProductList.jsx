import React from 'react';
import{useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import Button  from '@material-ui/core/Button';
import { useSelector, useDispatch } from "react-redux";
import { requestProducts } from "./Redux/action/productListAction";
import { currentProductLoad } from "./Redux/action/productDetailsAction";


const ProductList =()=> {
        const history= useHistory()
        const dispatch = useDispatch();
        const [load, setLoad] = useState(true);

    const { productList } = useSelector(
        (state) => state.productListReducer);

     useEffect(() => {
        dispatch(requestProducts());
        setLoad(false);
      }, []);
    
        const seeDetails = (id) => {
            dispatch(currentProductLoad(null));
            history.push(`/ProductDetails/${id}`);
        };
        
        return <>
        {load ? (
           <Grid/>
        ) : (
        <Grid container spacing={3} justifyContent='center'>
             <Grid container item md={7}>
             <Grid item md={12}>
            <p>ProductList</p>
            </Grid>
            {
                productList.map((product,index) => (
                    <Grid key={index} md={4}>
                        <img src={product.image} style={{width:'75%'}} alt={'kjfks'}/>
                        <p> {product.title}</p>
                    <Grid>
                        <Button 
                        variant="contained"
                        color="primary"
                        onClick={()=> seeDetails(product.id)}>See Details </Button>
                    </Grid>
                        </Grid>
                ))
        
            }
            </Grid>
        </Grid>
        )}
        </>
        
}

export default ProductList;