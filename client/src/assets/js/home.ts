import './global/global';
import '../styles/home.scss';
import { fetchTest } from '../adapters/api';

window.addEventListener('load', async () => {
  try {
    const data = await fetchTest();
    console.log(data);
  } catch (error: any) {
    alert(error.message);
  }
});
