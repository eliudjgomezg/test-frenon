import React from 'react'
import { Link } from 'react-router-dom';

const classes = {
    whiteColor: {
        color: 'white'
    },
    navWidth: {
        minWidth: 45,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap', 
        backgroundColor: '#6851d8',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}

function Drawer() {
    return (
        <nav style={classes.navWidth}>
            <div className="panel">
                <Link className="mt10 mb30 h50px" to="/dashboard/home">
                    <ion-icon style={classes.whiteColor} name="fitness-outline" />
                </Link>
                <Link className="mt30" to="/dashboard/calendar">
                    <ion-icon style={classes.whiteColor} name="calendar-outline" />
                </Link>
                <Link className="mt30" to="/dashboard/users" >
                    <ion-icon style={classes.whiteColor} name="person-outline" />
                </Link>
                <Link className="mt30" to="/dashboard/reports" >
                    <ion-icon style={classes.whiteColor} name="document-text-outline" />
                </Link>
                <Link className="mt30" to="/dashboard/graphics">
                    <ion-icon style={classes.whiteColor} name="bar-chart-outline" />
                </Link>
            </div >
            <Link className="mb10" to="/">
                <ion-icon style={classes.whiteColor} name="exit-outline" />
            </Link>
        </nav >
    )
}

export default Drawer   