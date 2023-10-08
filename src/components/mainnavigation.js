import $ from "jquery";
import "./mainnavigation.scss";
import "material-symbols";

const mainnavigation = () => {
  $(".main-navigation").append(`
        <div class="menu-container">
            <ul>
                <li class="home-menu">
                  <a class="material-symbols-outlined" href="#home">
                    play_arrow
                  </a>
                </li>   
                <li><a href="#backgroundandchallenge">Background & Challenge</a></li>   
                <li><a href="#solution">Solution</a></li>   
                   
                <li><a href="#slideshow">Slideshow</a></li>   
            </ul>
            <div class="download">
              <a class="material-symbols-outlined" href="#backgroundandchallenge">
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

$(window).scroll(() => {
  var homeOffset = $("#home").offset().top,
    backgroundandchallengeOffset = $("#backgroundandchallenge").offset().top,
    solutionOffset = $("#solution").offset().top,
    slideshowOffset = $("#slideshow").offset().top;

  if (window.pageYOffset + window.innerHeight / 2 >= slideshowOffset) {
    $(`a[href*="\\#"]`).removeClass("active");
    $(`a[href="\\#slideshow"]`).addClass("active");
  } else if (window.pageYOffset + window.innerHeight / 2 >= solutionOffset) {
    $(`a[href*="\\#"]`).removeClass("active");
    $(`a[href="\\#solution"]`).addClass("active");
  } else if (
    window.pageYOffset + window.innerHeight / 2 >=
    backgroundandchallengeOffset
  ) {
    $(`a[href*="\\#"]`).removeClass("active");
    $(`a[href="\\#backgroundandchallenge"]`).addClass("active");
  } else if (window.pageYOffset + window.innerHeight / 2 >= homeOffset) {
    $(`a[href*="\\#"]`).removeClass("active");
    $(`a[href="\\#home"]`).addClass("active");
  }
});

export default mainnavigation;

{
  /* <li><a href="#resultseffectiveness">Results & Effectiveness</a></li> */
}
