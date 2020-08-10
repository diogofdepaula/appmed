import React, { useContext } from 'react'
import { Button, Container, ListGroup } from 'react-bootstrap'
import { MedicamentoEditorContext, PrescricaoEditorContext } from '../editor'

export default function PosologiaSet(props) {

    const { prescricaoContext, setPrescricaoContext, setStepContext } = useContext(PrescricaoEditorContext)
    const { medicamentoContext } = useContext(MedicamentoEditorContext)
    //const [medicamentocominclude, setMedicamentoComInclude] = useState()

    // const fetchData = useCallback(async () => {
    //     const res = await fetch(`http://localhost:4001/api.appmed/medicamentos/${prescricaoContext.medicamentoId}`)
    //     const json = await res.json();
    //     setMedicamentoComInclude(json);
    // }, [prescricaoContext])

    // useEffect(() => {
    //     fetchData();
    // }, [fetchData])

    return (
        <div>
            <h5>Escolha uma Posologia</h5>
            <Container className="mt-2" >
                <ListGroup className="mt-2">
                    {medicamentoContext && medicamentoContext.posologias && medicamentoContext.posologias.map(posologia =>
                        <ListGroup.Item
                            key={posologia.id}
                            onClick={() => {
                                setPrescricaoContext({
                                    ...prescricaoContext,
                                    usoposologiapadrao: true,
                                    posologiaId: posologia.id
                                })
                                setStepContext(41)
                            }}
                        >
                            <>
                                {prescricaoContext.posologiaId === posologia.id && <h6>(opção atual)</h6>}
                            </>
                            {posologia.posologia}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Container>
            <Button
                className="mt-2"
                variant="outline-danger"
                onClick={() => {
                    setPrescricaoContext(prescricaoContext)
                    setStepContext(32)
                }}
            >Usar posologia não padronizada
                <>
                    {prescricaoContext.posologiaId === null && <h6>  (opção atual)</h6>}
                </>
            </Button>
        </div>
    )
}