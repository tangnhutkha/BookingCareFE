import actionTypes from '../actions/actionTypes';


const initialState = {
    genders: [],
    roles: [],
    position: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            state.genders = []
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.position = action.data
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_FAILED:
            state.position = []
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_FAILED:
            state.roles = []
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default adminReducer;