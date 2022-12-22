import { useState } from 'react'
import { Button, Container, Alert, Form } from 'react-bootstrap'
import reactLogo from './assets/react.svg'
import './App.css'


const Nav = () => {
  return (
    <div className="navlinks">
      <a href="">1sadsadsad</a>
      <a href="">2sadsadsad</a>
      <a href="">3sadsadsad</a>
    </div>
  )
}

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="">2sadsadsad</a>
      <a href="">3sadsadsad</a>
    </div>
  )
}

function Main(props) {
  return (
    <div className='main'>
     {props.children}
      </div>
  )
}




function Login(props){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if(username == "user123" && password == "password123"){
      console.log("logged in");
      props.setLoginUser(true);
      setError(false);
    }
    else{
      setError(true);
    }

  }

  return(
    <Container>
      {error ? 

        <Alert variant="warning">
        That was the wrong username and/or password
        </Alert>
        // <div>That was the wrong username and/or password</div> 
      :
        <div className='align-self-center'>Welcome to the app</div>
      }
      
      <Form onSubmit={(e) => handleLogin(e)}>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
          onChange={(e) => setUsername(e.target.value)} 
          type="text" 
          placeholder="Enter your Username"
          name="username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          name="password"
          />
        </Form.Group>
       

        <div className="d-grid gap-2">
          <Button type="submit">Login</Button>
        </div>
      



        {/* <input onChange={(e) => setUsername(e.target.value)} type="text" name='username'/> */}
        {/* <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' /> */}
        {/* <input type="submit" value="Login" /> */}
      </Form>
    </Container>
  )
}

function Signup(props){
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   // props.setUserLoggedIn(true)

  // }

  return(
    <Container>

      <Form>

      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control 
        onChange={(e) => setFirstName(e.target.value)} 
        type="text" 
        placeholder="Enter your first name" 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control 
        onChange={(e) =>setLastName(e.target.value)}
        type="text" 
        placeholder="Enter your last name" 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
        onChange={(e) => setEmail(e.target.value)} 
        type="email" 
        placeholder="Enter your email" 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        onChange={(e) => setPassword(e.target.value)}
        type="password" 
        placeholder="Enter your password" 
        />
      </Form.Group>

        {/* <input onChange={(e) => setFirstName(e.target.value)} type='text' name='firstname' />
        <input onChange={(e) =>setLastName(e.target.value)} type='text' name='lastname' />
        <input onChange={(e) => setEmail(e.target.value)} type='email' name='email' />
        <input onChange={(e) => setPassword(e.target.value)} type='password' name='password' /> */}
        
      </Form>

    </Container>
  )
}







function App() {
  const [ isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [ showLogin, setShowLogin ] = useState(true);

  return (
      <div className="app">
        {
          isUserLoggedIn ? 
          <>
            <div className="nav">
              <Nav />
            </div>
            <div className="content">
              <Sidebar />
              <Main>
                <p>Hello world</p>
              </Main>
            </div>
          </>
          :
          <>
            {
              showLogin ? 
              <Login setLoginUser={setUserLoggedIn} />
              :
              <Signup />
            }

            <div className='signup-btn'>
              {/* <button  onClick={() => setShowLogin(!showLogin)}>Sign Up</button> */}
              <Button variant="success" onClick={() => setShowLogin(!showLogin)}>Sign Up</Button>
            </div>
          </>
          // <button></button>
          
        }
        
      </div>
  );
}
export default App
