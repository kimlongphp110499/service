
import axios from 'axios';
import Route from 'next/router';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import toast, { Toaster } from 'react-hot-toast';

export const TOKEN_STORAGE_KEY = 'token';
export const USER_STORAGE_KEY = 'userName';
export const USER_ROLE_KEY = 'userRole';
const BASE_URL = 'http://localhost/api';
const notify = () => toast('Here is your toast.');


class AuthService {
  
  static getUserAuthHeader = () => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    return {
      Authorization: 'Bearer ' + token,
    };
  };

  static handleLogin = async (email, password) => {
    try {
      const result = await axios.post(BASE_URL+'/login', {
        email,
        password,
      });
     
      if (result.status === 200) {
        localStorage.setItem(TOKEN_STORAGE_KEY, result.data.token);
        Route.push('/register');
      }
    } catch (e) {
     
      toast('Here is your toast.');
      //addToast('Saved Successfully', { appearance: 'success' });
      //Route.push('/register');
      if (e.response && e.response.status === 422) return e.response;
      console.error('Cannot login', e.message);
      return false;
    }
  };
  static handleRegister = async (name, email, password) => {
    try {
      const result = await axios.post(BASE_URL+'/login', {
        name,
        email,
        password,
      });
      toast("Wow so easy!");
      Route.push('/login');
      if (result.status === 200) {
        toast.notify(`Hi, I am a toast!`)
        Route.push('/login');
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