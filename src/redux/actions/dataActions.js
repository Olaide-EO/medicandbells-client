import {
    SET_PRODUCTS, 
    LOADING_DATA, 
    LIKE_PRODUCT, 
    UNLIKE_PRODUCT, 
    DELETE_PRODUCT,
    SET_ERRORS,
    ADD_PRODUCT,
    CLEAR_ERRORS,
    LOADING_UI,
    SET_PRODUCT,
    STOP_LOADING_UI,
     SET_SPECIAL_OFFERS,
     SET_ORDERS
   
 } from '../types';
import axios from 'axios';

// Get all screams
export const getProducts = () => dispatch => {
    dispatch({ type: LOADING_DATA });
    axios.get('/products')
       .then(res => {
           dispatch({
               type: SET_PRODUCTS,
               payload: res.data
           })
       })
       .catch(err => {
           dispatch({
               type: SET_PRODUCTS,
               payload: []
           })
       })
}

export const getSpecialOffers = () => dispatch => {
    dispatch({ type: LOADING_DATA });
    axios.get('/specialoffers')
       .then(res => {
           dispatch({
               type: SET_SPECIAL_OFFERS,
               payload: res.data
           })
       })
       .catch(err => {
           dispatch({
               type: SET_SPECIAL_OFFERS,
               payload: []
           })
       })
}


export const getProduct = (productId) => dispatch => {
    dispatch({ type: LOADING_UI});
    axios.get(`/products/${productId}`)
       .then(res => {
           dispatch({
               type: SET_PRODUCT,
               payload: res.data
           });
           dispatch({ type: STOP_LOADING_UI})
       })
       .catch(err => console.log(err));
}

// Post a scream
export const addProduct = (newProduct) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/admin/product', newProduct)
    .then(res => {
        dispatch({
            type: ADD_PRODUCT,
            payload: res.data
        });
        dispatch(clearErrors());
    })
    .catch( err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
}


// Like a scream
export const likeProduct = (productId) => dispatch => {
    axios.get(`/products/${productId}/like`)
       .then(res => {
           dispatch({
               type: LIKE_PRODUCT,
               payload: res.data
           })
       })
       .catch(err => console.log(err));
}

export const unlikeProduct = (productId) => dispatch => {
    axios.get(`/products/${productId}/unlike`)
       .then(res => {
           dispatch({
               type: UNLIKE_PRODUCT,
               payload: res.data
           })
       })
       .catch(err => console.log(err));
}
// Submit a comment



export const deleteProduct = (productId) => (dispatch) => {
    axios.delete(`/admin/product/${productId}`)
       .then(() => {
           dispatch({ type: DELETE_PRODUCT, payload: productId })
       })
       .catch(err => console.log(err))
}


export const getUserData = (userName) => dispatch => {
    dispatch({ type: LOADING_DATA });
    axios.get(`/admin/user/${userName}`)
       .then(res => {
           dispatch({
               type: SET_ORDERS,
               payload: res.data.orders
           });
       })
       .catch(() => {
           dispatch({
               type: SET_ORDERS,
               payload: null
           })
       })
}  

export const clearErrors = () => dispatch => {
    dispatch({ type: CLEAR_ERRORS })
}




