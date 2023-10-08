import $ from "jquery";
import "./sidenavigation.scss";

const sidenavigation = () => {
  $(".side-navigation").append(`
        <div class="menu-container">
            <ul>
                <li><a href="#home"></a></li>   
                <li><a href="#backgroundandchallenge"></a></li>   
                <li><a href="#solution"></a></li>   
                <li><a href="#slideshow"></a></li>   
            </ul>
        </div>
    `);
  setActiveMenu(location.hash || "#home");
  $("a[href*=\\#]:not([href=\\#])").on("click", (event) => {
    let target = event.target.href.split("#");
    target = target.length > 1 ? `#${target[1]}` : "";
    if (target.length) {
      $("html, body").animate({ scrollTop: $(target).position().top }, 800);
    }
    setActiveMenu(target);
  });
};

const setActiveMenu = (hash) => {
  $("ul li a").removeClass("active");
  $(`ul li a[href="${hash}"]`).addClass("active");
};

export default sidenavigation;
