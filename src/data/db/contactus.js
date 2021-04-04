import Mock from "../mock";

const contactus = {
  information: {
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/empty.pdf'
  },
  contactInfo: {
    phoneNumbers: ['+91 7203031893', '+91 7203031893'],
    emailAddress: ['sagarramoliya93@gmail.com', 'sagarramoliya93@gmail.com'],
    address: "150 feet Road, Rajkot, Gujrat, India"
  },
  sliders: [
    {
      title: "Our",
      highlightTitle: "Contact",
      breadcrumbsHome: "Home",
      breadcrumbs: 'Our Contact',
      homeurl: '/'
    },
  ],
}


Mock.onGet("/api/contactinfo").reply(config => {
  const response = contactus.contactInfo;
  return [200, response];
});

Mock.onGet("/api/contact/banner").reply(config => {
  const response = contactus.sliders;
  return [200, response];
});

