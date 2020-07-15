import React, {useEffect, useState, useContext} from 'react'
import { Context } from "../../store/appContext";

function Graphics() {
    const { actions, store } = useContext(Context);

    useEffect(() => {
        //getUsersList()
        actions.setHeaderTitle('Graficas')
    }, [])
    return (
        <img src="https://www.get-digital-help.com/wp-content/uploads/2018/08/Group-categories-in-a-chart-1.png"  width="100%" height="100%"/>
    )
}

export default Graphics
