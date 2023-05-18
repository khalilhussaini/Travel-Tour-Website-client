/* import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedLink from './components/ProtectedLink';
import { useContext } from 'react';
import { UserContext } from './contexts/UserContext';

function NavigationBar() {
  const { isAuthenticated, isLoading } = useAuth0();
  const user = useContext(UserContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand>Bloggy</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLoading ? <>
              loading
            </>
              :
              !isAuthenticated ?
                <>
                  <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                </> :
                <>
                  <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link as={NavLink} to="/posts">Posts</Nav.Link>
                  <ProtectedLink name="Create" link="/create" user={user}  roles={['admin','author']}/>
                  <Nav.Link as={NavLink} to="/settings">Settings</Nav.Link>
                  <ProtectedLink name="Users" link="/users" user={user}  roles={['admin']}/>
                </>
            }
            
          </Nav>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar; */