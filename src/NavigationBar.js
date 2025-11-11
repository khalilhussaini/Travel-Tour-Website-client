import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import PasswordReset from "./components/PasswordReset";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import ProtectedLink from "./components/ProtectedLink";
import "./NavigationBar.css";

function NavigationBar() {
  const { isAuthenticated, isLoading } = useAuth0();
  const user = useContext(UserContext);
  return (
    <Navbar>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            {isLoading ? (
              <>loading</>
            ) : !isAuthenticated ? (
              <>
                <Nav.Link as={NavLink} to="/" exact>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={NavLink} to="/Contact">
                  Contact
                </Nav.Link>
                <Nav.Link as={NavLink} to="/AboutAfganistan">
                  AboutAfganistan
                </Nav.Link>
                <Nav.Link as={NavLink} to="/Tours">
                  Tours
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/" exact>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={NavLink} to="/Contact">
                  Contact
                </Nav.Link>
                <Nav.Link as={NavLink} to="/AboutAfganistan">
                  AboutAfganistan
                </Nav.Link>
                <Nav.Link as={NavLink} to="/Tours">
                  Tours
                </Nav.Link>
                <ProtectedLink
                  name="Create"
                  link="/create"
                  user={user}
                  roles={["admin", "author"]}
                />
                <ProtectedLink
                  name="Users"
                  link="/users"
                  user={user}
                  roles={["admin"]}
                />
              </>
            )}
          </Nav>

          {isAuthenticated ? (
            <>
              <LogoutButton />
              <PasswordReset />
            </>
          ) : (
            <LoginButton />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
