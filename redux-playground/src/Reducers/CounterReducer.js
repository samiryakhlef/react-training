//on créer un INITIAL_STATE on le count à 0
const INITIAL_STATE = {
    count : 0
}

//On créer un fonction avec en paramètre l'INITIAL_STATE et une action
function CounterReducer(state = INITIAL_STATE, action){
    //on return le state
    return state;

}
export default CounterReducer;