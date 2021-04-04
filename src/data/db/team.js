import Mock from "../mock";
import Team1 from '../../assets/images/team_img_1.png'

const team = {
  teamdata: [
    {
      name: 'John Deo',
      position: 'Co-Founder',
      image: Team1,
      about: "Lorem Ipsum is simply dummy  of the printing & typesetting industry. Lorem Ipsum has been the industry's standard text ever.",
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      googlePlus: '#'
    },
    {
      name: 'John Deo',
      position: 'Co-Founder',
      image: Team1,
      about: "Lorem Ipsum is simply dummy  of the printing & typesetting industry. Lorem Ipsum has been the industry's standard text ever.",
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      googlePlus: '#'
    },
    {
      name: 'John Deo',
      position: 'Co-Founder',
      image: Team1,
      about: "Lorem Ipsum is simply dummy  of the printing & typesetting industry. Lorem Ipsum has been the industry's standard text ever.",
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      googlePlus: '#'
    },
    {
      name: 'John Deo',
      position: 'Co-Founder',
      image: Team1,
      about: "Lorem Ipsum is simply dummy  of the printing & typesetting industry. Lorem Ipsum has been the industry's standard text ever.",
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      googlePlus: '#'
    },
    {
      name: 'John Deo',
      position: 'Co-Founder',
      image: Team1,
      about: "Lorem Ipsum is simply dummy  of the printing & typesetting industry. Lorem Ipsum has been the industry's standard text ever.",
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      googlePlus: '#'
    },
    {
      name: 'John Deo',
      position: 'Co-Founder',
      image: Team1,
      about: "Lorem Ipsum is simply dummy  of the printing & typesetting industry. Lorem Ipsum has been the industry's standard text ever.",
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      googlePlus: '#'
    },
    {
      name: 'John Deo',
      position: 'Co-Founder',
      image: Team1,
      about: "Lorem Ipsum is simply dummy  of the printing & typesetting industry. Lorem Ipsum has been the industry's standard text ever.",
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      googlePlus: '#'
    },
    {
      name: 'John Deo',
      position: 'Co-Founder',
      image: Team1,
      about: "Lorem Ipsum is simply dummy  of the printing & typesetting industry. Lorem Ipsum has been the industry's standard text ever.",
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      googlePlus: '#'
    },
  ],
  sliders: [
    {
      title: "Creative",
      highlightTitle: "Team",
      breadcrumbsHome: "Home",
      breadcrumbs: "Team",
      homeurl: "/",
    },
  ],
};

Mock.onGet("/api/team").reply((config) => {
  const response = team.teamdata;
  return [200, response];
});

Mock.onGet("/api/team/banner").reply((config) => {
  const response = team.sliders;
  return [200, response];
});
