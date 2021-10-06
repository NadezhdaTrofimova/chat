import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'loggedInUser',
    initialState: {
        value: '',
    },
    reducers: {
        signIn: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const {
    addLoggedInUser
} = userSlice.actions;

export default userSlice.reducer