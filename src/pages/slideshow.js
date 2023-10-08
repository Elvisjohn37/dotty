import $ from "jquery";
import "./slideshow.scss";

const slideShowContents = [
  {
    title: "Video",
    content: {
      video: "https://www.youtube.com/embed/0BkvpEpbItI",
      description: "Whitsunday Islands Vacation Travel Guide | Expedia",
    },
  },
  {
    title: "Photography",
    content: {
      video: "https://www.youtube.com/embed/PummPEYRWuw",
      description: "Top 10 Things to Do in AIRLIE BEACH and the WHITSUNDAYS, Australia, 2023 | Travel Guide",
    },
  },
  {
    title: "Social",
    content: {
      video: "https://www.youtube.com/embed/lrv3Fnb97To",
      description: "The Whitsundays From Above - 4k Cinematic Drone 90 Minutes",
    },
  },
  {
    title: "PR",
    content: {
      video: "https://www.youtube.com/embed/Mk0nbHjnwyw",
      description: "Atlantic Clipper - Sailing Whitsundays",
    },
  },
  {
    title: "Radio",
    content: {
      video: "https://www.youtube.com/embed/AYE3Es94UVM",
      description: "Green Island Day trip from Cairns | Great Barrier Reef Snorkelling Tour, North Queensland",
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
