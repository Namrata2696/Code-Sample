import Mock from "../mock";

const about = {
  aboutus: {
    aboutTitle: "WHO WE ARE?",
    aboutHeadline: "Lorem Ipsum is simply dummy text of the printing and typesetting indus Lorem Ipsum has been the industry.",
    aboutText: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled.</p><p>It has survived not only five centuries, but also the leap into it to make a type specimen book. electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of.</p>",
    aboutImage: '../assets/images/about/about_img.png',
  },
  sliders: [
    {
      title: "About",
      highlightTitle: "Us",
      breadcrumbsHome: "Home",
      breadcrumbs: "About Us",
      homeurl: "/",
    },
  ],
}


Mock.onGet("/api/aboutus/banner").reply(config => {
  const response = about.sliders;
  return [200, response];
});

Mock.onGet("/api/aboutus").reply(config => {
  const response = about.aboutus;
  return [200, response];
});


