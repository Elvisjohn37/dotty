import $ from "jquery";
import "./mainnavigation.scss";
import 'material-symbols';

const mainnavigation = () => {
  $(".main-navigation").append(`
        <div class="menu-container">
            <ul>
                <li class="home-menu">
                  <a id="home" class="material-symbols-outlined" href="#home">
                    play_arrow
                  </a>
                </li>   
                <li><a href="#backgroundandchallenge">Background & Challenge</a></li>   
                <li><a href="#solution">Solution</a></li>   
                   
                <li><a href="#slideshow">Slideshow</a></li>   
            </ul>
            <div class="download">
              <a id="play" class="material-symbols-outlined" href="#backgroundandchallenge">
                download
              </a>
              <span>Download Board</span>
            </dv>
        </div>
    `);
  setActiveMenu(location.hash || "#home");
  $("a[href*=\\#]:not([href=\\#])").on("click", (event) => {
    let target = event.target.href.split("#");
    target = target.length > 1 ? `#${target[1]}` : "";
    if (target.length) {
      $("html, body").animate({ scrollTop: $(target).position().top }, 300);
    }
    setActiveMenu(target);
  });
};

const setActiveMenu = (hash) => {
  $("ul li a").removeClass("active");
  $(`ul li a[href="${hash}"]`).addClass("active");
};

export default mainnavigation;

{/* <li><a href="#resultseffectiveness">Results & Effectiveness</a></li> */}