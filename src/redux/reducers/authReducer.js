import {SET_USER, SET_AUTHENTICATED, SET_UNAUTHENTICATED, LOADING_USER, LIKE_PRODUCT, UNLIKE_PRODUCT,
 SET_USER_ORDERS, LOADING_ORDER, SET_SHIPPING_ADDRESS, LOADING_PAYMENT, LOADING_MEDICATION, SET_MEDICATION, 
 SET_SINGLE_MEDICATION
} from '../types';

const initialState = {
    authenticated: false,
    loading: false,
    loadingMedication: false,
    credentials: {},
    medication: undefined,
    loadingOrder: false,
    loadingPayment: false,
    likes: [],
    orders: [],
    shippingAdress: {},
    singleMedication: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
            case SET_UNAUTHENTICATED:
                return {
                     authenticated: false,
                     loading: false,
                     credentials: {},
                     loadingOrder: false,
                     loadingMedication: false,
                     medication: undefined,
                     likes: [],
                     orders: [],
                     shippingAdress: {}
                    };
            case SET_USER:
                return {
                    ...state,
                    authenticated: true,
                    loading: false,
                    loadingMedication: false,
                    ...action.payload
                };
            case SET_USER_ORDERS:
                return {
                    ...state,
                    orders: [...action.payload],
                    loadingOrder: false,
                    loadingPayment: false
                };

            case SET_MEDICATION:

                return {
                    ...state,
                    medication: [...action.payload],
                    loadingMedication: false,
                    loading: false,
                }

            case LOADING_MEDICATION:
                return {
                    ...state,
                    loadingMedication: true
                }

            case LOADING_ORDER:
                return {
                    ...state,
                    loadingOrder: true
                }
            case LOADING_PAYMENT:
                return {
                    ...state,
                    loadingPayment: true
                }
            case LOADING_USER:
                return {
                    ...state,
                    loading: true
                }
           
            case LIKE_PRODUCT:
                return {
                    ...state,
                    likes: [
                        ...state.likes,
                        {
                            userName: state.credentials.userName,
                            productId: action.payload.productId
                        }
                    ]
                }
                case UNLIKE_PRODUCT:
                    return {
                        ...state,
                        likes: state.likes.filter(like => like.productId !== action.payload.productId)
                    }
                case SET_SHIPPING_ADDRESS:
                    return {
                        ...state,
                        shippingAddress: {...state.shippingAddress,
                                          ...action.payload}
                    }
                case SET_SINGLE_MEDICATION:

                      let medIndex = state.medication.findIndex(
                                   (med) => med.medId === action.payload );

                          let newMed = state.medication[medIndex];
                          return {
                            ...state,
                            singleMedication: newMed
                          }
                default:
                return state;
    }
}