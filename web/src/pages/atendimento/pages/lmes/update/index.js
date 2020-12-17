import React, { useCallback, useContext, useEffect } from 'react';
import { AtendimentoContext } from '../../..';
import LMEEditor from '../editor';

const LMEUpdate = () => {

    // // const cliente = useContext(ClienteContext)
    // const setPage = useContext(PageContext)
    // const { prescricaoMain, setPrescricaoMain } = useContext(PrescricaoMainContext)
    // const [lme, setLme] = useState()
    // const [validation, setValidation] = useState(false)
    // const step = 21

    //const { clientecontext } = useContext(ClienteContext)
    const { prescricaoEdit, setLmeEdit } = useContext(AtendimentoContext)

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/lmes/one/${prescricaoEdit.lmeId}`)
        const json = await res.json();
        // o findOne do Sequelize não tras os includes, por isso usou-se findAll
        let lmeupdate = json[0]
        let index = lmeupdate.prescricoes.findIndex((p) => p.id === prescricaoEdit.id);
        if (index === -1) {
            lmeupdate.prescricoes.push(prescricaoEdit);
        } else {
            lmeupdate.prescricoes[index] = prescricaoEdit;
        }
        setLmeEdit(lmeupdate)

    }, [prescricaoEdit, setLmeEdit])

    useEffect(() => {
        fetchData();
    }, [fetchData])



    // const fetchData = useCallback(async () => {
    //     const res = await fetch(`http://localhost:4001/api.appmed/lmes/one/${prescricaoMain.lmeId}`)
    //     const json = await res.json();
    //     let lmeupdate = json[0]  // ele manda como uma array se um item
    //     let index = lmeupdate.prescricoes.findIndex((p) => p.id === prescricaoMain.id);
    //     if (index === -1) {
    //         lmeupdate.prescricoes.push(prescricaoMain);
    //     } else {
    //         lmeupdate.prescricoes[index] = prescricaoMain;
    //     }
    //     setLme(lmeupdate)

    // }, [prescricaoMain])

    // useLayoutEffect(() => {
    //     if (!validation) {
    //         fetchData();
    //     }
    // }, [validation, fetchData])

    // const backLME = useCallback((paramLME) => {
    //     setLme(paramLME)
    //     //  setPage('prescricoes') // ou para onde for
    // }, [])

    // const handleSubmit = event => {

    //     event.preventDefault();

    //     fetch(`http://localhost:4001/api.appmed/lmes/${lme.id}`, {
    //         method: 'put',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(lme)
    //     }).then(data => {
    //         if (data.ok) {
    //             setValidation(true)
    //             setPrescricaoMain(null)
    //             setPage('prescricoes')
    //         }
    //     })
    // }

    return (
        <div>
            <LMEEditor />
        </div>
    )
}

export default LMEUpdate