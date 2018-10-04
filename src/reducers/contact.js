import data from '../data/contactList.json';

const initialState={
    name:[],
    data:data
  }

const  contactReducer = (state=initialState,action)=>{
    switch(action.type){
      case 'FETCH_NAMES':
      console.log('in fetch_names')
      const personName = [];
      data.map(person => personName.push(person.name));
      return{
        ...state,
        name:personName
      }
      case 'DELETE':
      console.log('in delet')
      return state;
      default:
      console.log('in default')
      return state;
    }
}

export default  contactReducer;