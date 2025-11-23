import React from 'react'
import './App.css'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import Photo from './Components/Photo/Photo'
import { UserStorage } from './Contexts/UserContext'
import User from './User/User'
import ProtectedRoute from './Components/Helper/ProtectedRoute'
function App() {
	return (
		<div>
			<BrowserRouter>
				<UserStorage>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} end />
						<Route path='login/*' element={<Login />} />
						<Route
							path='conta/*'
							element={
								<ProtectedRoute>
									<User />
								</ProtectedRoute>
							}
						/>
						<Route path='foto/:id' element={<Photo />} />
					</Routes>
					<Footer />
				</UserStorage>
			</BrowserRouter>
		</div>
	)
}

export default App
