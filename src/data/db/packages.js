import Mock from "../mock";

const packages = {
  packagesdata: [
    {
      title: "Bronze",
      price: "$99",
      duration: "/month",
      packageList: [
        {
          title: "5GB Cloud",
          highlight: "storage",
          check: true,
        },
        {
          title: "40GB Bendwith",
          highlight: "",
          check: true,
        },
        {
          title: "1 SQL Database",
          highlight: "",
          check: true,
        },
        {
          title: "5 Email Account",
          highlight: "",
          check: true,
        },
        {
          title: "Free",
          highlight: "Domain",
          check: true,
        },
        {
          title: "5GB Cloud",
          highlight: "",
          check: true,
        },
        {
          title: "24/7 Support",
          highlight: "",
          check: true,
        },
      ],
      PurchaseUrl: "#",
    },
    {
      title: "Silver",
      price: "$125",
      duration: "/month",
      packageList: [
        {
          title: "5GB Cloud",
          highlight: "storage",
          check: true,
        },
        {
          title: "40GB Bendwith",
          highlight: "",
          check: true,
        },
        {
          title: "1 SQL Database",
          highlight: "",
          check: true,
        },
        {
          title: "5 Email",
          highlight: "Account",
          check: true,
        },
        {
          title: "Free Domain",
          highlight: "",
          check: true,
        },
        {
          title: "5GB Cloud",
          highlight: "",
          check: true,
        },
        {
          title: "24/7 Support",
          highlight: "",
          check: true,
        },
      ],
      PurchaseUrl: "#",
    },
    {
      title: "Gold",
      price: "$150",
      duration: "/month",
      packageList: [
        {
          title: "5GB Cloud",
          highlight: "storage",
          check: true,
        },
        {
          title: "40GB",
          highlight: "Bendwith",
          check: true,
        },
        {
          title: "1 SQL Database",
          highlight: "",
          check: true,
        },
        {
          title: "5 Email Account",
          highlight: "",
          check: true,
        },
        {
          title: "Free Domain",
          highlight: "",
          check: true,
        },
        {
          title: "5GB Cloud",
          highlight: "",
          check: true,
        },
        {
          title: "24/7 Support",
          highlight: "",
          check: true,
        },
      ],
      PurchaseUrl: "#",
    },
    {
      title: "Platinium",
      price: "$175",
      duration: "/month",
      packageList: [
        {
          title: "5GB Cloud",
          highlight: "storage",
          check: true,
        },
        {
          title: "40GB Bendwith",
          highlight: "",
          check: true,
        },
        {
          title: "1 SQL",
          highlight: "Database",
          check: true,
        },
        {
          title: "5 Email Account",
          highlight: "",
          check: true,
        },
        {
          title: "Free Domain",
          highlight: "",
          check: true,
        },
        {
          title: "5GB Cloud",
          highlight: "",
          check: true,
        },
        {
          title: "24/7 Support",
          highlight: "",
          check: true,
        },
      ],
      PurchaseUrl: "#",
    },
    {
      title: "Free",
      price: "$00",
      duration: "/month",
      packageList: [
        {
          title: "5GB Cloud",
          highlight: "storage",
          check: true,
        },
        {
          title: "40GB Bendwith",
          highlight: "",
          check: true,
        },
        {
          title: "1 SQL Database",
          highlight: "",
          check: true,
        },
        {
          title: "5 Email Account",
          highlight: "",
          check: true,
        },
        {
          title: "Free",
          highlight: "Domain",
          check: true,
        },
        {
          title: "5GB Cloud",
          highlight: "",
          check: true,
        },
        {
          title: "24/7 Support",
          highlight: "",
          check: true,
        },
      ],
      PurchaseUrl: "#",
    },
  ],
  sliders: [
    {
      title: "Our",
      highlightTitle: "Packages",
      breadcrumbsHome: "Home",
      breadcrumbs: "Pricing",
      homeurl: "/",
    },
  ],
  pricing: [
    {
      title: "Bronze",
      price: "$99",
      duration: "/month",
      packageList: [
        {
          title: "5GB Cloud",
          highlight: "storage",
          check: true,
        },
        {
          title: "40GB Bendwith",
          highlight: "",
          check: true,
        },
        {
          title: "1 SQL Database",
          highlight: "",
          check: true,
        },
        {
          title: "5 Email Account",
          highlight: "",
          check: true,
        },
        {
          title: "Free",
          highlight: "Domain",
          check: true,
        },
        {
          title: "5GB Cloud",
          highlight: "",
          check: true,
        },
        {
          title: "24/7 Support",
          highlight: "",
          check: true,
        },
      ],
      PurchaseUrl: "#",
    },
    {
      title: "Silver",
      price: "$125",
      duration: "/month",
      packageList: [
        {
          title: "5GB Cloud",
          highlight: "storage",
          check: true,
        },
        {
          title: "40GB Bendwith",
          highlight: "",
          check: true,
        },
        {
          title: "1 SQL Database",
          highlight: "",
          check: true,
        },
        {
          title: "5 Email",
          highlight: "Account",
          check: true,
        },
        {
          title: "Free Domain",
          highlight: "",
          check: true,
        },
        {
          title: "5GB Cloud",
          highlight: "",
          check: true,
        },
        {
          title: "24/7 Support",
          highlight: "",
          check: true,
        },
      ],
      PurchaseUrl: "#",
    },
    {
      title: "Gold",
      price: "$150",
      duration: "/month",
      packageList: [
        {
          title: "5GB Cloud",
          highlight: "storage",
          check: true,
        },
        {
          title: "40GB",
          highlight: "Bendwith",
          check: true,
        },
        {
          title: "1 SQL Database",
          highlight: "",
          check: true,
        },
        {
          title: "5 Email Account",
          highlight: "",
          check: true,
        },
        {
          title: "Free Domain",
          highlight: "",
          check: true,
        },
        {
          title: "5GB Cloud",
          highlight: "",
          check: true,
        },
        {
          title: "24/7 Support",
          highlight: "",
          check: true,
        },
      ],
      PurchaseUrl: "#",
    },
  
  ],
};

Mock.onGet("/api/packages").reply((config) => {
  const response = packages.packagesdata;
  return [200, response];
});

Mock.onGet("/api/pricing").reply((config) => {
  const response = packages.pricing;
  return [200, response];
});

Mock.onGet("/api/packages/banner").reply((config) => {
  const response = packages.sliders;
  return [200, response];
});
