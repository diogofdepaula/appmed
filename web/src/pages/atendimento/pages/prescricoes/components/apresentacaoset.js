import React, { useCallback, useContext, useEffect } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { MedicamentoEditorContext, PrescricaoEditorContext } from '../editor'

export default function ApresentacaoSet() {

    const { prescricaoContext, setPrescricaoContext, setStepContext } = useContext(PrescricaoEditorContext)
    const { medicamentoContext, setMedicamentoContext } = useContext(MedicamentoEditorContext)

    const fetchData = useCallback(async () => {
        const res = await fetch(`http://localhost:4001/api.appmed/medicamentos/${prescricaoContext.medicamentoId}`)
        const json = await res.json();
        setMedicamentoContext(json)
    }, [prescricaoContext, setMedicamentoContext])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div>
            <h5>Escolha uma Apresentação</h5>
            <Container className="mt-2" >
                <ListGroup className="mt-2">
                    {medicamentoContext && medicamentoContext.apresentacoes && medicamentoContext.apresentacoes.map(apresentacao =>
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