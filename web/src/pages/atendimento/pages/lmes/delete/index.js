import React, { useContext } from 'react';
import { PageContext, LMEMainContext } from '../..';
import { Row, Button } from 'react-bootstrap';

export default function LMEDelete() {

    const setPage = useContext(PageContext)
    const { lmeMain, setLmeMain } = useContext(LMEMainContext)

    const handleDeleteLME = () => event => {

        event.preventDefault();
        fetch(`http://localhost:4001/api.appmed/lmes/${lmeMain.id}`, {
            method: 'delete',
        }).then(data => {
            if (data.ok) {
                setLmeMain(null)
                setPage('prescricoes')
            }
        })
    }

    return (
        <div>

            <Row className="mt-2">
                <Button
                    className="mt-2 ml-2"
                    variant="outline-danger"
                    onClick={handleDeleteLME()}
                >Remover LME (apagará ambos do bando de dados)
                </Button>
            </Row>

        </div>
    )
}