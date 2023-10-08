import $ from "jquery";
import "./slideshow.scss";

const slideShowContents = [
  {
    title: "Video",
    content: {
      video: "https://www.youtube.com/embed/lSb1wk1VwHU",
      description: "Every Instant Transmission Ever",
    },
  },
  {
    title: "Photography",
    content: {
      video: "https://www.youtube.com/embed/4dzCjVHXXTY",
      description: "The Unexpected Final Blow on Vegeta in Dragon Ball Z: Kakarot",
    },
  },
  {
    title: "Social",
    content: {
      video: "https://www.youtube.com/embed/49yAIYmEEhQ",
      description: "Is Dragon Ball Z: Kakarot The Best DBZ Game? Video Game Review",
    },
  },
  {
    title: "PR",
    content: {
      video: "https://www.youtube.com/embed/Q_TZ2jFYwas",
      description: "DRAGON BALL: The Ultimate Review",
    },
  },
  {
    title: "Radio",
    content: {
      video: "https://www.youtube.com/embed/xxA7LfYiIcA?autohide=1&autoplay=1",
      description: "Super Dragon Ball Heroes Episode 6",
    },
  },
];

const slideshow = () => {
  const activeMenu = "Video";
  $(".slideshow").append(`
  <div class="tab-container">
        <div class="tabs">
            <ul>
                <li class="video active">Video</li>
                <li class="photography">Photography</li>
                <li class="social">Social</li>
                <li class="pr">PR</li>
                <li class="radio">Radio</li>
            </ul>
        </div>
        <div class="active-content">
          <div class="video-container"></div>
          <div class="description-container"></div>
        </div>
    </div>
  `);
  setActiveContent(activeMenu);
  handleChangeContent();
};

const handleChangeContent = () => {
    $('.slideshow .tab-container .tabs ul li').on('click', (event) => {
        setActiveTab(event.target.className);
        setActiveContent(event.target.outerText);
    })
}

const setActiveContent = (activeMenu) => {
  const activeContent = slideShowContents.find(
    (slideShowContent) => slideShowContent.title === activeMenu
  );

  $(".active-content div").remove();

  $(".active-content").append(
    `
      <div class="video-container">
        <embed
          src="${activeContent.content.video}"
          width="100%" height="100%"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
        >
      </div>
      <div class="description-container">
        ${activeContent.content.description}
        <button>View Project</button>
      </div>
    `
  );
};

const setActiveTab = (activeClassName) => {
    $('.slideshow .tab-container .tabs ul li').removeClass('active');
    $(`.slideshow .tab-container .tabs ul li.${activeClassName}`).addClass('active');
}

export default slideshow;
