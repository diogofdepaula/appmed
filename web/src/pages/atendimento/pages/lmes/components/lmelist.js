import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

export default function LMEList(props) {

    const [lmes, setlmes] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4001/api.appmed/lmes/${props.clienteId}`)
            .then(response => response.json())
            .then(response => setlmes(response))
            .catch(err => console.log(err))
    }, [props])

    return (
        <div>
            <ListGroup>
                {lmes && lmes.map(lme =>
                    <ListGroup.Item
                        key={lme.id}
                     //onClick={() => setprescricao()}
                    >{lme.cid10} - {lme.diagnostico}
                    </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    )
}
