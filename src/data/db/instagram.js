import Mock from "../mock";
import Img1 from "../../assets/images/instagram_img_1.jpg";
import Img2 from "../../assets/images/instagram_img_2.jpg";
import Img3 from "../../assets/images/instagram_img_3.jpg";
import Img4 from "../../assets/images/instagram_img_4.jpg";

const instagram = {
  instagramdata: [
    {
      name: '@instagram',
      image: Img1,
      url: '#',
    },
    {
      name: '@instagram',
      image: Img2,
      url: '#',
    },
    {
      name: '@instagram',
      image: Img3,
      url: '#',
    },
    {
      name: '@instagram',
      image: Img4,
      url: '#',
    },
    {
      name: '@instagram',
      image: Img2,
      url: '#',
    },
  ]
};

Mock.onGet("/api/instagram").reply((config) => {
  const response = instagram.instagramdata;
  return [200, response];
});
