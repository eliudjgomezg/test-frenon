import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar'
import Drawer from './drawer'
import Home from '../../components/home'
import Calendar from '../../components/calendar'
import Users from '../../components/users'
import Reports from '../../components/reports'
import Graphics from '../../components/graphics'
import Search from '../../components/search'
import Notifications from '../../shared/components/notifications'
import Messages from '../../components/messages'
import DetailedMessage from '../../components/messages/message_detailed'

const classes = {
    root:{
        display: 'flex',
        width: '100%'
    },
    childrenStyles: { 
        margin: '15px 15px', 
        height: 555, 
        padding: 0
    }, 
    dashboardContent: {
        width: '100vw'
    }
}

function Dashboard() {
    return (
        <div style={classes.root}>
           <Drawer />
            <div style={classes.dashboardContent }>
               <Navbar />
                <div style={classes.childrenStyles}>
                    <Switch>
                        <Route path="/dashboard/home" >
                            <Home />
                        </Route>
                        <Route path="/dashboard/calendar" >
                            <Calendar />
                        </Route>
                        <Route path="/dashboard/users" >
                            <Users />
                        </Route>
                        <Route path="/dashboard/reports" >
                            <Reports />
                        </Route>
                        <Route path="/dashboard/graphics" >
                            <Graphics />
                        </Route>
                        <Route path="/dashboard/search" >
                            <Search />
                        </Route>
                        <Route exact path="/dashboard/messages" >
                            <Messages />
                        </Route>
                        <Route path="/dashboard/messages/:id" >
                            <DetailedMessage />
                        </Route>
                        <Route path="/dashboard/notifications" >
                            <Notifications width={'minWidth'} widthValue={280} isHide={false} marginValue={0}/>
                        </Route>
                    </Switch> 
                </div>
            </div>
        </div> 
    )
}

export default Dashboard
