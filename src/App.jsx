//npm install --save-dev miragejs

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HostLayout from './components/HostLayout'
import Layout from './components/Layout'
import About from './pages/About'
import Home from './pages/Home'
import Dashboard from './pages/Host/Dashboard'
import HostVanDetail from './pages/Host/HostVanDetail'
import HostVanInfo from './pages/Host/HostVanInfo'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVans from './pages/Host/HostVans'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import VanDetail, { loader as vanDetailLoader } from './pages/Vans/VanDetail'
import Vans, { loader as vansLoader } from './pages/Vans/Vans'
import './server'
import NotFound from './pages/NotFound'
import Error from './components/Error'
import Login from './pages/Login'

function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='login' element={<Login/>}/>
            <Route 
                path='vans' 
                element={<Vans/>} 
                loader={vansLoader}
                errorElement={<Error/>}
            />
            <Route path='vans/:id' element={<VanDetail/>}
            loader={vanDetailLoader}
            />
            <Route path='host' element={<HostLayout/>}
            loader={async () => {
                return null
            }}
            >
                <Route index element={<Dashboard/>}
                loader={async () => {
                    return null
                }}
                />
                <Route path='income' element={<Income/>}
                loader={async () => {
                    return null
                }}
                />
                <Route path='vans' element={<HostVans/>}
                loader={async () => {
                    return null
                }}
                />
                <Route path='reviews' element={<Reviews/>}
                loader={async () => {
                    return null
                }}
                />
                <Route path='vans/:id' element={<HostVanDetail/>}
                loader={async () => {
                    return null
                }}
                >
                    <Route index element={<HostVanInfo/>}
                    loader={async () => {
                        return null
                    }}
                    />
                    <Route path='pricing' element={<HostVanPricing/>}
                    loader={async () => {
                        return null
                    }}
                    />
                    <Route path='photos' element={<HostVanPhotos/>}
                    loader={async () => {
                        return null
                    }}
                    />                           
                </Route>
            </Route>
            <Route path='*' element={<NotFound/>}/>
        </Route>
    ))

   return (
        <RouterProvider router={router}/>
   )
}

export default App
