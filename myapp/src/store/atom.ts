import { atom } from 'recoil';
export const postits = atom({
  key: 'postit',
  default: [
    {
      key: 1,
      title: 'title#1',
      content:
        'desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1desc#1',
      x: 10,
      y: 10,
      color: 'red',
      updatedDate: '2021.07.02.',
    },
    {
      key: 2,
      title: 'title#2',
      content: 'desc#2',
      x: 100,
      y: 100,
      color: 'blue',
      updatedDate: '2021.07.02.',
    },
    {
      key: 3,
      title: 'title#3',
      content: 'desc#3',
      x: 200,
      y: 200,
      color: 'green',
      updatedDate: '2021.07.02.',
    },
  ],
});
