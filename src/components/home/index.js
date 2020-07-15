import React, {useEffect, useState, useContext} from 'react'
import { Context } from "../../store/appContext";
import Notifications from '../../shared/components/notifications'
import UserInfo from './user_info'
import IconPanel from './icon_panel'
import HotelPanel from './hotel_panel'
import {getOne} from '../../shared/services'

const classes = {
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    welcomePanel: {
        flexDirection: 'column',
        height: 550,
        overflowY: 'auto',
        overflowX: 'hidden'
    }
}

function Home() {
    const { actions, store } = useContext(Context);
    const [hotelList, setHotelList] = useState([])

    const getHotelList = async () => {
        const resp = await getOne('get_one_hotel', '5f0f2ec695b8613909079b5e')
        setHotelList(resp.hotels)
    }

    useEffect(() => {
        getHotelList()
        actions.setHeaderTitle('Dashboard')
    }, [])
    return (
        <div style={classes.root}>
            <div style={classes.welcomePanel}>
                <UserInfo />
                <IconPanel />
                <HotelPanel hotelList={hotelList}/>
            </div>
            <Notifications width={'width'} widthValue={280} isHide={true} marginValue={10}/>
        </div>

    )
}

export default Home
