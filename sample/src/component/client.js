import {applyMiddleware, createStore} from 'redux';

console.log(createStore);
const reducer = function(){
    if(action.type == "INC"){
        return initialState;
    }
}

const logger = (store) => (next) =>(action) =>{
    console.log("action fired",action);
    next(action);
}

const middleware = applyMiddleware(logger);
const store = createStore(reducer, 0 , middleware);

store.subscribe(()=>{
    console.log("store changed ", store.getState());
});

store.dispatch({type:"INC",payload:1});
store.dispatch({ type: "INC", payload: 1 });
store.dispatch({ type: "INC", payload: 1 });
store.dispatch({ type: "INC", payload: 1 });
store.dispatch({ type: "INC", payload: 1 });
store.dispatch({ type: "INC", payload: 1 });
store.dispatch({ type: "INC", payload: 1 });
store.dispatch({ type: "INC", payload: 1 });

