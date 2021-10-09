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
            // const {name, surname, email, password} = action.payload
            // state.users.push(action.payload)
            state.users.push(
                {
                    id: state.users.length,
                    name: action.payload.nameUser,
                    surname: action.payload.surnameUser,
                    email: action.payload.emailUser,
                    password: action.payload.passwordUser
                }
            )
        }
    },
})

export const {
    loggedInUser,
    logOutUser,
    addUser
} = userSlice.actions;

export default userSlice.reducer