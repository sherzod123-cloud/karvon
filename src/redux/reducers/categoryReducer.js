import { createReducer } from '@reduxjs/toolkit';
import { categoryActions } from '../actions';
let initialState = {};
const categoryReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(categoryActions.getCategory.type, (state,action) => {
            return state
        })
        .addCase(categoryActions.setCategory.type, (state,action) => {
            return action.payload
        })
});
// const categotyReducer = (state, action) => {
//     switch(action.type){
//         case categoryActions.getCategory.type:
//             return state;
//         case  categoryActions.setCategory.type:
//             return action.payload;
//     }
// }

export default categoryReducer;