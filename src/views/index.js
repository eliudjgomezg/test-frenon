import React, {useContext} from 'react'
import { Context } from "../store/appContext";

const HelloView = () => {
    const {store, actions} = useContext(Context)
    return (
        <div>
            {store.helloView}
        </div>
    )
}

export default HelloView
