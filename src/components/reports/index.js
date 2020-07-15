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
    }
}

function Users() {
    const { actions, store } = useContext(Context);
    const [reporstList, setReporstList] = useState([])
    const [reportData, setReportData] = useState({})
    const [toggleModal, setToggleModal] = useState(false)

    const handleReport = (report) => {
        setReportData(report)
        setToggleModal(!toggleModal)
    }

    const getReportsList = async () => {
        const resp = await getOne('get_one_report', '5f0f397acf3ab14505a38549')
        setReporstList(resp.reports)
    }

    useEffect(() => {
        getReportsList()
        actions.setHeaderTitle('Reportes')
    }, [])
    return (
        <div style={classes.root}>
            {reporstList.length > 0 ?
                reporstList.map(report => {
                    return (
                        <div key={report.id}>
                            <div style={{ display: 'inline-block' }}>
                                <p className='noSpace '><strong>{report.name}</strong></p>
                                <p className='noSpace subtitleItemList'><strong>Empresa: </strong>{report.company}</p>
                            </div>

                            <div style={{ alignItems: "center", height: '40px', display: 'flex', float: 'right' }}
                                onClick={() => handleReport(report)}
                            >
                                <ion-icon name="eye-outline"/>
                            </div>
                            <hr />
                        </div>
                    )
                })
                :
                <p>No hay reportes disponibles</p>
            }
            <Modal open={toggleModal} header={'Reporte'} action={() => { setToggleModal(!toggleModal) }} actionButton={'Volver'}>
                <h3 className='textAlign'><strong>{reportData.company}</strong></h3>
                <p className='textAlign'><strong>Reporte de Actividades</strong></p>

                <p>Nombre del responsable: {reportData.name}</p>
                <p className='noSpace'>Departamento o proyecto: {reportData.departament}</p>

                <h3 className='textAlign'><strong>Actividades Realizadas</strong></h3>
                <p>{reportData.reportContent}</p>
            </Modal>
        </div>
    )
}

export default Users