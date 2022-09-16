import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { dishCard } from '../../constants/data';
import { UpdateOpen } from '../../layouts/header/Header'
import { Button, Div, Img, Input } from '../../layouts/layout/style'
import { DivAddToBag, DivDishContent, DivDishOrder, DivOrderContent, DivOrderName, DivQuantity, DivRadio, DivTop, DivUH, Label } from './style'

export default function DishOrder(props: UpdateOpen) {
    const order:dishCard = useSelector((state:any) => state.order.value);
    const [quantity, setQuanntity] = useState(1);
    function  closeOrder(){
        props.CloseMenu(false)
    
    }

    function  increaseQuantity(){
        setQuanntity(quantity+1)
    
    }

    function  decreaseQuantity(){
        if(quantity>1)
            setQuanntity(quantity-1)
    
    }
  return (
    <DivDishOrder>
       <DivTop>
            <Button onClick={closeOrder}>
                <Img  src='/icons/BlackX.png' alt='blackx' style={{marginTop: "16px"}}/>
            </Button>       
        </DivTop>
        <Img src= {order.pathToCover} alt={order.dishName} style={{width: "100%"}}/>
        <DivDishContent>
            <DivOrderName>
                {order.dishName}
            </DivOrderName>
            <DivOrderContent>
                {order.dishContent}
            </DivOrderContent>
            
            <DivUH>Choose a side</DivUH>
            <DivRadio>
                <Input type="radio" value="bread" name="side" /> 
                <Label htmlFor='bread'>White bread</Label>   
            </DivRadio>
            <DivRadio>
                <Input type="radio" value="rice" name="side" /> 
                <Label htmlFor='rice'>Sticky rice</Label>
            </DivRadio>
            <DivUH>Changes</DivUH>
            <DivRadio>
                <Input type="checkbox" value="noPeanuts" name="side" /> 
                <Label htmlFor='bread'>Whithout peanuts</Label>   
            </DivRadio>
            <DivRadio>
                <Input type="checkbox" value="spicyLess" name="side" /> 
                <Label htmlFor='rice'>Sticky Less spicy</Label>
            </DivRadio>
            <DivUH>Quantity</DivUH>
            <DivQuantity>
                <Img  src='/icons/minus.svg' onClick={decreaseQuantity} style={{cursor: "pointer"}} alt='minus'/>
                {quantity}
                <Img  src='/icons/plus.svg' onClick={increaseQuantity} style={{cursor: "pointer"}} alt='plus'/>
            </DivQuantity>
            <DivAddToBag>Add to bag</DivAddToBag>
        </DivDishContent>  
    </DivDishOrder>
  )
}
