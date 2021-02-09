import React from 'react'

const MedicamentoInsert = () => {

    return (
        <>
            <Box m={2}>
                <MedicamentoForm />
            </Box>
        </>
    )
}

export default MedicamentoInsert





// import { Redirect, Link } from 'react-router-dom';
// import { Form, Row, Col, Button, Table } from 'react-bootstrap';

// function Insert() {

//     const [medicamento, setmedicamento] = useState({
//         farmaco: '',
//         orientacoes: '',
//         abreviatura: '',
//         lme: '',
//         controlado: '',
//         favorito: '',
//         classe: '',
//         nomescomerciais: [{
//             nomefantasia: '',
//         }].splice(1, 1),
//         apresentacoes: [{
//             descricao: '',
//             uso: ''
//         }].splice(1, 1),
//         posologias: [{
//             posologia: '',
//             quantidade: '',
//             forma: ''
//         }].splice(1, 1)
//     })
//     const [redirect, setredirect] = useState(false)

//     const classes = [
//         'Analgésicos',
//         'Anticonvulsivante',
//         'Antidepressivo',
//         'Antimicrobiano',
//         'Convencional',
//         'Corticóide',
//         'MMCDbiológico',
//         'MMCDsintético',
//         'MMCDpequenamolécula',
//         'Opióide',
//         'Osteometabolico',
//         'Suplemento',
//         'Vasoativo',
//         'Antiinflamatório'
//     ]

//     const handleChange = event => {
//         const target = event.target;
//         const name = target.name;
//         const value = target.name === 'lme' ? target.checked : target.name === 'controlado' ? target.checked : target.name === 'favorito' ? target.checked : target.value;
//         setmedicamento({...medicamento, [name]: value })
//     }

//     const handleAddNomeComercial = () => {

//         let ncnomefantasia = document.getElementById('nomefantasia')
//         let ncvariaveis = {
//             nomefantasia: ncnomefantasia.value,
//         }
//         let nc = medicamento.nomescomerciais.concat(ncvariaveis)

//         setmedicamento({ ...medicamento, nomescomerciais: nc })

//         ncnomefantasia.value = ""
//     }

//     const handleDeleteNomecomercial = param => () => {

//         let nc = medicamento.nomescomerciais.filter((w, index) => index !== param.index)
//         setmedicamento({ ...medicamento, nomescomerciais: nc })
//     }

//     const handleAddApresentacao = () => {

//         let apdescricao = document.getElementById('descricao')
//         let apuso = document.getElementById('uso')
//         let apvariaveis = {
//             descricao: apdescricao.value,
//             uso: apuso.value
//         }
//         let ap = medicamento.apresentacoes.concat(apvariaveis)

//         setmedicamento({ ...medicamento, apresentacoes: ap })

//         apdescricao.value = ""
//         apuso.value = ""
//     }

//     const handleDeleteApresentacao = param => () => {

//         let ap = medicamento.apresentacoes.filter((w, index) => index !== param.index)
//         setmedicamento({ ...medicamento, apresentacoes: ap })
//     }


//     const handleAddPosologia = () => {

//         let ppposologia = document.getElementById('posologia')
//         let ppquantidade = document.getElementById('quantidade')
//         let ppforma = document.getElementById('forma')
//         let ppvariaveis = {
//             posologia: ppposologia.value,
//             quantidade: ppquantidade.value,
//             forma: ppforma.value
//         }
//         let pp = medicamento.posologias.concat(ppvariaveis)

//         setmedicamento({ ...medicamento, posologias: pp })

//         ppposologia.value = ""
//         ppquantidade.value = ""
//         ppforma.value = ""
//     }

//     const handleDeletePosologia = param => () => {

//         let pp = medicamento.posologias.filter((w, index) => index !== param.index)
//         setmedicamento({ ...medicamento, posologias: pp })
//     }

//     const handleSubmit = event => {

//         event.preventDefault();

//         fetch('http://localhost:4001/api.appmed/medicamentos', {
//             method: 'post',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(medicamento)
//         })
//             .then(data => {
//                 if (data.ok) {
//                     setredirect(true)
//                 }
//             })
//     }

//     if (redirect) {
//         return <Redirect to="/medicamentos" />
//     } else {
//         return (
//             <div>
//                 <Form>
//                     <h4>Cadastro de Medicamentos</h4>
//                     {JSON.stringify(medicamento)}
//                     <br />
//                     <br />
//                     <div>
//                         <Row>
//                             <Col sm={10}>
//                                 <Form.Group>
//                                     <Form.Label>Fármaco</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         name="farmaco"
//                                         placeholder="Nome do farmaco"
//                                         value={medicamento.farmaco}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col sm={2}>
//                                 <Form.Group>
//                                     <Form.Label>Abreviatura</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         name="abreviatura"
//                                         placeholder="abreviatura"
//                                         value={medicamento.abreviatura}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col>
//                                 <Form.Group>
//                                     <Form.Check
//                                         type="checkbox"
//                                         label="LME"
//                                         name="lme"
//                                         value={medicamento.lme}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col>
//                                 <Form.Group>
//                                     <Form.Check
//                                         type="checkbox"
//                                         label="Controlado"
//                                         name="controlado"
//                                         value={medicamento.controlado}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col>
//                                 <Form.Group>
//                                     <Form.Check
//                                         type="checkbox"
//                                         label="Favorito"
//                                         name="favorito"
//                                         value={medicamento.favorito}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col>
//                                 <Form.Group>
//                                     <Form.Control
//                                         as="select"
//                                         name="classe"
//                                         value={medicamento.classe}
//                                         onChange={handleChange}
//                                     >
//                                         <option></option>
//                                         {classes.map((cla, index) =>
//                                             <option
//                                                 key={index}
//                                             >{cla}
//                                             </option>
//                                         )}
//                                     </Form.Control>
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col>
//                                 <Form.Group>
//                                     <Form.Label>Orientações</Form.Label>
//                                     <Form.Control
//                                         as="textarea"
//                                         rows="5"
//                                         name="orientacoes"
//                                         placeholder="orientacoes"
//                                         value={medicamento.orientacoes}
//                                         onChange={handleChange}
//                                     />
//                                 </Form.Group>
//                             </Col>
//                         </Row>

//                         <h4>Nomes comerciais</h4>
//                         <Row>
//                             <Table bordered hover size="sm">
//                                 <thead>
//                                     <tr>
//                                         <th>Nome fantasia</th>
//                                         <th>Excluir</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {medicamento.nomescomerciais.map((nc, index) =>
//                                         <tr key={index}>
//                                             <td xs={1} md={1} sm={1} >{nc.nomefantasia}</td>
//                                             <td><Button
//                                                 type="button"
//                                                 className="ml-2"
//                                                 onClick={handleDeleteNomecomercial({index})}>X</Button></td>
//                                         </tr>
//                                     )}
//                                 </tbody>
//                             </Table>
//                         </Row>
//                         <Row>
//                             <Col sm={10}>
//                                 <Form.Group>
//                                     <Form.Label>Nome Fantasia</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         id="nomefantasia"
//                                         name="nomefantasia"
//                                         placeholder="Nome comercial"
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col sm={2}>
//                                 <Button
//                                     variant="primary"
//                                     onClick={handleAddNomeComercial}
//                                 >Adicionar Nc
//                                     </Button>
//                             </Col>
//                         </Row>

//                         <h4>Apresentação</h4>
//                         <Row>
//                             <Table bordered hover size="sm">
//                                 <thead>
//                                     <tr>
//                                         <th>Descrição</th>
//                                         <th>Uso</th>
//                                         <th>Excluir</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {medicamento.apresentacoes.map((ap, index) =>
//                                         <tr key={index}>
//                                             <td xs={1} md={1} sm={1} >{ap.descricao}</td>
//                                             <td>{ap.uso}</td>
//                                             <td><Button
//                                                 type="button"
//                                                 className="ml-2"
//                                                 value={index}
//                                                 onClick={handleDeleteApresentacao({index})}>X</Button></td>
//                                         </tr>
//                                     )}
//                                 </tbody>
//                             </Table>
//                         </Row>
//                         <Row>
//                             <Col sm={6}>
//                                 <Form.Group>
//                                     <Form.Label>Descricao</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         id="descricao"
//                                         name="descricao"
//                                         placeholder="Apresentação"
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col sm={4}>
//                                 <Form.Group>
//                                     <Form.Label>Uso</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         id="uso"
//                                         name="uso"
//                                         placeholder="Uso"
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col sm={2}>
//                                 <Button
//                                     variant="primary"
//                                     onClick={handleAddApresentacao}
//                                 >Adicionar AP
//                                     </Button>
//                             </Col>
//                         </Row>

//                         <h4>Posologias</h4>
//                         <Row>
//                             <Table bordered hover size="sm">
//                                 <thead>
//                                     <tr>
//                                         <th>Posologia</th>
//                                         <th>Quantidade</th>
//                                         <th>Forma</th>
//                                         <th>Excluir</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {medicamento.posologias.map((pp, index) =>
//                                         <tr key={index}>
//                                             <td xs={1} md={1} sm={1} >{pp.posologia}</td>
//                                             <td>{pp.quantidade}</td>
//                                             <td>{pp.forma}</td>
//                                             <td><Button
//                                                 type="button"
//                                                 className="ml-2"
//                                                 value={index}
//                                                 onClick={handleDeletePosologia({index})}>X</Button></td>
//                                         </tr>
//                                     )}
//                                 </tbody>
//                             </Table>
//                         </Row>
//                         <Row>
//                             <Col sm={6}>
//                                 <Form.Group>
//                                     <Form.Label>Posologia</Form.Label>
//                                     <Form.Control
//                                         as="textarea" 
//                                         rows="4"
//                                         id="posologia"
//                                         name="posologia"
//                                         placeholder="Posologia Padronizada"
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col sm={2}>
//                                 <Form.Group>
//                                     <Form.Label>Quantidade</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         id="quantidade"
//                                         name="quantidade"
//                                         placeholder="Quantidade"
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col sm={2}>
//                                 <Form.Group>
//                                     <Form.Label>Forma</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         id="forma"
//                                         name="forma"
//                                         placeholder="Forma"
//                                     />
//                                 </Form.Group>
//                             </Col>
//                             <Col sm={2}>
//                                 <Button
//                                     variant="primary"
//                                     onClick={handleAddPosologia}
//                                 >Adicionar PP
//                                     </Button>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Button
//                                 variant="primary"
//                                 type="submit"
//                                 onClick={handleSubmit}
//                             >Salvar novo
//                             </Button>
//                             <Link to='/medicamentos'>
//                                 <Button type="button" className="ml-2">Cancelar</Button>
//                             </Link>
//                         </Row>
//                     </div>

//                 </Form>
//             </div>
//         );
//     }
// }

// export default Insert