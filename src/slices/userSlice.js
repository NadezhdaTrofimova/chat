import {createSlice} from '@reduxjs/toolkit'
// import avatar0 from '../image/usersPhoto/icon-user0.png'

export const userSlice = createSlice({
    name: 'usersData',
    initialState: {
        users: [
            {
                id: 0,
                name: 'Tim',
                surname: 'Ivanov',
                email: 'na@gmail.com',
                password: '123',
                // avatar: avatar0
            }
        ],
        newId: 1,
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
        logOutUser: (state) => {
            state.currentUser.id = ''
            state.currentUser.email = ''
            state.currentUser.password = ''
        },
        addUser: (state, action) => {
            state.users.push(
                {
                    id: state.newId,
                    name: action.payload.nameUser,
                    surname: action.payload.surnameUser,
                    email: action.payload.emailUser,
                    password: action.payload.passwordUser
                }
            )
            state.currentUser.id = state.newId
            state.currentUser.email = action.payload.emailUser
            state.currentUser.password = action.payload.passwordUser
            state.newId += 1
        },
    },
})

export const {
    loggedInUser,
    logOutUser,
    addUser
} = userSlice.actions;

export default userSlice.reducer