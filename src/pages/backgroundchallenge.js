import $ from "jquery";
import './backgroundchallenge.scss';

const backgroundchallenge = () => {
    $(".background-challenge").append(`
        <div class="column1">
            <h3>The</h3>
            <h1>WHITSUNDAYS</h1>
            <p>A MOVIE THAT'S WAITING TO BE WRITTEN</p>
        </div>
        <div class="column2">
            <h3>Background</h3>
            <h3>& Audience</h3>
            <br />
            <p>
                Tourism & Events Queensland wanted ti increase consideration
                <br />
                of The Whitsundays amongst 'social fun seekers'; digital savvy
                <br />
                consumers that socialise substantially online.
            </p>
            <br />
            <h3>Problem</h3>
            <br />
            <p>The Whitsundays was losing it cachet as an aspirational</p>
            <p>holiday location.</p>
            <br />
            <h3>Objective</h3>
            <br />
            <p>Shift perceptions and re-build the Whitsundays' social currency</p>
            <p>as a world-class destination.</p>
        </div>
    `);
}

export default backgroundchallenge;