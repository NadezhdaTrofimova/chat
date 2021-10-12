import {createSlice} from '@reduxjs/toolkit'
import avatar0 from '../image/usersPhoto/photo-user0.png'
import notIconUser from '../image/pictures/no-avatar.jpg'
import avatar2 from '../image/usersPhoto/photo-user2.jpg'
import avatar3 from '../image/usersPhoto/icon-user0.png'

export const userSlice = createSlice({
    name: 'usersData',
    initialState: {
        users: [
            {
                id: 0,
                name: 'Oleg',
                surname: 'Ivanov',
                email: 'na@gmail.com',
                password: '123',
                avatar: avatar0
            },
            {
                id: 1,
                name: 'Lena',
                surname: 'Petrova',
                email: 'p@gmail.com',
                password: '321',
                avatar: notIconUser
            },
            {
                id: 2,
                name: 'Johny',
                surname: 'Depp',
                email: 'depp@mail.ru',
                password: 'depp',
                avatar: avatar2
            },
            {
                id: 3,
                name: 'igor',
                surname: 'XXX',
                email: 'igor@mail.ru',
                password: '456',
                avatar: avatar3
            },
        ],
        newId: 4,
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
                    password: action.payload.passwordUser,
                    avatar: notIconUser,
                }
            )
            state.currentUser.id = state.newId
            state.currentUser.email = action.payload.emailUser
            state.currentUser.password = action.payload.passwordUser
            state.newId += 1
        },
        recoverPassword: (state, action) => {
            state.users = state.users.map(elem => elem.email === action.payload.emailRecover ? {
                ...elem,
                password: action.payload.passwordRecover
            } : elem)
        },
        changeUserInfo: (state, action) => {
            state.users = state.users.map(elem => elem.id === action.payload.currentUserId ? {
                ...elem,
                name: action.payload.name,
                surname: action.payload.surname,
                email: action.payload.email
            } : elem)
            state.currentUser.email = action.payload.email
        },
    },
})

export const {
    loggedInUser,
    logOutUser,
    addUser,
    recoverPassword,
    changeUserInfo
} = userSlice.actions;

export default userSlice.reducer