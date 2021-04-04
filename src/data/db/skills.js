import Mock from "../mock";

const skills = {
  skillsdata: [
    {
      progress: '100',
      progressType: '',
      type: 'Photoshop',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ever since.'
    },
    {
      progress: '90',
      progressType: '',
      type: 'HTML',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ever since.'
    },
    {
      progress: '80',
      progressType: 'blue ',
      type: 'PHP',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ever since.'
    },
    {
      progress: '50',
      progressType: '',
      type: 'Javascript',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ever since.'
    }
  ]
};

Mock.onGet("/api/skills").reply((config) => {
  const response = skills.skillsdata;
  return [200, response];
});
