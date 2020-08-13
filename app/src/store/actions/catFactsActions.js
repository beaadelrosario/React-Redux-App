import axios from "axios"

export const FETCH_CAT_FACTS_START = "FETCH_CAT_FACTS_START";
export const FETCH_CAT_FACTS_SUCCESS = "FETCH_CAT_FACTS_SUCCESS";
export const FETCH_CAT_FACTS_FAIL = "FETCH_CAT_FACTS_FAIL";

export const fetchCatFacts = () => (dispatch) => {
    dispatch({type: FETCH_CAT_FACTS_START});
    axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=15')
    .then((res) => dispatch ({ type: FETCH_CAT_FACTS_SUCCESS, payload:res.data}))
    .catch((error) => dispatch ({ type: FETCH_CAT_FACTS_FAIL}))
};


const thunk = (store) => (next) => (action) => {
    if (typeof action === "object") {
        next(action)
    } else if (typeof action === "function") {
        action(store.dispatch)
    }
};