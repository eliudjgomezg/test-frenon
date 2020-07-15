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

export default function Register() {
    const history = useHistory();
    const { actions, store } = useContext(Context);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        sPassword: ''
    })
    const [alert, setAlert] = useState({ duplicatePersonalData: false, passwordDontMatch: false, requiredField: false, userCreated: false })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        setAlert({ ...alert, duplicatePersonalData: false, passwordDontMatch: false, requiredField: false, userCreated: false })
    }

    const submit = async (e) => {
        e.preventDefault()

        if (user.password === user.rPassword) {
             const userToCreate = await post(user, 'post_AppUser')

            if (userToCreate.code === 11000) {
                setAlert({ duplicatePersonalData: true });
            } else {
                if (userToCreate.name === 'ValidationError') {
                    setAlert({ requiredField: true });
                } else {
                    setAlert({ ...alert, duplicatePersonalData: false, passwordDontMatch: false, requiredField: false, userCreated: true });
                    setUser({})
                    setTimeout(() => {
                        setAlert({ familyCreated: false })
                        history.push('/')
                    }, 2500)
                    
                }
            }
        } else {
            setAlert({ ...alert, passwordDontMatch: true });
        }
    }

    return (
        <div style={classes.modal} className='gradient'>
            <div style={classes.modalLayout} >
                <h1 className='textAlign'>Registro</h1>

                <form onSubmit={submit}>
                <p style={{ marginTop: '20px' }}>
                        Nombre
                    </p>
                    <input
                        style={{ width: '100%' }}
                        id="standard-read-only-input"
                        placeholder="Escribe tu usuario"
                        type='text'
                        name='name'
                        value={user.name}
                        onChange={handleChange}
                    />
                    <p style={{ marginTop: '20px' }}>
                        Email
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
                    <p style={{ marginTop: '10px' }}>
                        Repetir contraseña
                    </p>
                    <input
                        style={{ width: '100%' }}
                        id="standard-read-only-input"
                        placeholder="Repite tu contraseña"
                        type='password'
                        name='rPassword'
                        value={user.rPassword}
                        onChange={handleChange}
                    />

                    <div style={{ height: '100px', margin: 0, padding: 0 }}>
                        {alert.duplicatePersonalData &&
                            <div className='loginErrorMessageWide textAlign' style={{ fontSize: 'small' }}>
                                ¡Ya existe un usuario con este correo electronico!
                           </div>
                        }
                        {alert.passwordDontMatch &&
                            <div className='loginErrorMessageWide textAlign' style={{ fontSize: 'small' }}>
                                ¡Ls contraseñas no coinciden!
                           </div>
                        }
                        {alert.requiredField &&
                            <div className='loginErrorMessageWide textAlign' style={{ fontSize: 'small' }}>
                                ¡Todos los campos son requeridos!
                           </div>
                        }
                        {alert.userCreated &&
                            <div className='successMessageWide textAlign' style={{ fontSize: 'small' }}>
                                ¡Usuario creado satisfactoriamente!
                           </div>
                        }
                      
                    </div>
                    <button type='submit' className='fs-sbold cBlack' style={classes.button}>
                        Login
                   </button>
                </form>
                <div className='textAlign'>
                    <Link to="/" className='inlineBlock' style={{ color: 'black' }}>
                        Volver
                    </Link>
                </div>
            </div>
        </div>
    )

}
