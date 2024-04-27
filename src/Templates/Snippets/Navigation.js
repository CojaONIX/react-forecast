import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useRecoilValue} from "recoil";
import {userState} from "../../States/userState";


const Navigation = () => {

    const userStateData = useRecoilValue(userState);

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">Forecast</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className="me-auto my-2 my-lg-0">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/admin">Admin</Nav.Link>
                        <NavDropdown title="Old" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/findplace">Find Place</NavDropdown.Item>
                            <NavDropdown.Item href="/citiesvalidation">Cities Validation</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    {userStateData.isLogged
                        ? <>
                            <p className="my-2">Hello, {userStateData.email}</p>
                            <a onClick={() => localStorage.removeItem('userData')} className="btn btn-outline-danger ms-3" href="/">Logout</a>
                        </>
                        : <a className="btn btn-outline-primary ms-3" href="/login">Login</a>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;