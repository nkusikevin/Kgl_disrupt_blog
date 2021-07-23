import React from "react"
import Nav from './components/Navigation'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

import Home from './pages/home'
import Politics from "./pages/politics"
import Entertainment from "./pages/entertainment"
import Sports from "./pages/sports"
import Tech from "./pages/tech"
import Single from './pages/single'
import Footer from "./components/Footer"
import Login from './pages/adminLogin'
import Admin from './pages/admin/admin'
function App() {
  return (
		<>
			<Router>
				<div className='App'>
					<Nav />
					<Switch>
						<Route path='/' component={Home} exact />
						<Route path='/politics' component={Politics} />
						<Route path='/entertainment' component={Entertainment} />
						<Route path='/sports' component={Sports} />
						<Route path='/tech' component={Tech} />
						<Route path='/single' component={Single} />
						<Route path='/login' component={Login} />
						<Route path='/admin' component={Admin} />
						<Route component={() => 404} />
					</Switch>
					<Footer />
				</div>
			</Router>
		</>
	);
}

export default App;
