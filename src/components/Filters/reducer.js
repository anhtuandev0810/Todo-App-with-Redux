const initState = {
        search: '',
        status: 'All',
        priority: []
};    

const filtersReducer = (state = initState, action) => {
    // console.log(state, action);
    switch(action.type) {
        
        case 'filters/searchFilter':
            return {
                ...state,
                search: action.payload  
            };
        case 'filters/statusChange':
            return {
                ...state,
                status: action.payload
            }
        case 'filters/priorityChange':
            return {
                ...state,
                priority: action.payload
            }
        default:
            return state;
    }
};

export default filtersReducer;