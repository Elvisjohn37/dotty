import './mainlayout.scss';
import mainnavigation from 'src/components/mainnavigation';
import sidenavigation from 'src/components/sidenavigation';
import home from 'src/pages/home';
import backgroundchallenge from 'src/pages/backgroundchallenge';
import solution from 'src/pages/solution';
// import results from 'src/pages/results';
import slideshow from 'src/pages/slideshow';

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