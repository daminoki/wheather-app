import './styles/style.scss';
import { selectors } from './js/constants';
import Search from './js/Search';

// fetch('http://api.positionstack.com/v1/forward?access_key=&query=Kazan')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const search = new Search(selectors);
search.setEventListeners();
