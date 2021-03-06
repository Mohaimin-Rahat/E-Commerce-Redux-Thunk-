import React from 'react'
import Grid from '@material-ui/core/Grid';
import{useState,useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Button  from '@material-ui/core/Button';

const AddProduct=() =>{
    const history= useHistory()
    const [product,setProduct]=useState({
        name:'',
        title:'',
        description:'',
        price:'',
        category:'',
        image:'',
    });

    const addProduct=(e,key)=>{
        setProduct({...product,[key]: e.target.value})
    }
    const productAdded = ()=>{
        axios.post('https://fakestoreapi.com/products',{
            name:product.name,
            title:product.title,
            description:product.description,
            price:product.price,
            category:product.category,
            image:product.image,
              }).then((response)=>{
                history.push("/");
               }).catch(error=>{
                console.log(error);
            })
    };
    

    return(
    <Grid container spacing={3} justifyContent='center'>
        <Grid container item md={7}>
          <Grid item md={12}>
            <p>ProductList</p>
          </Grid>
         <Grid item md={12}>
           <div>
               <p>Product Name</p>
               <input value={product.name} onChange={e=>addProduct(e,'name')}/>
           </div>
           <div>
           <p>Product Title</p>
           <input value={product.title} onChange={e=>addProduct(e,'title')}/>
       </div>
           <div>
               <p>Product Description</p>
               <input value={product.description} onChange={e=>addProduct(e,'description')}/>
           </div>
           <div>
               <p>Product Price</p>
               <input value={product.price} onChange={e=>addProduct(e,'price')}/>
           </div>
           <div>
               <p>Product Category</p>
               <input value={product.category} onChange={e=>addProduct(e,'category')}/>
           </div>
           <div>
               <p>Product Image</p>
               <input value={product.image} onChange={e=>addProduct(e,'image')}/>
           </div>
           <Grid>
           <Button 
                     variant="contained"
                     color="primary"
                     onClick ={ () => productAdded ()} > Add Product
             </Button>
           </Grid>
           
          </Grid>
        </Grid>
    </Grid>
    
    
    );
    

}
export default AddProduct;