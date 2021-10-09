import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'usersData',
    initialState: {
        users: [
            {
                id: 1,
                name: 'Tim',
                surname: 'Ivanov',
                email: 'na@gmail.com',
                password: '123'
            }
        ],
        currentUser: {
            id: '',
            email: '',
            password: ''
        },
    },
    reducers: {
        loggedInUser: (state, action) => {
            const {id, email, password} = action.payload
            state.currentUser.id = id
            state.currentUser.email = email
            state.currentUser.password = password
        },
        logOutUser: (state, action) => {
            state.currentUser.id = ''
            state.currentUser.email = ''
            state.currentUser.password = ''
        }
    },
})

export const {
    loggedInUser,
    logOutUser
} = userSlice.actions;

export default userSlice.reducer