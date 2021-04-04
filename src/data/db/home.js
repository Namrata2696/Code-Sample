import Mock from "../mock";

const home = {
  sliders: [
    {
      title: "& Innovative Digital Agency",
      highlightTitle: "Creative",
      button1: "Available on the",
      buttonSub1: "Play Store",
      button2: "Available on the",
      buttonSub2: "App Store",
    },
    {
      title: "& Innovative Digital Agency",
      highlightTitle: "Creative",
      button1: "Available on the",
      buttonSub1: "Play Store",
      button2: "Available on the",
      buttonSub2: "App Store",
    },
    {
      title: "& Innovative Digital Agency",
      highlightTitle: "Creative",
      button1: "Available on the",
      buttonSub1: "Play Store",
      button2: "Available on the",
      buttonSub2: "App Store",
    },
    {
      title: "& Innovative Digital Agency",
      highlightTitle: "Creative",
      button1: "Available on the",
      buttonSub1: "Play Store",
      button2: "Available on the",
      buttonSub2: "App Store",
    },
  ],
  information: {
    name: "Sagar Ramoliya",
    aboutContent:
      "I am a fullstack web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.",
    socialLinks: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      pinterest: "",
      behance: "",
      linkedin: "",
      dribbble: "",
      github: "https://github.com",
    },
  },
}

Mock.onGet("/api/sliders").reply((config) => {
  const response = home.sliders;
  return [200, response];
});

Mock.onGet("/api/information").reply((config) => {
  const response = home.information;
  return [200, response];
});
