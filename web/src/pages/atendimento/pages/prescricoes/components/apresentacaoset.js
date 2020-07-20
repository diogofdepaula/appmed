import React, { useEffect, useState, useCallback, useContext } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { PrescricaoEditorContext } from '../editor'

export default function ApresentacaoSet() {

    const { prescricaoContext, setPrescricaoContext, setStepContext } = useContext(PrescricaoEditorContext)
    const [medicamentocominclude, setMedicamentoComInclude] = useState()

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/medicamentos/${prescricaoContext.medicamentoId}`)
        const json = await res.json();
        setMedicamentoComInclude(json);
    }, [prescricaoContext])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div>
            <h5>Escolha uma Apresentação</h5>
            <Container className="mt-2" >
                <ListGroup className="mt-2">
                    {medicamentocominclude && medicamentocominclude.apresentacoes && medicamentocominclude.apresentacoes.map(apresentacao =>
                        <ListGroup.Item
                            key={apresentacao.id}
                            onClick={() => {
                                setPrescricaoContext({ ...prescricaoContext, apresentacoId: apresentacao.id })
                                setStepContext(31)
                            }}
                        >
                        <>
                            {prescricaoContext.apresentacoId === apresentacao.id && <h6>(opção atual)</h6>}
                        </>
                        {apresentacao.descricao}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Container>
        </div>
    )
}