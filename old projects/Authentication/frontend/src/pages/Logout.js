import {redirect} from 'react-router-dom'
export default function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('tokenEndTime');
  return redirect('/');
}




