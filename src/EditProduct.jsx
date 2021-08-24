import React from 'react'
import Grid from '@material-ui/core/Grid';
import{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Button  from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';
import { requestProductDetails } from "./Redux/action/productDetailsAction";
import { updateRequest } from "./Redux/action/productDetailsAction";
import { useDispatch, useSelector } from "react-redux";

const EditProduct=()=>{
    const history= useHistory()
    const dispatch = useDispatch();
    const {id}= useParams()
    const [load,setLoad] = useState(true);
    const [newDetails,setnewDetails]=useState()


    const { currentProduct } = useSelector(
        (state) => state.productDetailsReducer
    );
        
    useEffect(()=>{
        dispatch(requestProductDetails(id));
        setLoad(false);
        setnewDetails(currentProduct);
    }, [dispatch]);
            
         
        const editProduct = (e, key) => {
            setnewDetails({ ...newDetails, [key]: e.target.value });
        };
        
        const updateButton= () => {
            dispatch(updateRequest(newDetails, id));
            history.push(`/ProductDetails/${id}`)   
            };

    return(
    <>
        {load ? (
               <Grid/>
            ) : (
             <Grid container spacing={3} justifyContent='center'>
                <Grid container item md={7}>
                  <Grid item md={12}>
                    
                </Grid>
                <Grid item md={12}>
               
                <div>
                    <p>Product Title</p>
                    <input value={newDetails.title} onChange={e=>editProduct(e,'title')}/>
                </div>
                <div>
                    <p>Product Description</p>
                    <input value={newDetails.description} onChange={e=>editProduct(e,'description')}/>
                </div>
                <div>
                    <p>Product Price</p>
                    <input value={newDetails.price} onChange={e=>editProduct(e,'price')}/>
                </div>
                <div>
                    <p>Product Category</p>
                    <input value={newDetails.category} onChange={e=>editProduct(e,'category')}/>
                </div>
                <div>
                    <p>Product Image</p>
                    <input value={newDetails.image} onChange={e=>editProduct(e,'image')}/>
                </div>
                <Button
                    startIcon={<UpdateIcon />}
                     variant="contained"
                     color="primary"
                     onClick={() => updateButton()}> Update Details
                </Button>
        </Grid>
        </Grid>
    </Grid>
    )}
    </>
    );
            
        
}       
export default EditProduct;