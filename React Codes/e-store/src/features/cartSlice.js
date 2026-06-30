import {createSlice} from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: [],
    },
    reducers:{
        addToCart: (state, action)=>{
            const product = action.payload;
            const existingItem = state.items.find((item)=> item.id == product.id);

            if(existingItem){
                existingItem.quantity += 1  
            }
            else{
                state.items.push({...product, quantity: 1});
            }
        },

        clearCart: (state)=>{
            state.items = [];
        }
    }
})

export const {addToCart, clearCart} = cartSlice.actions;


export default cartSlice.reducer;