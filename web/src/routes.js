import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

import './styles/global.css'
import Cadastro from './pages/cadastro/'
import Checkout from './pages/checkout'
import Home from './pages/home'
import PetShop from './pages/petshop'
import SideBar from './components/sidebar'

const Rout = () => {
	return (
        <>
		<Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/petshop/:id" element={<PetShop/>}></Route>
                <Route path="/checkout" element={<Checkout/>}></Route>
                <Route path="/cadastro" element={<Cadastro/>}></Route>
            </Routes>
        </Router>
        <SideBar/>
        </>
	)
}
export default Rout;