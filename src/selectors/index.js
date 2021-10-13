import {useSelector} from "react-redux";


const Chats = () => useSelector((state) => state.chats.chatsTitle)
const Messages = () => useSelector((state) => state.chats.messages)
const Users = () => useSelector((state) => state.usersData.users)
const CurrentUser = () => useSelector((state) => state.usersData.currentUser.id)
const CurrentChat = () => useSelector((state) => state.chats.currentChat)


export {
    Chats,
    Messages,
    Users,
    CurrentUser,
    CurrentChat
}