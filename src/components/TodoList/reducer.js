const initState = [
  { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
  { id: 2, name: "Learn Javascript", completed: true, priority: "High" },
  { id: 3, name: "Learn React", completed: true, priority: "Low" },
];

const todoListReducer = (state = initState, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "todoList/addTodo":
      return [
          ...state,
          action.payload
      ];
    case 'todoList/toggleStatus':
      return state.map(todo => 
        todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
      );
    default:
      return state;
  }
};

export default todoListReducer;
