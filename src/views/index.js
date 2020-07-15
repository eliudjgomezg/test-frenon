import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { post } from '../shared/services'


const classes = {
    modal: {
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    modalLayout: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: 300,
        height: 600,
        padding: '0px 15px'
    },
    modalContent: {
        maxHeight: 400,
        overflowY: 'auto'
    },
    button: {
        background: ' #6851d8',
        color: 'white',
        border: 'none',
        borderRadius: 15,
        padding: 5,
        width: 122,
        height: 32,
        cursor: 'pointer',
        margin: '0px 90px 30px 90px',
        display: 'inline-block',
        alignItems: 'center',

    }
}

export default function Login() {
    const history = useHistory();
    const { actions, store } = useContext(Context);
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [alert, setAlert] = useState({ userNotFound: false, userDisabled: false, wrongSchedule: false, noClassroom: false })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        setAlert({ ...alert, userNotFound: false, userDisabled: false, wrongSchedule: false, noClassroom: false })
    }

    const submit = async (e) => {
        e.preventDefault()
        const userToLogin = await post(user, 'post_loginAppUser')

        if (userToLogin) {
            setAlert({ ...alert, userNotFound: false });
            actions.setUserLogged(userToLogin)
            history.push('/dashboard/home')
        } else {
            setAlert({ ...alert, userNotFound: true });
        }
    }

    return (
        <div style={classes.modal} className='gradient'>
            <div style={classes.modalLayout} >
                <h1 className='textAlign'>login</h1>

                <form onSubmit={submit}>
                    <p style={{ marginTop: '20px' }}>
                        Usuario
                    </p>
                    <input
                        style={{ width: '100%' }}
                        id="standard-read-only-input"
                        placeholder="Escribe tu usuario"
                        type='text'
                        name='email'
                        value={user.email}
                        onChange={handleChange}
                    />
                    <p style={{ marginTop: '10px' }}>
                        Contraseña
                    </p>
                    <input
                        style={{ width: '100%' }}
                        id="standard-read-only-input"
                        placeholder="Escribe tu contraseña"
                        type='password'
                        name='password'
                        value={user.password}
                        onChange={handleChange}
                    />

                    <div style={{ height: '100px', margin: 0, padding: 0 }}>
                        {alert.userNotFound &&
                            <div className='loginErrorMessageWide alingCenter' style={{ fontSize: 'small' }}>
                                Este usuario no esta registrado en nuestra base de datos
                               </div>
                        }
                    </div>
                    <button type='submit' className='fs-sbold cBlack' style={classes.button}>
                        Login
                   </button>
                </form>
                <div className='textAlign'>
                    <Link to="/register" className='inlineBlock' style={{ color: 'black' }}>
                        Registro
                    </Link>
                </div>
            </div>
        </div>
    )

}
