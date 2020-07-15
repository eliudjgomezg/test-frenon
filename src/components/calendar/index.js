import React, {useEffect, useState, useContext} from 'react'
import { Context } from "../../store/appContext";

import './calendar.css'

function Calendar() {
    const { actions, store } = useContext(Context);

    useEffect(() => {
        //getNotificationsList()
        //getHotelList()
        actions.setHeaderTitle('Calendario')
    }, [])
    return (
       <>
            <div className="toolbar">
                <p className="current-month">Julio 2020 </p>
            </div>
            <div className="calendar">
                <div className="calendar__header">
                    <div>Lun</div>
                    <div>Mar</div>
                    <div>Mie</div>
                    <div>Jue</div>
                    <div>Vie</div>
                    <div>Sab</div>
                    <div>Dom</div>
                </div>
                <div className="calendar__week">
                    <div className="calendar__day day">1</div>
                    <div className="calendar__day day">2</div>
                    <div className="calendar__day day">3</div>
                    <div className="calendar__day day">4</div>
                    <div className="calendar__day day">5</div>
                    <div className="calendar__day day">6</div>
                    <div className="calendar__day day">7</div>
                </div>
                <div className="calendar__week">
                    <div className="calendar__day day">8</div>
                    <div className="calendar__day day">9</div>
                    <div className="calendar__day day">10</div>
                    <div className="calendar__day day">11</div>
                    <div className="calendar__day day">12</div>
                    <div className="calendar__day day">13</div>
                    <div className="calendar__day day">14</div>
                </div>
                <div className="calendar__week">
                    <div className="calendar__day day">15</div>
                    <div className="calendar__day day">16</div>
                    <div className="calendar__day day">17</div>
                    <div className="calendar__day day">18</div>
                    <div className="calendar__day day">19</div>
                    <div className="calendar__day day">20</div>
                    <div className="calendar__day day">21</div>
                </div>
                <div className="calendar__week">
                    <div className="calendar__day day">22</div>
                    <div className="calendar__day day">23</div>
                    <div className="calendar__day day">24</div>
                    <div className="calendar__day day">25</div>
                    <div className="calendar__day day">26</div>
                    <div className="calendar__day day">27</div>
                    <div className="calendar__day day">28</div>
                </div>
                <div className="calendar__week">
                    <div className="calendar__day day">29</div>
                    <div className="calendar__day day">30</div>
                    <div className="calendar__day day">31</div>
                    <div className="calendar__day day">1</div>
                    <div className="calendar__day day">2</div>
                    <div className="calendar__day day">3</div>
                    <div className="calendar__day day">4</div>
                </div>
            </div>
    </>
    )
}

export default Calendar
