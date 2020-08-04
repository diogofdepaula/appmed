import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { LMEMainContext } from '../main';

export default function LMEData() {

    const { lmeMain } = useContext(LMEMainContext)

    if (!lmeMain) {
        return <></>
    } else {
        return (
            <div>
                {JSON.stringify(lmeMain)}
                <Container>
                    LME
                    <p>{lmeMain.cid10} - {lmeMain.diagnostico}</p>
                    <p>{lmeMain.anamnese}</p>
                    Prescrições
                    {/* <ListGroup className="mt-2">
                        {prescricoes && prescricoes.map(prescricao =>
                            prescricao.emuso && (
                                <ListGroup.Item
                                    key={prescricao.id}
                                    onClick={() => setPrescricaoMain(prescricao)}
                                >{prescricao.medicamento.farmaco} ({prescricao.apresentaco.descricao})
                                    <Badge
                                        variant="light"
                                        onClick={() => {
                                            setPrescricaoMain(prescricao)
                                            setPage('prescricaoupdate')
                                        }}
                                    >Editar
                                    </Badge>
                                    <>
                                        {prescricao.lmeId !== null && '(LME)'}
                                    </>
                                </ListGroup.Item>
                            )
                        )}
                        <ListGroup.Item disabled>Porta ac consectetur ac</ListGroup.Item>
                    </ListGroup> */}
                </Container>
            </div>
        )
    }
}