import Mock from "../mock";

const home = {
  sliders: [
    {
      title: "We are Providing Best ",
      highlightTitle: "Business",
      title1: " Agency.",
      button1: "Available on the",
      buttonSub1: "Play Store",
      button2: "Available on the",
      buttonSub2: "App Store",
    },
    {
      title: "We are Providing Best ",
      highlightTitle: "Business",
      title1: " Agency.",
      button1: "Available on the",
      buttonSub1: "Play Store",
      button2: "Available on the",
      buttonSub2: "App Store",
    },
    {
      title: "We are Providing Best ",
      highlightTitle: "Business",
      title1: " Agency.",
      button1: "Available on the",
      buttonSub1: "Play Store",
      button2: "Available on the",
      buttonSub2: "App Store",
    },
    {
      title: "We are Providing Best ",
      highlightTitle: "Business",
      title1: " Agency.",
      button1: "Available on the",
      buttonSub1: "Play Store",
      button2: "Available on the",
      buttonSub2: "App Store",
    },
  ],
}

Mock.onGet("/api/sliders3").reply((config) => {
  const response = home.sliders;
  return [200, response];
});

