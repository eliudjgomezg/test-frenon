import React, { useContext } from 'react';
import { Context } from "../../store/appContext";

const classes = {
    userInfo: {
        borderRadius: 4,
        flexGrow: 1,
        flexShrink: 1,
        boxShadow: '2px 2px 5px #999',
        padding: '15px 20px',
        marginBottom: 15
    }
}

function UserInfo() {
    const { actions, store } = useContext(Context);

    return (
        <div className="gradient" style={classes.userInfo}>
        <h4 className="textsize-2 fs-regular cWhite">Bienvenido</h4>
        <h2 className="textsize-1 fs-sbold cWhite mt10">{store.userLogged.name}</h2>
        <hr />
        <p className="textsize-3 cWhite mt10">
            is simply dum text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dum text ever since the 1500s, when
        </p>
    </div >
    )
}

export default UserInfo
