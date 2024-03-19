import * as React from 'react';
import { Button,IconButton } from '@mui/material';
import './Products.css'
import { ShoppingCartRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function ProductContent() {
  return (
    <div className='container'>
        <div className='product-box'>
        <img src="https://media.istockphoto.com/id/1296478484/photo/antique-film-camera.webp?s=170667a&w=0&k=20&c=bO_YifsyboB61RJj1453Q3XpCYMTL5rIcS0PECaV3-I=" alt="Cameara"
        style={{width:500, height:300, marginLeft:50,marginTop:50}} />
        <div className="product-detail" style={{marginTop:50,marginLeft:20}}>
            <table className='customers'>
            <tr>
            <th>Productname
            </th>
            </tr>
            <td> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, a! Tempora!</p>
            <span style={{marginTop:10}}>Price:$99</span>
            <br />
            <span style={{marginTop:10}}>Quality</span>
            <br />
            <input style={{marginTop:10}} type="text" value="1" />
            <br />
            <Button  className="MyButton"sx={{margin:1}} startIcon={<ShoppingCartRounded />}>
              <Link to='Payment' style={{textDecoration:"none",color:"white"}}> Add item</Link>
          
            </Button>
            </td>
            </table>
                <table  className='customers-bot' style={{marginTop:20}}>
                    <tr>
                        <th>Specfication</th>
                        </tr>
                        <td>Display:6.1 inches.</td>
                        <tr>
                        <td>Resolution:1080 x 2400 pixels</td>   
                        </tr>
                        <tr>
                        <td>Processor:Snapdragon 888.</td>   
                        </tr>
                        <tr>
                        <td>Ram:8GB.</td>   
                        </tr>
                        <tr>
                        <td>Stage:128GB.</td>   
                        </tr>
                        <tr>
                        <td>Battery:4500mAh.</td>   
                        </tr>
                </table>

        </div>
       </div>
    </div>
  );
}