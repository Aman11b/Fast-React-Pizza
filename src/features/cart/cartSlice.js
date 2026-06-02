import { createSlice } from "@reduxjs/toolkit";

const initialState={
    // cart:[],
    cart:[
        {
            pizzaId:12,
            name:"mediterran",
            quantity:2,
            unitPrice:16,
            totalPrice:32
        }
    ]
};

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducer:{
        addItem(state,action){
            // payload =newItem
            state.cart.push(action.payload);
        },
        deleteItem(state,action){
            //payload=id
            state.cart=state.cart.filter((item)=>item.pizzaId!==action.payload)
        },
        increaseItemQuantity(state,action){
             //payload=id
            const item=state.cart.find((item)=>item.pizzaId===action.payload);
            item.quantity++;
            item.totalPrice=item.quantity*item.unitPrice

        },
        decreaseItemQuantity(state,action){
             //payload=id
             const item=state.cart.find((item)=>item.pizzaId===action.payload);
             item.quantity--;
             item.totalPrice=item.quantity*item.unitPrice
        },
        clearCart(state){
            state.cart=[]
        }
    }
});

export const {addItem,deleteItem,increaseItemQuantity,decreaseItemQuantity,clearCart}=cartSlice.actions;

export default cartSlice.reducer;
