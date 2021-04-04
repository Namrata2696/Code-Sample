import Mock from "../mock";

const service = {
  service: [
    {
      backgroundIcon: "",
      title: "Optimization",
      description:
        "Lorem ipsum felis consectetur adipiscing elit. Nunc condimentum felis vit tellus pretium.",
      moreLink: "#",
    },
    {
      backgroundIcon: "",
      title: "Market Analysis",
      description:
        "Lorem ipsum felis consectetur adipiscing elit. Nunc condimentum felis vit tellus pretium.",
      moreLink: "#",
    },
    {
      backgroundIcon: "",
      title: "Concept & Idea",
      description:
        "Lorem ipsum felis consectetur adipiscing elit. Nunc condimentum felis vit tellus pretium.",
      moreLink: "#",
    },
    {
      backgroundIcon: "",
      title: "Development",
      description:
        "Lorem ipsum felis consectetur adipiscing elit. Nunc condimentum felis vit tellus pretium.",
      moreLink: "#",
    },
    {
      backgroundIcon: "",
      title: "Integration",
      description:
        "Lorem ipsum felis consectetur adipiscing elit. Nunc condimentum felis vit tellus pretium.",
      moreLink: "#",
    },
    {
      backgroundIcon: "",
      title: "Support",
      description:
        "Lorem ipsum felis consectetur adipiscing elit. Nunc condimentum felis vit tellus pretium.",
      moreLink: "#",
    },
  ],
  sliders: [
    {
      title: "Our",
      highlightTitle: "Services",
      breadcrumbsHome: "Home",
      breadcrumbs: 'Our Services',
      homeurl: '/'
    },
  ],
};

Mock.onGet("/api/service").reply((config) => {
  const response = service.service;
  return [200, response];
});

Mock.onGet("/api/service/banner").reply((config) => {
  const response = service.sliders;
  return [200, response];
});
