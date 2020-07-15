import React from 'react'

function HotelPanel(props) {
    const { hotelList } = props

    return (
        <div className="row flex-dir-r flex-wrap ">
            {hotelList.length > 0 ?
                hotelList.slice(0, 4).map(hotel => {

                    return (
                        <>
                            <div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-2 wMin150 hMin150 m2px mt10 bcWhite"
                                key={hotel.id}
                            >
                                <h2 className="textsize-1 fs-sbold cWhite">{hotel.hotelName} HOTEL</h2>
                                <a href="#" className="btn bcPurple">Reservar</a>
                            </div>
                        </>
                    )
                })
                :
                <p>No hay opciones disponibles</p>
            }
        </div>
    )
}

export default HotelPanel
