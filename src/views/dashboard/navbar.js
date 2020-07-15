import React, { useEffect, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Context } from "../../store/appContext";

const classes = {
    navbarStyles: {
        padding: 20,
        borderRadius: 4,
        margin: '0px 15px',
        backgroundColor: 'white',
        boxShadow: '2px 2px 5px #999',
        maxWidth: 1252
    },
    iconsStyles: {
        float: 'right',
        display: 'inline'

    },
    inLine: {
        display: 'inline'
    },
    nemu: {
        bordeBradius: 4,
        backgroundColor: 'white',
        position: 'fixed',
        zIndex: 20,
        padding: 10,
        right: 15,
        boxShadow: '2px 2px 5px #999',
        padding: '15px 20px',

    },
    p: {
        margin: 0,
        padding: 0,
        fontSize: 'small'
    },
    outClick: {
        width: '100vw',
        height: '100vh',
        top: 0,
        zIndex: 10,
        position: 'fixed'
    },
    link: {
        textDecoration: 'none'
    }

}

function Navbar() {
    const history = useHistory()
    const { actions, store } = useContext(Context);
    const [showMenu, setShowMenu] = useState(false)

    const renderNotifications = () => {
        setShowMenu(!showMenu)
        history.push("/dashboard/notifications")
    }

    return (
        <>
            <div style={classes.navbarStyles}>
                <h2 style={classes.inLine}>{store.headerTitle}</h2>

                <div style={classes.iconsStyles}>
                    <Link to="/dashboard/search" className="mr2em hideItem">
                        <ion-icon name="search-outline" />
                    </Link>
                    <Link to="/dashboard/messages" className="mr2em hideItem">
                        <ion-icon name="mail-unread-outline" />
                    </Link>
                    <a className="mr2em hideItem" href="#"><ion-icon name="settings-outline" /></a>
                    <Link to="/dashboard/graphics" className="mr2em hideItem">
                        <ion-icon name="bar-chart-outline" />
                    </Link>
                    <a className=" showItem" onClick={() => setShowMenu(!showMenu)}><ion-icon name="menu-outline" /></a >
                </div>


            </div >
            {showMenu &&
                <>
                    <div style={classes.outClick}
                        onClick={() => setShowMenu(!showMenu)}
                    />
                    <div style={classes.nemu}>
                        <Link style={classes.link} to="/dashboard/search">
                            <p style={classes.p}>Buscar</p>
                        </Link>
                        <hr />
                        <Link to="/dashboard/messages" style={classes.link}>
                            <p style={classes.p}>Mensajes</p>
                        </Link>
                        <hr />
                        <p style={classes.p}>Configuracion</p>
                        <hr />
                        <Link style={classes.link} to="/dashboard/graphics">
                            <p style={classes.p}>Graficos</p>
                        </Link>
                        <hr />
                        <div onClick={renderNotifications}>
                            <p style={classes.p} >Notificaciones</p>
                        </div>
                    </div>
                </>
            }

        </>
    )
}

export default Navbar
