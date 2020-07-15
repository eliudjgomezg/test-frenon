import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from "../../store/appContext"
import { useParams } from "react-router-dom"
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

function DetailedMessage() {
    const { id } = useParams()  
    const history = useHistory()
    const { actions, store } = useContext(Context);
    const [message, setMessage] = useState({})

    const getMessageList = async () => {
        const resp = await getOne('get_one_report', '5f0f397acf3ab14505a38549')
        setMessage(resp.reports.find(message => Number(message.id) === Number(id)))
    }

    useEffect(() => {
        getMessageList()
    }, [])
    return (
        <div style={classes.root}>
            <p className=' noSpace'><strong>Para: </strong>{message.name}</p>
            <p className=' noSpace'><strong>De: </strong>{message.departament}</p>
            <p className=' noSpace'><strong>Asunto: </strong>{message.company}</p>
            <hr />
            <h3><strong>Mensaje:</strong></h3>
            <p>{message.reportContent}</p>
        </div>
    )
}

export default DetailedMessage
