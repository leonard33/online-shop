import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartitems:localStorage.getItem("cartitems")? JSON.parse(localStorage.getItem("cartitems")):[],
    carttotalquantity:0,
    carttotalamount:0
}

const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        // Add an item to cart
        addtocart(state,action){
            const itemindex = state.cartitems.findIndex((item)=> item.id === action.payload.id);// find by index to check the item if its already in the cart.
            if(itemindex >= 0 ){
                state.cartitems[itemindex].cartquantity +=1;
                toast.info(`${state.cartitems[itemindex].title} increased to cart`, {
                    position:"top-right"
                })
            } else {
                const itemproduct = { ...action.payload, cartquantity:1 }
                state.cartitems.push(itemproduct)
                toast.success(`${action.payload.title} added to cart`, {
                    position:"top-right"
                });
            }
            localStorage.setItem("cartitems", JSON.stringify(state.cartitems));
        },
        //Remove item from cart
        removefromcart(state, action){
           const deleteditem = state.cartitems.filter(item => item.id !== action.payload.id);
           state.cartitems = deleteditem;
           localStorage.setItem("cartitems", JSON.stringify(state.cartitems));
           toast.error(`${action.payload.title} removed from cart`, {
            position:"top-right"
           } );
        },
        // reduce cart quantity by one or remove
        decreasecartquantity(state, action){
            const decreaseIndex = state.cartitems.findIndex((item) => item.id === action.payload.id);
            if(state.cartitems[decreaseIndex].cartquantity > 1){
                state.cartitems[decreaseIndex].cartquantity -=1;
                toast.info(`${action.payload.title} reduced from cart`, {
                    position:"top-right"
                   } );
            }else if (state.cartitems[decreaseIndex].cartquantity === 1){
                const decreaseitem = state.cartitems.filter((item) => item.id !== action.payload.id);
                state.cartitems = decreaseitem;
                toast.error(`${action.payload.title} removed from cart`, {
                    position:"top-right"
                   } );
            }
            localStorage.setItem("cartitems", JSON.stringify(state.cartitems));
        },
        increasecartquantity(state, action){
            const increaseitemIndex = state.cartitems.findIndex((item) => item.id === action.payload.id );
            state.cartitems[increaseitemIndex].cartquantity +=1;
            toast.success(`${action.payload.title} added to cart`, {
                position:"top-right"
            });
            localStorage.setItem("cartitems", JSON.stringify(state.cartitems));
        }
    }
})

export const { addtocart, removefromcart, decreasecartquantity, increasecartquantity } = cartSlice.actions;
export default cartSlice.reducer;