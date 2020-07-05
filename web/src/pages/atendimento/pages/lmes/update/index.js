import React, { useState, useEffect } from 'react'
import LMEVarSet from '../components/lmevarset'

export default function UpdateLME(props) {

    const cliente = props.cliente  // se vir por import
    //const [cliente] = useState(props.location.state.cliente)  se vir por Link

    const [lme, setlme] = useState()

    useEffect(() => {
        const { id } = 1 // colocar a props.lmeId que vier depois
        fetch(`http://localhost:4001/api.appmed/medicamentos/${cliente.id}/${id}`)
            .then(response => response.json())
            .then(response => setlme(response))
            .catch(err => console.log(err))
    }, [cliente.id])

    return (
        <div>
            <LMEVarSet lme={lme} />
            {/* fazer depois um RelatórioDATA */}
        </div>
    )
}