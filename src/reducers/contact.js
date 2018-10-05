import data from '../data/contactList.json';

const initialState = {
  name: [],
  data: data,
  current_user:'',
};

const contactReducer = (state = initialState, action) => {
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
        return{
            ...state,
            name: newData
        }
        case 'ADD_CONTACT':
        return{
          ...state,
          name: state.name.concat(action.payload.name),
          data: state.data.concat(action.payload.data)
        }
        case 'CONTACT_DETAILS':
        let particularName;
        let home;
        let mobile;
        let birthday;
        state.data.map(persons=>{
          if(persons.name===action.payload){
              particularName=persons.name;
              home=persons.numbers.home;
              mobile=persons.numbers.mobile;
              birthday=persons.birthday;
          }
          return null;
        });
        return{
          ...state,
          peerssonName:particularName,
          home:home,
          mobile:mobile,
          birthday:birthday
        }
        case 'EDIT_CONTACT':
        let temp = state.data.map(persons=>{
          if(persons.name===action.payload[1]){
              persons.name=action.payload[0].name;
              persons.numbers.home=action.payload[0].numbers.home;
              persons.numbers.mobile=action.payload[0].numbers.mobile;
              persons.birthday=action.payload[0].numbers.birthday;
          }
          return persons;
        });
        console.log(temp);
        return{
          ...state,
          data:temp
        }
    default:
      return state;
  }
};

export default contactReducer;
