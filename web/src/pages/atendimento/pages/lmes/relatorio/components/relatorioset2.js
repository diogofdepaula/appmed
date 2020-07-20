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
            ['ara', 'Rigidez articular', relatorioContext.ara ],
            ['arb', 'Artrite em três ou mais áreas', relatorioContext.arb ],
            ['arc', 'Artrite em articulações das mãos', relatorioContext.arc ],
            ['ard', 'Artrite simétrica', relatorioContext.ard ],
            ['are', 'Nódulos reumatóides', relatorioContext.are ],
            ['arf', 'Fator reumatóide sérico', relatorioContext.arf ],
            ['arg', 'Alterações radiológicas', relatorioContext.arg ],
        ]

        const eap = [
            ['eapa', 'Psoríase', relatorioContext.eapa ],
            ['eapb', 'Artrite', relatorioContext.eapb ],
            ['eapc', 'Entesite', relatorioContext.eapc ],
            ['eapd', 'Dactilite', relatorioContext.eapd ],
            ['eape', 'Alterações extrarticulares', relatorioContext.eape ],
            ['eapf', 'Distrofia ungueal', relatorioContext.eapf ],
            ['eapg', 'Proliferação óssea na radiografia', relatorioContext.eapg ],
        ]

        const eaa = [
            ['eaaa', 'Dor lombar inflamatória', relatorioContext.eaaa ],
            ['eaab', 'HLA-B27 detectado', relatorioContext.eaab ],
            ['eaac', 'Sacroileíte / Lesões Axiais', relatorioContext.eaac ],
            ['eaad', 'RM típica', relatorioContext.eaad ],
            ['eaae', 'Alterações Extrarticulares', relatorioContext.eaae ],
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
    }, [lmeContext, relatorioContext])

    useEffect(() => {
        getList()
    }, [getList])


    const handleChange = event => {
        setRelatorioContext({ ...relatorioContext, [event.target.name]: event.target.checked })
    }

    return (
        <div>
            <Container>
                {list && list.map((w) =>
                    <Form.Check
                        key={w[0]}
                        type="checkbox"
                        label={w[1]}
                        id={w[0]}
                        name={w[0]}
                        checked={w[2]}
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