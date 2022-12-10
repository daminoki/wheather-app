import './styles/style.scss';
import Search from './js/Search';

//   be3989d90810caddfe2d64d04f3e044e

// fetch('http://api.positionstack.com/v1/forward?access_key=4597c02232c2a8833c2069bc64449cb6&query=Kazan')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// // fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={e6970efb880b105e85f3508dd47a2c23}')
// //   .then((response) => response.json())

// //   .then((data) => console.log(data));

// fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=e6970efb880b105e85f3508dd47a2c23')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const search = new Search('.search');
search.init();
