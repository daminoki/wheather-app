import './styles/style.scss';
import { selectors } from './utils/constants';
import Search from './js/Search';
import Weather from './js/Weather';

const search = new Search(selectors);
search.setEventListeners();

const weather = new Weather();
weather.init();
