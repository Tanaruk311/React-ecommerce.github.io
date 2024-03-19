import React from 'react'
import { Button } from "@mui/material"
import './Imagecard.css'
import { blue } from '@mui/material/colors'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    <div>
        <div className="box-con">
        <h1 className='title'>Ablum example</h1>
        <p className='detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis veritatis sunt magnam nostrum assumenda culpa modi tempore doloribus, suscipit et, id minus totam animi voluptatum fugit aut, accusamus deserunt autem. Molestias sint error totam fugit, sunt exercitationem velit eaque!</p> 
        </div> 
        <div className='btn-groups'>
        <Button  className='Btn'> <Link to='Products' style={{textDecoration:'none',color:"white"}}>Enter</Link></Button>
        <Button >Secondary</Button>
        </div>
        </div>
  )
}

export default Content