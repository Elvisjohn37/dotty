import $ from "jquery";
import "./solution.scss";

const solution = () => {
  $(".solution").append(`
    <h1>Solution</h1>
    <div class="container">
        <div class="column1">
            <p>
                We knew movies rated high on the list of our target's Interest 
                <br />
                and, with incredible beaches, seaplanes, yatchs and glamorous 
                <br />
                locations, the Whitsundays is the perfect setting for a movie.
            </p>
            <br />
            <p>
                So we invited Australians to write it.
            </p>
            <br />
            <h3>
                The Whitsundays.
                <br />
                A movie that's waiting to be written.
            </h3>
            <br />
            <p>
                We enlisted world-renowed screenwriter Craig Pearce as Script
                <br />
                Supervisor. Then the 20 days we posted a daily storyboard image
                <br />
                on Facebook and Instagram, inviting the public to write scenes
                <br />
                for a chance to win a $10,000 luxury holiday.
            </p>
        </div>
        <div class="column2">
            <p>
                The campain launched with a trailer, radio and online
                <br />
                advertising.
            </p>
            <br />
            <p>
                We reacted to the storyline as it developed, selecting and
                <br />
                treating images according to the previous winning scene.
            </p>
            <br />
            <p>
                Each scene written and shared became a compelling "ad" for
                <br />
                the Whitsundays.
            </p>
            <br />
            <p>
                Together, a Hollywood screenwriter and the Australian public
                <br />
                had created the world's first crowd-sourced movie storyboard
                <br />
                and a story universe with millions of possible permutations.
            </p>
        </div>
    </div>
  `);
};

export default solution;
