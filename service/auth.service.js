
import axios from 'axios';
import Route from 'next/router';

export const TOKEN_STORAGE_KEY = 'token';
export const USER_STORAGE_KEY = 'userName';
export const USER_ROLE_KEY = 'userRole';
const BASE_URL = 'http://127.0.0.1:8000';


class AuthService {
  
  static getUserAuthHeader = () => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    return {
      Authorization: 'Bearer ' + token,
    };
  };
  static getUserProfile = async () => {
    
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    try {
      const result = await axios.get( 
        BASE_URL+'/profile',
        config
      );
      if (result.status === 200) {
        return result.data.result;
      }
    } catch (e) {
      if (e.response && e.response.status === 422) return e.response;
      console.error('Cannot login', e.message);
      return false;
    }
  };

  static handleLogin = async (email, password) => {
    try {
      const result = await axios.post(BASE_URL+'/token', {
        email,
        password,
      });
      if (result.data.token != null) {
        localStorage.setItem(TOKEN_STORAGE_KEY, result.data.token);
        Route.push('/');
      }
     else {
        return false;
      }
    } catch (e) {
     
      if (e.response && e.response.status === 422) return e.response;
      console.error('Cannot login', e.message);
      return false;
    }
  };
  static handleRegister = async (name, email, password) => {
    try {
      const result = await axios.post(BASE_URL+'/register-device', {
        name,
        email,
        password,
      });    
      if (result.status === 200) {
        return true;
      }
    } catch (e) {
      if (e.response && e.response.status === 422) return e.response;
      console.error('Cannot login', e.message);
      return false;
    }
  };
  static checkIfAdminRoute = (context, userRole) => {
    const { req } = context;
    if (req?.url.includes('admin') && userRole !== 'admin') {
      context.res.writeHead(302, { Location: '/dashboard' });
      context.res.end();
    }
  };
}
export default AuthService;