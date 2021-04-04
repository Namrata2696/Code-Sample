import Mock from "../mock";
import Img1 from "../../assets/images/testimonial_img_1.jpg";

const testimonial = {
  testimonialdata: [
    {
      name: "John Deo",
      role: "Co-Founder",
      image: Img1,
      description:
        "Lorem ipsum dolor consectetur adipiscing elit.Vestibulum sit amet nisi a augue consectetur viverra. Proin eleifend the libero, a iaculis lectus consectetur of sit amet.",
    },
    {
      name: "Sunny Roy",
      role: "Co-Founder",
      image: Img1,
      description:
        "Lorem ipsum dolor consectetur adipiscing elit.Vestibulum sit amet nisi a augue consectetur viverra. Proin eleifend the libero, a iaculis lectus consectetur of sit amet.",
    },
    {
      name: "John Deo",
      role: "Co-Founder",
      image: Img1,
      description:
        "Lorem ipsum dolor consectetur adipiscing elit.Vestibulum sit amet nisi a augue consectetur viverra. Proin eleifend the libero, a iaculis lectus consectetur of sit amet.",
    },
    {
      name: "Sunny Roy",
      role: "Co-Founder",
      image: Img1,
      description:
        "Lorem ipsum dolor consectetur adipiscing elit.Vestibulum sit amet nisi a augue consectetur viverra. Proin eleifend the libero, a iaculis lectus consectetur of sit amet.",
    },
  ],
};

Mock.onGet("/api/testimonial").reply((config) => {
  const response = testimonial.testimonialdata;
  return [200, response];
});
