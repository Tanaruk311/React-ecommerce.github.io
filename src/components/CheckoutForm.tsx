import React from 'react'
import { Grid, Typography,Button,Box, TextField, FormControl } from '@mui/material'
import { Style } from '@mui/icons-material'
import './CheckoutForm.css'

const CheckoutForm = () => {
  return (
    <>
      <div className='con-form' style={{marginBottom:20}}>
        <h1 style={{display:'flex',justifyContent:'center',marginTop:50}}>CheckOut Form</h1>
     <p style={{marginLeft:10,marginTop:10}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptate quae vero at ipsum velit voluptatum placeat sed sunt rem. 
      Atque quas suscipit sed illo odit veniam, debitis vitae eaque. Veniam, obcaecati fugiat aliquid possimus, 
      tempore!</p>
      <h2 style={{marginTop:50,marginLeft:10}}>Biliing address</h2>
        <form action="" style={{display:"flex",marginTop:10}}>
     
            <label style={{margin:10}}>Name</label>
            <input type="text" style={{width:300}} />
            <label style={{marginTop:12,marginLeft:5}}>LastName</label>
            <input type="text" style={{width:300}} />
        </form>
        <label style={{marginLeft:18}}>Email</label>
            <input type="text" style={{width:675}} />
            <br />
            <label style={{marginLeft:5}}>address1</label>
            <input type="text" style={{width:675}} />
            <br />
            <label style={{marginLeft:5}}>address2</label>
            <input type="text" style={{width:675}} />
            <form action="" style={{display:"flex",marginTop:10}}>
     
            <label style={{margin:10}}>County</label>
            <input type="text" style={{width:200}} />
            <label style={{marginTop:12,marginLeft:5}}>city</label>
            <input type="text" style={{width:200}} />
            <label style={{marginTop:12,marginLeft:5}}>Zip</label>
            <input type="text" style={{width:200}} />
        </form>
        <h4 style={{margin:10}}>Method Payment</h4>
        <form className='form-radio' style={{display:'flex'}}>
         
          <input type="radio" name='Examtest' style={{width:50}}/>
          <label style={{marginTop:5}}>paypal</label>

          <input type="radio" name='Examtest' style={{width:50}}/>
          <label  style={{marginTop:5}}>Creditcard</label>
        </form>

        <form action="" style={{display:"flex",marginTop:10}}>
     
            <label style={{margin:10}}>Name on card</label>
            <input type="text" style={{width:300}} />
            <label style={{marginTop:12,marginLeft:5}}>Credit card number</label>
            <input type="text" style={{width:300}} />
            </form>
            <label style={{marginLeft:75,marginRight:5}}>CVV</label>
            <input type="text" style={{width:300}} />
            <br />
            <Button sx={{width:900,marginTop:1,marginLeft:2}} variant='contained'>Order now</Button>
            </div>
    </>
  )
}

export default CheckoutForm