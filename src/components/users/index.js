import React, {useEffect, useState, useContext} from 'react'
import { Context } from "../../store/appContext";
import {getOne} from '../../shared/services'

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

function Users() {
    const { actions, store } = useContext(Context);
    const [userList, setUserList] = useState([])

    const handleInfo = (user, index) => {
        const showInfo = userList.map(item => item.id === user.id? {...item, showInfo: !item.showInfo} : item)
        setUserList(showInfo)
    }

    const getUsersList = async () => {
        const resp = await getOne('get_one_user', '5f0f36affd740045d9b2ce2e')
        setUserList(resp.users)
    }

    useEffect(() => {
        getUsersList()
        actions.setHeaderTitle('Usuarios')
    }, [])
    return (
        <div style={classes.root}>
            {userList.length > 0 ?
                userList.map((user, index) => {
                    return (
                            <div key={user.id}>
                                <div style={{ display: 'inline-block' }}>
                                    <p className='noSpace '><strong>{user.name}</strong></p>
                                    <p className='noSpace subtitleItemList'><strong>Empresa: </strong>{user.job}</p>
                                </div>

                                <div style={{ alignItems: "center", height: '40px', display: 'flex', float: 'right' }}>
                                    <ion-icon name="chevron-down-outline" onClick={() => handleInfo(user, index)} />
                                </div>

                                {user.showInfo &&
                                    <div className='mt10' >
                                        <p className='noSpace smallfont'><strong>Nickname: </strong>{user.nickname}</p>
                                        <p className='noSpace smallfont'><strong>Direccion: </strong>{user.address}</p>
                                        <p className='noSpace smallfont'><strong>Email: </strong>{user.email}</p>
                                        <p className='noSpace smallfont'><strong>Telefono: </strong>{user.phone}</p>
                                    </div>
                                }
                                <hr />
                            </div>
                    )
                })
                :
                <p>No hay usuarios disponibles</p>
            }
        </div>
    )
}

export default Users
