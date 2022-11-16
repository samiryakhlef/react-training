//on créer un INITIAL_STATE onl'initialise a 0
const INITIAL_STATE = {
    count : 999
}

//On créer un fonction avec en paramètre l'INITIAL_STATE et une action
function CounterReducer(state = INITIAL_STATE, action){

    switch(action.type){
        case 'INCR':{
            return{
                ...state,
                count: state.count +1
            }
        }

        case 'DECR':{
            return{
                ...state,
                count: state.count -1
            }
        }
    }

    //on return le state
    return state;

}
export default CounterReducer;