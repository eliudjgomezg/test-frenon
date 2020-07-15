import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../../store/appContext";
import { getOne } from '../../shared/services'
import Modal from '../../shared/components/modal'

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
    },
    button: {
        background: ' #6851d8',
        color: 'white',
        border: 'none',
        borderRadius: 15,
        padding: 5,
        width: 122,
        height: 32,
        cursor: 'pointer'
    }
}

function Search() {
    const { actions, store } = useContext(Context);
    const [hotelList, setHotelList] = useState([])
    const [reserveData, setReserveData] = useState({})
    const [toggleModal, setToggleModal] = useState(false)

    const handleReserve = (hotel) => {
        setReserveData(hotel)
        setToggleModal(!toggleModal)
    }

    const getHotelList = async () => {
        const resp = await getOne('get_one_hotel', '5f0f2ec695b8613909079b5e')
        setHotelList(resp.hotels)
    }

    useEffect(() => {
        getHotelList()
        actions.setHeaderTitle('Busqueda')
    }, [])
    return (
        <div style={classes.root}>
            <div className="row flex-dir-r flex-wrap ">
                {hotelList.length > 0 ?
                    hotelList.map(hotel => {

                        return (
                            <>
                                <div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-2 wMin150 hMin150 m2px mt10 bcWhite"
                                    key={hotel.id}
                                >
                                    <h2 className="textsize-1 fs-sbold cWhite">{hotel.hotelName} HOTEL</h2>
                                    <button className='fs-sbold cBlack' style={classes.button} onClick={() => handleReserve(hotel)}>
                                        Reservar
                                    </button>
                                </div>
                            </>
                        )
                    })
                    :
                    <p>No hay opciones disponibles</p>
                }
            </div>
            <Modal open={toggleModal} header={'Hotel'} action={() => { setToggleModal(!toggleModal) }} actionButton={'Reservar'}>
                <h3 className='textAlign'><strong>{reserveData.hotelName} Hotel</strong></h3>

                <p className='noSpace'><strong>Contactanos:</strong></p>
                <p className='noSpace subtitleColor'>Direccion: {reserveData.address}</p>
                <p className='noSpace subtitleColor'>Telefono: {reserveData.phone}</p>
                <p className='noSpace subtitleColor'>Telefono: {reserveData.email}</p>
            </Modal>
        </div>
    )
}

export default Search