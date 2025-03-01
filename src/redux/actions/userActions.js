import axios from 'axios';
import {
        SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED,
         LOADING_USER, MARK_NOTIFICATIONS_READ, SET_USER_ORDERS, LOADING_ORDER, 
         CLEAR_CART, LOADING_PAYMENT, LOADING_MEDICATION, SET_MEDICATION, 
         TAKE_MEDICATION, CANCEL_MEDICATION, SET_SINGLE_MEDICATION  
     } from '../types';





export const loginUser = (userData, history, lastLocation) => (dispatch) => {
    dispatch({ type: LOADING_USER })
    dispatch({ type: LOADING_UI})
    axios
    .post('/login', userData)
    .then((res) => {
        setAuthorizationHeader(res.data.token)
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS});
      //  if(lastLocation){history.push(lastLocation)}
      //  else{history.push('/medications');}
         history.push('/medications');
       })
    .catch(err => {
        dispatch({
            type: SET_ERRORS, 
            payload: (err.response || {}).data
        })
    })
}


export const signupUser = (newUserData, history) => (dispatch) => {
    dispatch({ type: LOADING_USER })
    dispatch({ type: LOADING_UI })
    axios
    .post('/signup', newUserData)
    .then((res) => {
        setAuthorizationHeader(res.data.token)
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS})
        history.push('/medications');
       })
    .catch(err => {
        dispatch({
            type: SET_ERRORS, 
            payload: (err.response || {}).data
        })
    })
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
}

export const getUserData = () => (dispatch) => {
 
axios.get('/user')
     .then(res => {
         dispatch({
             type: SET_USER,
             payload: res.data
         })
     })
     .catch(err => console.log(err));
}


export const addMedication = (medication, history) => (dispatch) => {

    
    dispatch({ type: LOADING_MEDICATION})

    axios.post('/medication', medication)
         .then(res => {
            dispatch(getMedications());
            history.push("/medications")
         })
         .catch(err => console.log(err));
}


export const getMedications = () => (dispatch) => {
    dispatch({ type: LOADING_MEDICATION })
    axios.get('/medication')
         .then(res => {
             dispatch({
                 type: SET_MEDICATION,
                 payload: res.data
             })
         })
         .catch(err => console.log(err));
}

export const takeMedication = (medData) => (dispatch) => {
      dispatch({ type: LOADING_MEDICATION })
      axios.post('/medication/take', medData)
           .then(res => {
                dispatch({
                    type: SET_MEDICATION,
                    payload: res.data
                })
                dispatch({ type: SET_SINGLE_MEDICATION,
               payload: medData.medId })
           })
}

export const cancelMedication = (medData) => (dispatch) => {
    dispatch({ type: LOADING_MEDICATION })
     axios.post('/medication/cancel', medData)
           .then(res => {
                dispatch({
                    type: SET_MEDICATION,
                    payload: res.data
                })
                dispatch({ type: SET_SINGLE_MEDICATION,
               payload: medData.medId })
           })
} 

export const placeOrder = (orderData) => (dispatch) => {
    dispatch({ type: LOADING_ORDER })
    axios.post('/orders', orderData)
         .then(res => {
            dispatch(getUserOrder());
         })
         .catch(err => console.log(err));
}

export const confirmOrder = (orderStatus, history) => (dispatch) => {
      dispatch({ type: LOADING_PAYMENT})
      axios.post('confirmorder', orderStatus)
           .then(res => {
               dispatch({
                type: CLEAR_CART,
                payload: []
               })
               dispatch(getUserOrder());
               history.push('/orders');
           })
           
}

export const getUserOrder = () => (dispatch) => {
    dispatch({ type: LOADING_ORDER })
    axios.get('/orders')
         .then(res => {
             dispatch({
                 type: SET_USER_ORDERS,
                 payload: res.data
             })
         })
         .catch(err => console.log(err));
}

export const uploadImage = (formData) => (dispatch) =>{
    dispatch({ type: LOADING_USER })
    axios.post('/user/image', formData)
        .then(() => {
            dispatch(getUserData());
        })
        .catch(err => console.log(err));
}


export const editUserDetails = (userDetails) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.post('/user', userDetails)
        .then(() => {
            dispatch(getUserData());
        })
        .catch(err => console.log(err));
}


export const markNotificationsRead = (notificationIds) => dispatch => {
    axios.post('/notifications', notificationIds)
       .then(res => {
           dispatch({
               type: MARK_NOTIFICATIONS_READ
           })
       })
       .catch(err => console.log(err))
}

const setAuthorizationHeader = (token) => {
    
    const FBIdToken = `Bearer ${token}`;
        localStorage.setItem('FBIdToken', FBIdToken);
        axios.defaults.headers.common['Authorization'] = FBIdToken;

}