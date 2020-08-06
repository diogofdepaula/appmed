import React, { useContext } from 'react';
import { Badge, Container, ListGroup } from 'react-bootstrap';
import { LMEMainContext, PageContext, PrescricaoMainContext } from '../..';

export default function LMEData() {

    const { lmeMain } = useContext(LMEMainContext)
    const { setPrescricaoMain } = useContext(PrescricaoMainContext)
    const setPage = useContext(PageContext)

    if (!lmeMain) {
        return <></>
    } else {
        return (
            <div>
                <Container>
                    LME
                    <p>{lmeMain.cid10} - {lmeMain.diagnostico}</p>
                    <p>{lmeMain.anamnese}</p>
                    Prescrições
                    <ListGroup className="mt-2">
                        {lmeMain.prescricoes && lmeMain.prescricoes.map(prescricao =>
                            prescricao.emuso && (
                                <ListGroup.Item
                                    key={prescricao.id}
                                >{prescricao.medicamento.farmaco} ({prescricao.apresentaco.descricao})
                                    <Badge
                                        variant="light"
                                        onClick={() => {
                                            setPrescricaoMain(prescricao)
                                            setPage('prescricaoupdate')
                                        }}
                                    >Editar
                                    </Badge>
                                </ListGroup.Item>
                            )
                        )}
                        <ListGroup.Item disabled>Porta ac consectetur ac</ListGroup.Item>
                    </ListGroup>
                </Container>
            </div>
        )
    }
}