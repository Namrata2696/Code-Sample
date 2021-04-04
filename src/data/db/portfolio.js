import Mock from "../mock";
import img1 from "../../assets/images/portfolio_img_1.jpg";
import img2 from "../../assets/images/portfolio_img_5.jpg";
import img3 from "../../assets/images/portfolio_img_9.jpg";
import img4 from "../../assets/images/portfolio_img_2.jpg";
import img5 from "../../assets/images/portfolio_img_6.jpg";
import img6 from "../../assets/images/portfolio_img_10.jpg";
import img7 from "../../assets/images/portfolio_img_3.jpg";
import img8 from "../../assets/images/portfolio_img_7.jpg";
import img9 from "../../assets/images/portfolio_img_11.jpg";
import img10 from "../../assets/images/portfolio_img_4.jpg";
import img11 from "../../assets/images/portfolio_img_8.jpg";
import img12 from "../../assets/images/portfolio_img_12.jpg";

import imgthumb1 from "../../assets/images/portfolio_img_thumb_1.jpg";
import imgthumb2 from "../../assets/images/portfolio_img_thumb_5.jpg";
import imgthumb3 from "../../assets/images/portfolio_img_thumb_9.jpg";
import imgthumb4 from "../../assets/images/portfolio_img_thumb_2.jpg";
import imgthumb5 from "../../assets/images/portfolio_img_thumb_6.jpg";
import imgthumb6 from "../../assets/images/portfolio_img_thumb_10.jpg";
import imgthumb7 from "../../assets/images/portfolio_img_thumb_3.jpg";
import imgthumb8 from "../../assets/images/portfolio_img_thumb_7.jpg";
import imgthumb9 from "../../assets/images/portfolio_img_thumb_11.jpg";
import imgthumb10 from "../../assets/images/portfolio_img_thumb_4.jpg";
import imgthumb11 from "../../assets/images/portfolio_img_thumb_8.jpg";
import imgthumb12 from "../../assets/images/portfolio_img_thumb_12.jpg";

const portfolio = {
  portfoliodata: [
    {
      src: img1,
      thumbnail: imgthumb1,
      thumbnailWidth: 271,
      thumbnailHeight: 320,
      // width: 1,
      // height: 1,
      caption: "Mobile App",
    },
    {
      src: img2,
      thumbnail: imgthumb2,
      thumbnailWidth: 320,
            thumbnailHeight: 190,
      // width: 4,
      // height: 3,
      caption: "Template Project",
    },
    {
      src: img3,
      thumbnail: imgthumb3,
      thumbnailWidth: 320,
            thumbnailHeight: 148,
      // width: 4,
      // height: 3,
      caption: "Wordpress Development",
    },
    {
      src: img4,
      thumbnail: imgthumb4,
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      // width: 3,
      // height: 4,
      caption: "Magento Project",
    },
    {
      src: img5,
      thumbnail: imgthumb5,
      thumbnailWidth: 248,
            thumbnailHeight: 320,
      // width: 3,
      // height: 4,
      caption: "Mobile App",
    },
    {
      src: img6,
      thumbnail: imgthumb6,
      thumbnailWidth: 320,
      thumbnailHeight: 113,
      // width: 1,
      // height: 2,
      caption: "Template Project",
    },
    {
      src: img7,
      thumbnail: imgthumb7,
      thumbnailWidth: 313,
      thumbnailHeight: 320,
      // width: 4,
      // height: 3,
      caption: "Web Development",
    },
    {
      src: img8,
      thumbnail: imgthumb8,
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      // width: 3,
      // height: 4,
      caption: "Shopify Project",
    },
    {
      src: img9,
      thumbnail: imgthumb9,
      thumbnailWidth: 248,
            thumbnailHeight: 320,
      // width: 3,
      // height: 4,
      caption: "Prestashop site",
    },
    {
      src: img10,
      thumbnail: imgthumb10,
      thumbnailWidth: 320,
            thumbnailHeight: 113,
      // width: 3,
      // height: 4,
      caption: "Python Development",
    },
    {
      src: img11,
      thumbnail: imgthumb11,
      thumbnailWidth: 313,
      thumbnailHeight: 320,
      // width: 3,
      // height: 4,
      caption: "HTML Project",
    },
    {
      src: img12,
      thumbnail: imgthumb12,
      thumbnailWidth: 320,
            thumbnailHeight: 213,
      // width: 3,
      // height: 4,
      caption: "Web Development",
    },
    {
      src: img12,
      thumbnail: imgthumb12,
      thumbnailWidth: 320,
            thumbnailHeight: 213,
      // width: 3,
      // height: 4,
      caption: "Web Development",
    },
    {
      src: img12,
      thumbnail: imgthumb12,
      thumbnailWidth: 320,
            thumbnailHeight: 213,
      // width: 3,
      // height: 4,
      caption: "Web Development",
    },
    {
      src: img12,
      thumbnail: imgthumb12,
      thumbnailWidth: 320,
            thumbnailHeight: 213,
      // width: 3,
      // height: 4,
      caption: "Web Development",
    },
    {
      src: img12,
      thumbnail: imgthumb12,
      thumbnailWidth: 320,
            thumbnailHeight: 213,
      // width: 3,
      // height: 4,
      caption: "Web Development",
    },
    {
      src: img12,
      thumbnail: imgthumb12,
      thumbnailWidth: 320,
            thumbnailHeight: 213,
      // width: 3,
      // height: 4,
      caption: "Web Development",
    },
    {
      src: img12,
      thumbnail: imgthumb12,
      thumbnailWidth: 320,
            thumbnailHeight: 213,
      // width: 3,
      // height: 4,
      caption: "Web Development",
    },
    {
      src: img12,
      thumbnail: imgthumb12,
      thumbnailWidth: 320,
            thumbnailHeight: 213,
      // width: 3,
      // height: 4,
      caption: "Web Development",
    },
    {
      src: img12,
      thumbnail: imgthumb12,
      thumbnailWidth: 320,
            thumbnailHeight: 213,
      // width: 3,
      // height: 4,
      caption: "Web Development",
    },
  ],

  sliders: [
    {
      title: "Creative",
      highlightTitle: "Portfolio",
      breadcrumbsHome: "Home",
      breadcrumbs: "Portfolio",
      homeurl: "/",
    },
  ],
};

Mock.onGet("/api/portfolio").reply((config) => {
  const response = portfolio.portfoliodata;
  return [200, response];
});

Mock.onGet("/api/portfolio/banner").reply((config) => {
  const response = portfolio.sliders;
  return [200, response];
});
