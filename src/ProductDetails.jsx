import React from 'react';
import{useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button  from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import { requestProductDetails } from "./Redux/action/productDetailsAction";
import { deleteRequest } from "./Redux/action/productDetailsAction";
import { updateRequest } from "./Redux/action/productDetailsAction";

const ProductDetails =()=> {
    const dispatch = useDispatch();
    const {id}= useParams()
    const history= useHistory()
    const [load,setLoad] = useState(true);

    const { currentProduct } = useSelector(
        (state) => state.productDetailsReducer
    );

    useEffect(() => {
        dispatch(requestProductDetails(id));
        setLoad(false);
    }, []);

    const deleteProduct = (id) => {
        dispatch(deleteRequest(id));
        history.push("/");
    };

    const editProduct = (id)=>{
        dispatch(updateRequest(id));
        history.push(`/EditProduct/${id}`);
    };
   return (<>
            {load ? (
                    <Grid/>
                ) : (
                <Grid container spacing={3} justifyContent='center'>
    <Grid container item md={7}>
    <Grid item md={12}>
        {
            currentProduct &&<>
             
              <img src={currentProduct.image} style={{width:'50%'}} alt={'kjfks'}/>   
              <p>Title:{currentProduct.title}</p>
              <p>Description:{currentProduct.description}</p>
              <p>Category:{currentProduct.category}</p>
              <p>Price:{currentProduct.price}</p>
            <ButtonGroup>
              <Button
                 startIcon={<EditIcon />}
                 variant="contained"
                 color="primary"
                 onClick={() => editProduct(id)}> Edit
              </Button>
              <Button
                 startIcon={<DeleteIcon />}
                 variant="contained"
                 color="secondary"
                 onClick={() => deleteProduct()} > Delete
              </Button>
            </ButtonGroup>
                
        </>
        }
     </Grid>
     
    </Grid>
  </Grid>
   )}
  </>
 );
}

export default ProductDetails;