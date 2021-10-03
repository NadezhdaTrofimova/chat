import React from "react";
import Header from "../../components/header/Header";
import iconSettings from '../../image/headerIcons/icon-settings.png'
import iconUser from '../../image/headerIcons/icon-user1.png'

const MessagesPage = () => {

    return (
        <>
            <Header
                iconUser={iconUser}
                iconVariable={iconSettings}
                title='Настройки'
            />
        </>
    )
}

export default MessagesPage