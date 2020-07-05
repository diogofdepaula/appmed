import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">AppMed</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Cadastro">

                            <NavDropdown.Item href="/clientes">Clientes</NavDropdown.Item>
                            <NavDropdown.Item href="/medicamentos">Medicamentos</NavDropdown.Item>
                            <NavDropdown.Item href="#">Outros</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="##">Outros2</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item>

                            <Nav.Link href="/atendimento/choose">Atendimento</Nav.Link>
                        </Nav.Item>
                        {/* <NavDropdown title="Atendimento">
                            <NavDropdown.Item href="/prescricoes">Prescrição</NavDropdown.Item>
                            <NavDropdown.Item href="/lmes">LME</NavDropdown.Item>
                            <NavDropdown.Item href="##">Solicitações</NavDropdown.Item>
                            <NavDropdown.Item href="##">Atestados</NavDropdown.Item>
                            <NavDropdown.Item href="##">Termos de consentimento</NavDropdown.Item> 
                        </NavDropdown> */}
                        <NavDropdown title="Agenda">
                            <NavDropdown.Item href="##">Prontuário</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Centro de Infusão">
                            <NavDropdown.Item href="##">Centro de Infusão</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Clientes" className="mr-sm-2" />
                        <Button variant="outline-success">Procurar</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;