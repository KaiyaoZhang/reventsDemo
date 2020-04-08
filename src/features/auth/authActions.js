import Firebase from './Firebase';
import {
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,
    CREATE_USER,
    SOCIAL_LOGIN
} 
from './authConstants';

const requestLogin = () => {
    return {
      type: LOGIN_REQUEST
    };
  };
  
  const receiveLogin = user => {
    return {
      type: LOGIN_SUCCESS,
      user
    };
  };

  const socialAccountLogin = user => {
    return {
      type: SOCIAL_LOGIN,
      user
    }
  }
  
  const createUser = user => {
    return {
      type: CREATE_USER,
      user
    }
  };

  const loginError = () => {
    return {
      type: LOGIN_FAILURE
    };
  };
  
  const requestLogout = () => {
    return {
      type: LOGOUT_REQUEST
    };
  };
  
  const receiveLogout = () => {
    return {
      type: LOGOUT_SUCCESS
    };
  };
  
  const logoutError = () => {
    return {
      type: LOGOUT_FAILURE
    };
  };
  
  const verifyRequest = () => {
    return {
      type: VERIFY_REQUEST
    };
  };
  
  const verifySuccess = () => {
    return {
      type: VERIFY_SUCCESS
    };
  };
  
  export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin());
    Firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch(receiveLogin(user));
      })
      .catch(error => {
        dispatch(loginError());
      });
  };
  
  export const createNewUser = (email, password, username) => dispatch => {
    Firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      if(user){
        user.updateProfile({
          displayName: username
        }).then(() => {
          console.log('successed!');
        })
      }
      dispatch(createUser(user));
    })
    .catch(e => {
      alert(e);
    });
  }

  export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    Firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(receiveLogout());
      })
      .catch(error => {
        //Do something with the error if you want!
        dispatch(logoutError());
      });
  };
  
  export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    Firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user !== null) {
          dispatch(receiveLogin(user));
        }
        dispatch(verifySuccess());
      });
  };

  export const socialLogin = (selectedProvder) => dispatch => {
    Firebase
    .login({
      provider: selectedProvder,
      type: 'popup'
    })
    .then(user => {
      //console.log(user)
      dispatch(socialAccountLogin(user))
    })
    .catch((e) => {
      console.log(e);
    })
  }