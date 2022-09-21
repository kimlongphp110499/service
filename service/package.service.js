
import axios from 'axios';
import Route from 'next/router';

export const TOKEN_STORAGE_KEY = 'token';
export const USER_STORAGE_KEY = 'userName';
export const USER_ROLE_KEY = 'userRole';
const BASE_URL = 'http://127.0.0.1:8000';


class PackageService {
  
  
  static getList = async () => {
    
    try {
      const result = await axios.get( 
        BASE_URL+'/api/list-shop',
      );
      if (result.status === 200) {
        return result;
      }
    } catch (e) {
      if (e.response && e.response.status === 422) return e.response;
      console.error('Cannot get list package', e.message);
      return false;
    }
  };
  static getDetail = async (id) => {
    try {
      const result = await axios.get( 
        BASE_URL+'/api/detail-shop/'+id,
      );
      if (result.status === 200) {
        return result.data.result;
      }
    } catch (e) {
      if (e.response && e.response.status === 422) return e.response;
      console.error('Cannot get detail package', e.message);
      return false;
    }
  };



  
}
export default PackageService;