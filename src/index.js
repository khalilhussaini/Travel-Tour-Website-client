   import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react'; 



ReactDOM.render(
  <Auth0Provider
  domain="dev-e8adm88h4os40q5w.us.auth0.com"
  clientId="HoAMUPQLwR49sfgFIXUgxtRAaod849cL"
  authorizationParams={{
    redirect_uri: window.location.origin 
  }}
  >
      <React.StrictMode>
    <App />
  </React.StrictMode>,

  </Auth0Provider>,
  document.getElementById("root")
);   
  









































/* domain="dev-e8adm88h4os40q5w.us.auth0.com"
clientId="HoAMUPQLwR49sfgFIXUgxtRAaod849cL" */

/* 

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Updated import
import Home from './pages/Home';
import Posts from './pages/Posts';
import CreatePost from './pages/CreatePost';
import Settings from './pages/Settings';
import Post from './pages/Post';
import { Auth0Provider } from '@auth0/auth0-react';
import About from './pages/About';
import Contact from './pages/Contact';
import AboutAfganistan from './pages/AboutAfganistan';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import WelcomePage from './pages/WelcomePage';
import UserManagement from './components/UserManagement';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'Contact',
        element: <Contact/>
      },
      {
        path: 'AboutAfganistan',
        element: <AboutAfganistan/>
      },
      
      {
        path: 'posts',
        element: (
          <ProtectedRoute>
            <Posts />
          </ProtectedRoute>
        )
      },
      {
        path: 'create',
        element: (
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        )
      },
      {
        path: 'post/:postId',
        element: (
          <ProtectedRoute>
            <Post />
          </ProtectedRoute>
        )
      },
      {
        path: 'settings',
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        )
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )
      },
      {
        path: 'welcome',
        element: (
          <ProtectedRoute>
            <WelcomePage />
          </ProtectedRoute>
        )
      },
      {
        path: 'users',
        element: (
          <ProtectedRoute>
            <UserManagement />
          </ProtectedRoute>
        )
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-e8adm88h4os40q5w.us.auth0.com"
      clientId="HoAMUPQLwR49sfgFIXUgxtRAaod849cL"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <RouterProvider/>
    </Auth0Provider>
  </React.StrictMode>
);
 */
/* 
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile";
import { Auth0Provider } from "@auth0/auth0-react";
import Header from "./pages/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Tour  from "./pages/Tour";
import Contact from "./pages/Contact";
import AboutAfganistan from "./pages/AboutAfganistan";
import WelcomePage from "./pages/WelcomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "",
        element: (
            <Home />
        ),
      },
      {
        path: "about",
        element: (
            <About />
        ),
      },
      {
        path: "Contact",
        element: (
          <ProtectedRoute>
              <Contact />
          </ProtectedRoute>
        ),
      },
      {
        path: "AboutAfganistan",
        element: (
          <ProtectedRoute>
              <AboutAfganistan />
          </ProtectedRoute>
        ),
      },
      {
        path: "Tour",
        element: (
          <ProtectedRoute>
              <Tour />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <div className="background-image">
              <Profile />
            </div>
          </ProtectedRoute>
        ),
      },
      {
        path: "welcomePage",
        element: (
          <ProtectedRoute>
            <div className="background-image">
              <WelcomePage />
            </div>
          </ProtectedRoute>
        ),
      },
      {
        path: "settings",
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-e8adm88h4os40q5w.us.auth0.com"
      clientId="HoAMUPQLwR49sfgFIXUgxtRAaod849cL"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
 */