
import React, {useState, useEffect} from 'react';
import Header from './parts/Header.js';
import Main from './parts/Main.js';
// import Footer from './parts/Footer.js';


function App(){
	const [username, setUserName] = useState('demo');
	const [password, setPassword] = useState('demo');
	const [login, setLogin] = useState(false);

	function handleUserName(event){
		setUserName(event.target.value);
	}

	function handleLogin(){
		setLogin(!login);
	}
	
	function handlePassword(event){
		setPassword(event.target.value);
	}
	return(
			<>
				<Header login={login} handleLogin={handleLogin}/>
				<Main login={login} handleLogin={handleLogin} userFunc={handleUserName} passwordFunc={handlePassword} username={username} password={password}/>
				{/* <Footer /> */}
			</>
	)
	
  }

export default App;
