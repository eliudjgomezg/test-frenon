import React, {useEffect, useState, useContext} from 'react'
import { Context } from "../../store/appContext";
import {getOne} from '../services'

function Notifications(props) {
    const { marginValue, width, widthValue, isHide } = props
    const classes = {
        notifications: {
            padding: 10,
            height: 550,
            [width]: widthValue,
            backgroundColor: 'white',
            borderRadius: 4,
            overflowY: 'auto',
            overflowX: 'hidden',
            marginLeft: marginValue
        }
    }
    const { actions, store } = useContext(Context);
    const [notificationsList, setSotificationsList] = useState([])

    const getNotificationsList = async () => {
        const resp = await getOne('get_one_notification', '5f0f34a7260cc0119d937d26')
        setSotificationsList(resp.notifications)
    }

    useEffect(() => {
        getNotificationsList()
    }, [])
    
    const formatDate = (dateToFormat) => {
        
        const date = new Date(dateToFormat);
        const month = date.getMonth()
        const day = dateToFormat.substr(dateToFormat.length - 2)

        switch (month) {
            case 0:
                return `${day} Enero`
            case 1:
                return `${day} Febrero`
            case 2:
                return `${day} Marzo`
            case 3:
                return `${day} Abril`
            case 4:
                return `${day} Mayo`
            case 5:
                return `${day} Junio`
            case 6:
                return `${day} Julio`
            case 7:
                return `${day} Agosto`
            case 8:
                return `${day} Septiembre`
            case 9:
                return `${day} Octubre`
            case 10:
                return `${day} Noviembre`
            default:
                return `${day} Diciembre`
        }
    }
    return (
        <div className= {isHide? 'hideItem' : ''} style={classes.notifications} id='notifications'>
            <h2 className=" textsize fs-sbold cBlack">Notificaciones</h2>

            {notificationsList.length > 0 ?
                notificationsList.map(notification => {
                    return (
                        <div className="notification mb30 mt10" key={notification.id}>
                            <div className="notif-left flex-display flexa-jcsb">
                                <ion-icon className="icoGray" name="mail-open-outline"></ion-icon>
                                <h4 className="textsize-3">{formatDate(notification.date)}</h4>
                            </div>
                            <div className="notif-right">
                                <h4 className="mt4 textsize-2 fs-regular cBlue">{notification.name}</h4>
                                <p className="mt4 textsize-3 cGray">{notification.message}</p>
                            </div>
                        </div>
                    )
                })
                :
                <p>No hay notificaciones disponibles</p>
            }
        </div>
    )
}

export default Notifications
