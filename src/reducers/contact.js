import data from '../data/contactList.json';

const initialState = {
  name: [],
  data: data
};

const contactReducer = (state = initialState, action) => {
    console.log(action.type);
  switch (action.type) {
    case 'FETCH_NAMES':
      const personName = [];
      data.map(person => personName.push(person.name));
      return {
        ...state,
        name: personName
      };
    case 'DELETE_NAME':
      let newData = state.name.filter(name=>{
        return action.payload !== name
      })
      console.log(newData, 'new data')
        return{
            ...state,
            name: newData
        }
    default:
      return state;
  }
};

export default contactReducer;
