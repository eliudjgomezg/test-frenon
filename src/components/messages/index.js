import React, { useEffect, useState, useContext } from 'react'
import {Link} from "react-router-dom"
import { Context } from "../../store/appContext";
import { getOne } from '../../shared/services'

const classes = {
    root: {
        padding: 20,
        borderRadius: 4,
        margin: 0,
        backgroundColor: 'white',
        maxWidth: 1252,
        boxShadow: '2px 2px 5px #999',
        height: 530,
        overflowY: 'auto'
    }
}

function Messages() {
    const { actions, store } = useContext(Context);

    const getMessageList = async () => {
        const resp = await getOne('get_one_report', '5f0f397acf3ab14505a38549')
        actions.setMessageList(resp.reports)
    }

    useEffect(() => {
        getMessageList()
        actions.setHeaderTitle('Mensajes')
    }, [])
    return (
        <div style={classes.root}>
            {
                store.messageList.map(message => {
                    return (
                        <div key={message.id}>
                            <div style={{ display: 'inline-block' }}>
                                <p className='noSpace '><strong>{message.name}</strong></p>
                                <p className='noSpace subtitleItemList'><strong>Asunto: </strong>{message.company}</p>
                                <p className='noSpace subtitleItemList'><strong>Id: </strong>{message.id}</p>
                            </div>

                            <div style={{ alignItems: "center", height: '40px', display: 'flex', float: 'right' }}>
                                <Link to={`/dashboard/messages/${message.id}`}>
                                    <ion-icon name="eye-outline" />
                                </Link>
                            </div>
                            <hr />
                        </div>
                    )
                })

            }
        </div>
    )
}

export default Messages