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
}

Mock.onGet("/api/sliders4").reply((config) => {
  const response = home.sliders;
  return [200, response];
});

