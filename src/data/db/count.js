import Mock from "../mock";

const count = {
  countdata: [
    {
     dataCount: 459,
     name: 'Projects',
     start: 0,      
     active: '',
    },
    {
      dataCount: 241,
      name: 'Clients',
      start: 0,   
      active: '',   
     },
     {
      dataCount: 56,
      name: 'Countries',
      start: 0,
      active: 'active-num',
     },
     {
      dataCount: 15,
      name: 'Team',
      start: 0,    
      active: '',  
     },
  ]
};

Mock.onGet("/api/count").reply((config) => {
  const response = count.countdata;
  return [200, response];
});
