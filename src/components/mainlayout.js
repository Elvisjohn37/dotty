import jQuery from 'jquery';
import './mainlayout.scss';
import mainnavigation from './mainnavigation';
import sidenavigation from './sidenavigation';
import home from '../pages/home';
import backgroundchallenge from '../pages/backgroundchallenge';
import solution from '../pages/solution';
// import results from '../pages/results';
import slideshow from '../pages/slideshow';

const mainlayout = () => {
    mainnavigation();
    sidenavigation();
    home();
    backgroundchallenge();
    solution();
    // results();
    slideshow();
}

export default mainlayout;