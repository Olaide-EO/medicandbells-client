import { SET_PRODUCTS, LIKE_PRODUCT, UNLIKE_PRODUCT, LOADING_DATA, DELETE_PRODUCT, ADD_PRODUCT, SET_PRODUCT,
ADD_TO_CART, REMOVE_FROM_CART, DELETE_FROM_CART,SET_ORDERS, SET_SPECIAL_OFFERS, CLEAR_CART } from '../types';

const initialState = {
    products: [],
    product: {},
    specialoffers: [],
    loading: false,
    cart: [],
    totalPrice: 0,
    totalQuantity: 0
}

export default function(state = initialState, action){
    switch(action.type){
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            };
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
            case SET_SPECIAL_OFFERS:
                return {
                    ...state,
                    specialoffers: action.payload,
                    loading: false
                }
        case SET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case LIKE_PRODUCT:
        case UNLIKE_PRODUCT:
            let index = state.products.findIndex(
                (product) => product.productId === action.payload.productId
                );
            state.products[index] = action.payload;
            if (state.product.productId === action.payload.productId){
                state.product = action.payload;
            }
            return {
                ...state
            };
        case DELETE_PRODUCT:
            index = state.products.findIndex(
                (product) => product.screamId === action.payload
                );
            state.products.splice(index, 1);
            return {
                ...state
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [
                    action.payload,
                    ...state.products
                ]
            }

        case ADD_TO_CART:
            console.log("love");
         let cartIndex = state.cart.findIndex(
               (cartItem) => cartItem.productId === action.payload.productId && cartItem.volume ===action.payload.volume
           )

            if( cartIndex < 0){
                return {
                    ...state,
                    cart: [
                      ...state.cart,
                       action.payload
                    ],
                    totalPrice: state.totalPrice + action.payload.price,
                    totalQuantity: state.totalQuantity + action.payload.totalQuantity
                }
            }
            
            else{
                state.cart[cartIndex].count++
                return {
                    ...state,
                    totalPrice: state.totalPrice + action.payload.price,
                    totalQuantity: state.totalQuantity + action.payload.totalQuantity
                }
            }
        
        case REMOVE_FROM_CART: 

       let cartIndexToRemove = state.cart.findIndex(
            (cartItem) => cartItem.productId === action.payload.productId && cartItem.volume ===action.payload.volume
        )

         if(cartIndexToRemove < 0){
             return {
                 ...state
             }
         }
         
         else{
             if(state.cart[cartIndexToRemove].count === 1){
              state.cart.splice(cartIndexToRemove, 1);
             }
             else{
                 state.cart[cartIndexToRemove].count--
                }
             return {
                 ...state,
                 totalPrice: state.totalPrice - action.payload.price,
                 totalQuantity: state.totalQuantity - action.payload.totalQuantity
             }
         }
     
         case DELETE_FROM_CART:

                let cartIndexToDelete = state.cart.findIndex(
                    (cartItem) => cartItem.productId === action.payload.productId && cartItem.volume ===action.payload.volume
                )
        
                 if(cartIndexToDelete < 0){
                     return {
                         ...state
                     }
                 }
                 
                 else{
                     let itemPrice = state.cart[cartIndexToDelete].price*state.cart[cartIndexToDelete].count;
                     let itemCount = state.cart[cartIndexToDelete].count

                      state.cart.splice(cartIndexToDelete, 1);
                     return {
                         ...state,
                         totalPrice: state.totalPrice - itemPrice,
                         totalQuantity: state.totalQuantity - itemCount
                     }
                 }
             
        case CLEAR_CART:
             return {
                ...state,
                cart: [],
                totalPrice: 0,
                totalQuantity: 0
             }
         default: 
           return state;   
        }
         
}