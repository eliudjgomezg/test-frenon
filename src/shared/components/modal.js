import React from 'react'
import { withRouter } from 'react-router-dom'

const classes = {
    modal: {
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        zIndex: 10,
        position: 'fixed',
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    modalLayout: {
        backgroundColor: 'white',
        borderRadius: 10,
        position: 'fixed',
        maxWidth: 800,
        padding: '0px 15px'
    },
    modalContent: {
        maxHeight: 400,
        overflowY: 'auto'
    },
    button: {
        float: 'right',
        marginRight: 20,
        background: 'none',
        color: 'inherit',
        border: 'none',
        padding: 0,
        font: 'inherit',
        cursor: 'pointer',
        outline: 'inherit'
    }
}
function Modal(props) {
    const { children, open, header, actionButton, action } = props
    return (
        <>
            {open &&
                <div style={classes.modal} onClick={action}>
                    <div style={classes.modalLayout}>
                        <h1 style={{}}><strong>{header}</strong></h1>
                        <hr />

                        <div style={classes.modalContent}>
                            {children}
                        </div>

                        <div style={classes.actions}>
                            <hr />
                            <button style={classes.button} onClick={action}>
                                <h4 >{actionButton}</h4>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal
