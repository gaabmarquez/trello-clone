const initialState = [
  {
    id: 0,
    title: 'To Do',
    cards: [
      {
        id: 0,
        text: 'Finish clone trello project!'
      },
      {
        id: 2,
        text: 'Finish clone trello project! ASAP'
      }
    ]
  },

  {
    id: 1,
    title: 'Doing',
    cards: [
      {
        id: 0,
        text: 'Crushing it!'
      }
    ]
  },
  {
    id: 2,
    title: 'Done',
    cards: [
      {
        id: 0,
        text: 'Be a legend'
      },
      {
        id: 2,
        text: '100% humble'
      }
    ]
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listReducer;
