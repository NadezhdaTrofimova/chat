import React from "react";
import Header from "../../components/header/Header";
import iconSave from '../../image/headerIcons/icon-save.png';
import iconUser from '../../image/usersPhoto/icon-user2.png'

const SettingsPage = () => {

    return (
        <>
            <Header
                iconUser={iconUser}
                iconVariable={iconSave}
                title='Сохранить'
            />
        </>
    )
}

export default SettingsPage