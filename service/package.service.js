
import axios from 'axios';
import Route from 'next/router';

export const TOKEN_STORAGE_KEY = 'token';
export const USER_STORAGE_KEY = 'userName';
export const USER_ROLE_KEY = 'userRole';
const BASE_URL = process.env.API_ENDPOINT;


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
     
        return result.data;
      
    } catch (e) {
      if (e.response && e.response.status === 422) return e.response;
      console.error('Cannot get detail package', e.message);
      return false;
    }
  };
  static getDetailById = async (id) => {
    try {
      const result = await axios.get( 
        BASE_URL+'/api/package-detail/'+id,
      );
     
        return result.data;
      
    } catch (e) {
      if (e.response && e.response.status === 422) return e.response;
      console.error('Cannot get detail package', e.message);
      return false;
    }
  };
  static checkout = async (package_id, total, device, days) => {
    try {
      const token = localStorage.getItem(TOKEN_STORAGE_KEY);
      let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
      const result = await axios.post(BASE_URL+'/api/package/checkout', {
        package_id,
        total,
        device,
        days
      },config);
      if (result.data.result == 'done') {
        return true;
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



  
}
export default PackageService;