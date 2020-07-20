import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { LMEEditorContext } from '../../editor'
import { RelatorioContent } from '../relatoriovarset'

export default function RelatorioSet2() {

    const { relatorioContext, setRelatorioContext, setStepContext } = useContext(RelatorioContent)
    const { lmeContext } = useContext(LMEEditorContext)
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

        if (arcid.includes(lmeContext.cid10)) {
            setList(ar)
        } else if (aijcid.includes(lmeContext.cid10)) {
            setList(ar)
        } else if (eaicid.includes(lmeContext.cid10)) {
            setList(eap)
        } else if (eapcid.includes(lmeContext.cid10)) {
            setList(eap)
        } else if (eaacid.includes(lmeContext.cid10)) {
            setList(eaa)
        }
        // não sei como tirar toda essa lógica aqui de dentro.
        // as const quando estão lá fora e são postas na lista de dependências dá loop infinito
    }, [lmeContext])

    useEffect(() => {
        getList()
    }, [getList])


    const handleChange = event => {
        setRelatorioContext({ ...relatorioContext, [event.target.name]: event.target.checked })
    }

    return (
        <div>
            <Container>
                {list && list.map((w, index) =>
                    <Form.Check
                        key={w[0]}
                        type="checkbox"
                        label={w[1]}
                        id={w[0]}
                        name={w[0]}
                        value={w[0]}
                        onChange={handleChange}
                    />
                )}
            </Container>
            <Container className="mt-2">
                <Button
                    variant="outline-success"
                    onClick={() => {
                        setRelatorioContext(relatorioContext)
                        setStepContext(1)
                    }}
                > Anterior
                  </Button>
                <Button
                    className="ml-1"
                    variant="outline-success"
                    onClick={() => {
                        setRelatorioContext(relatorioContext)
                        setStepContext(3)
                    }}
                > Próximo
                    </Button>
            </Container>
        </div>
    )
}