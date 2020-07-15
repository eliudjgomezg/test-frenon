import React from 'react'

const classes = {
    icons: {
        color: '#6851d8',
        fontSize: '2.5em',
    },
    h4: {
        padding: 0,
        margin: '5px 5px ',
        fontSize: '.8em',
        fontWeight: 400,
        fontStyle: 'normal'
    }
}

function IconPanel() {
    return (
        <div className="row flex-dir-r card flex-wrap bcWhite   flex-display flex-dir-r  p10  mt10 bcWhite flexa-jcsb">
            <div className="bloque bl  flex-display flex-dir-r">
                <ion-icon style={classes.icons} name="mail-open-outline"></ion-icon>

                <div className="notif-right">
                    <h4 style={classes.h4}>Notificaciones</h4>
                    <h4 style={classes.h4}>is simply dum </h4>
                </div>
            </div>
            <div className="bloque bl  flex-display flex-dir-r">
                <ion-icon style={classes.icons} name="bed-outline"></ion-icon>

                <div className="notif-right">
                    <h4 style={classes.h4}>Hoteles</h4>
                    <h4 style={classes.h4}>is simply dum </h4>
                </div>
            </div>
            <div className="bloque bl  flex-display flex-dir-r">
                <ion-icon style={classes.icons} name="card-outline"></ion-icon>

                <div className="notif-right">
                    <h4 style={classes.h4}>Pagos recibidos</h4>
                    <h4 style={classes.h4}>is simply dum </h4>
                </div>
            </div>
        </div>
    )
}

export default IconPanel
