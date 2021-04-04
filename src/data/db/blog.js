import Mock from "../mock";
import Img1 from "../../assets/images/blog_img_1.jpg";
import BlogerImg1 from "../../assets/images/blog_user_1.jpg";
import Img2 from "../../assets/images/blog_img_2.jpg";
import BlogerImg2 from "../../assets/images/blog_user_2.jpg";
import Img3 from "../../assets/images/blog_img_3.jpg";
import BlogerImg3 from "../../assets/images/blog_user_3.jpg";

const blog = {
  blogData: [
    {
      blogLink: "#",
      blogImage: Img1,
      date: "July 30,2019",
      title: "Video Marketing Guide: 5 Steps to Success.",
      highlight:
        '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
      blogerImage: BlogerImg1,
      bloger: "John Deo",
    },
    {
      blogLink: "#",
      blogImage: Img2,
      date: "July 25,2019",
      title: "Best way to solve business deal issue.",
      highlight:
        '"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.',
      blogerImage: BlogerImg2,
      bloger: "Sunny Roy",
    },
    {
      blogLink: "#",
      blogImage: Img3,
      date: "July 30,2019",
      title: "Video Marketing Guide: 5 Steps to Success.",
      highlight:
        '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
      blogerImage: BlogerImg3,
      bloger: "John Deo",
    },
    {
      blogLink: "#",
      blogImage: Img1,
      date: "July 30,2019",
      title: "Video Marketing Guide: 5 Steps to Success.",
      highlight:
        '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
      blogerImage: BlogerImg1,
      bloger: "John Deo",
    },
    {
      blogLink: "#",
      blogImage: Img1,
      date: "July 30,2019",
      title: "Video Marketing Guide: 5 Steps to Success.",
      highlight:
        '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
      blogerImage: BlogerImg1,
      bloger: "John Deo",
    },
    {
      blogLink: "#",
      blogImage: Img1,
      date: "July 30,2019",
      title: "Video Marketing Guide: 5 Steps to Success.",
      highlight:
        '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
      blogerImage: BlogerImg1,
      bloger: "John Deo",
    },
    {
      blogLink: "#",
      blogImage: Img1,
      date: "July 30,2019",
      title: "Video Marketing Guide: 5 Steps to Success.",
      highlight:
        '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
      blogerImage: BlogerImg1,
      bloger: "John Deo",
    },
    {
      blogLink: "#",
      blogImage: Img1,
      date: "July 30,2019",
      title: "Video Marketing Guide: 5 Steps to Success.",
      highlight:
        '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
      blogerImage: BlogerImg1,
      bloger: "John Deo",
    },
    {
      blogLink: "#",
      blogImage: Img1,
      date: "July 30,2019",
      title: "Video Marketing Guide: 5 Steps to Success.",
      highlight:
        '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
      blogerImage: BlogerImg1,
      bloger: "John Deo",
    },

  ],
  sliders: [
    {
      title: "Latest",
      highlightTitle: "Blog",
      breadcrumbsHome: "Home",
      breadcrumbs: "Blog",
      homeurl: "/",
    },
  ],
};

Mock.onGet("/api/blog/banner").reply((config) => {
  const response = blog.sliders;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = blog.blogData;
  return [200, response];
});
