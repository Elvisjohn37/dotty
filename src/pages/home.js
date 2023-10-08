import $ from "jquery";
import './home.scss';

const home = () => {
    $('.home').append(`
        <div class="video-container">
            <embed
                src="https://www.youtube.com/embed/t7ZOWLqcrfw?autohide=1&autoplay=1"
                width="100%"
            >
        </div>
    `);
}

export default home;