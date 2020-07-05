import React from 'react';
import { Container } from 'react-bootstrap';

export default function LMEData(props) {

    const lme = props.lme

    // tem que fazer esse if se não dá erro devido o undefined quando carrega
    if (!lme) {
        return <></>
    } else {
        return (
            <div>
                <Container>
                    {lme.cid10 && <p>{lme.cid10} - {lme.diagnostico}</p>}
                    <p>{lme.anamnese}</p>
                </Container>
            </div>
        )
    }
}