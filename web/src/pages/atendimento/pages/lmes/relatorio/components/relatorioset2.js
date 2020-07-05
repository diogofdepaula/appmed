import React, { useState, useEffect, useCallback } from 'react'
import { Button, Container, Form } from 'react-bootstrap'


export default function RelatorioSet2(props) {

    const [relatorio, setRelatorio] = useState(props.relatorio)
    const [list, setList] = useState([])

    const getList = useCallback(() => {
        const ar = [
            ['ara', 'Rigidez articular'],
            ['arb', 'Artrite em três ou mais áreas'],
            ['arc', 'Artrite em articulações das mãos'],
            ['ard', 'Artrite simétrica'],
            ['are', 'Nódulos reumatóides'],
            ['arf', 'Fator reumatóide sérico'],
            ['arg', 'Alterações radiológicas'],
        ]

        const eap = [
            ['eapa', 'Psoríase'],
            ['eapb', 'Artrite'],
            ['eapc', 'Entesite'],
            ['eapd', 'Dactilite'],
            ['eape', 'Alterações extrarticulares'],
            ['eapf', 'Distrofia ungueal'],
            ['eapg', 'Proliferação óssea na radiografia']
        ]

        const eaa = [
            ['eaaa', 'Dor lombar inflamatória'],
            ['eaab', 'HLA-B27 detectado'],
            ['eaac', 'Sacroileíte / Lesões Axiais'],
            ['eaad', 'RM típica'],
            ['eaae', 'Alterações Extrarticulares']
        ]

        const arcid = ['M050', 'M051', 'M052', 'M053', 'M058', 'M060', 'M068']
        const aijcid = ['M080']
        const eaicid = ['M460', 'M461', 'M468']
        const eapcid = ['M070', 'M073']
        const eaacid = ['M45']

        if (arcid.includes(props.cid10)) {
            setList(ar)
        } else if (aijcid.includes(props.cid10)) {
            setList(ar)
        } else if (eaicid.includes(props.cid10)) {
            setList(eap)
        } else if (eapcid.includes(props.cid10)) {
            setList(eap)
        } else if (eaacid.includes(props.cid10)) {
            setList(eaa)
        }
        // não sei como tirar toda essa lógica aqui de dentro.
        // as const quando estão lá fora e são postas na lista de dependências dá loop infinito
    }, [props.cid10])

    useEffect(() => {
        getList()
    }, [getList])


    const handleChange = event => {
        setRelatorio({ ...relatorio, [event.target.name]: event.target.checked })
    }

    return (
        <div>
            <Container>
                {list && list.map((w, index) =>
                    <Form.Group controlId={w[0]} key={w[0]}>
                        <Form.Check
                            type="checkbox"
                            label={w[1]}
                            name={w[0]}
                            value={w[0]}
                            onChange={handleChange}
                        />
                    </Form.Group>
                )}
            </Container>
            <Container className="mt-2">
                <Button
                    variant="outline-success"
                    onClick={props.passPrevious}
                > Anterior
                  </Button>
                <Button
                    className="ml-1"
                    variant="outline-success"
                    onClick={props.passNext(relatorio)}
                > Próximo
                    </Button>
            </Container>
        </div>
    )
}