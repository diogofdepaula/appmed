import React from 'react';
import LMEEditor from '../editor';

const LMEUpdate = () => {

    //const { prescricaoEdit, lmeEdit, setLmeEdit } = useContext(AtendimentoContext)

    // já vai vir com a prescricao na lme

    // const fetchData = useCallback(async () => {
    //     const res = await fetch(`http://localhost:4001/api.appmed/lmes/one/${prescricaoEdit.lmeId}`)
    //     const json = await res.json();
    //     // o findOne do Sequelize não tras os includes, por isso usou-se findAll
    //     let lmeupdate = json[0]
    //     let index = lmeupdate.prescricoes.findIndex((p) => p.id === prescricaoEdit.id);
    //     if (index === -1) {
    //         lmeupdate.prescricoes.push(prescricaoEdit);
    //     } else {
    //         lmeupdate.prescricoes[index] = prescricaoEdit;
    //     }
    //     setLmeEdit(lmeupdate)

    // }, [prescricaoEdit, setLmeEdit])

    // useEffect(() => {
    //     if (!lmeEdit) {
    //         fetchData()
    //     }
    // }, [lmeEdit, fetchData])

    // console.log(lmeEdit);

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

    return (
        <div>
            <LMEEditor />
        </div>
    )
}

export default LMEUpdate