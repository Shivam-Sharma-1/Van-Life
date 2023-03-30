//npm install --save-dev miragejs

import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import HostLayout from './components/HostLayout'
import Layout from './components/Layout'
import About from './pages/About'
import Home from './pages/Home'
import Dashboard from './pages/Host/Dashboard'
import HostVanDetail from './pages/Host/HostVanDetail'
import HostVans from './pages/Host/HostVans'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import VanDetail from './pages/Vans/VanDetail'
import Vans from './pages/Vans/Vans'
import './server'

function App() {
   return (
        <Fragment>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='vans' element={<Vans/>}/>
                    <Route path='vans/:id' element={<VanDetail/>}/>
                    <Route path='host' element={<HostLayout/>}>
                        <Route index element={<Dashboard/>}/>
                        <Route path='income' element={<Income/>}/>
                        <Route path='vans' element={<HostVans/>}/>
                        <Route path='vans/:id' element={<HostVanDetail/>}/>
                        <Route path='reviews' element={<Reviews/>}/>
                    </Route>
                </Route>
            </Routes>
        </Fragment>
   )
}

export default App
