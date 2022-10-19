import { combineReducers } from '@reduxjs/toolkit';
import { GET_NUMBER_CART,ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART } from  '../actions/action';


const initProduct = {
    numberCart:0,
    Carts:[],
    _products:[]
}

function todoProduct(state = initProduct,action){    
    switch(action.type){
        case GET_NUMBER_CART:
                return{
                    ...state
                }
        case ADD_CART:
            if(state.numberCart === 0){
                let cart = {
                    id:action.payload.id_product,
                    quantity:1,
                    name:action.payload.product_name,
                    image:action.payload.product_image,
                    price:action.payload.product_price
                } 
                state.Carts.push(cart); 
            }
            else{
                let check = false;
                state.Carts.map((item,key) => {
                    if(item.id === action.payload.id_product){
                        state.Carts[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.id_product,
                        quantity:1,
                        name:action.payload.product_name,
                        image:action.payload.product_image,
                        price:action.payload.product_price
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberCart+1
            }
            case INCREASE_QUANTITY:
                state.numberCart++
                state.Carts[action.payload].quantity++;
              
               return{
                   ...state
               }
            case DECREASE_QUANTITY:
                console.log(state.id.quantity);
                let quantity = state.Carts[action.payload].quantity;
                
                if(quantity>1){
                    state.numberCart--;
                    state.Carts[action.payload].quantity--;
                }
              
                return{
                    ...state
                }
            case DELETE_CART:
                let quantity_ = state.Carts[action.payload].quantity;
                return{
                    ...state,
                    numberCart:state.numberCart - quantity_,
                    Carts:state.Carts.filter(item=>{
                        return item.id!==state.Carts[action.payload].id
                    })
                   
                }
        default:
            return state;
    }
}

const ShopApp = combineReducers({
    _todoProduct:todoProduct
});
export default ShopApp;