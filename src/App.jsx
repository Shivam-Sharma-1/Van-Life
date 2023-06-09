//npm install --save-dev miragejs
//npm install react-icons --save
//npm install firebase

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HostLayout from './components/HostLayout'
import Layout from './components/Layout'
import About from './pages/About'
import Home from './pages/Home'
import Dashboard, { loader as dashboardLoader
} from './pages/Host/Dashboard'
import HostVanDetail, { loader as hostVanDetailLoader } from './pages/Host/HostVanDetail'
import HostVanInfo from './pages/Host/HostVanInfo'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVans, { loader as hostVansLoader } from './pages/Host/HostVans'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import VanDetail, { loader as vanDetailLoader } from './pages/Vans/VanDetail'
import Vans, { loader as vansLoader } from './pages/Vans/Vans'
import NotFound from './pages/NotFound'
import Error from './components/Error'
import Login, {action as loginAction, loader as loginLoader} from './pages/Login'
import {requiredAuth} from './utils'

function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route 
                path='login' 
                element={<Login/>}
                loader={loginLoader}
                action={loginAction}
            />
            <Route 
                path='vans' 
                element={<Vans/>} 
                loader={vansLoader}
                errorElement={<Error/>}
            />
            <Route 
                path='vans/:id' 
                element={<VanDetail/>}
                loader={vanDetailLoader}
                errorElement={<Error/>}
            />
            <Route 
                path='host' 
                element={<HostLayout/>}
                errorElement={<Error/>}
                loader={async ({request}) => await requiredAuth(request)}
            >
                <Route 
                    index 
                    element={<Dashboard/>}
                    loader={dashboardLoader}
                    errorElement={<Error/>}
                />
                <Route path='income' element={<Income/>}
                loader={async ({request}) => await requiredAuth(request)}
                />
                <Route 
                    path='vans' 
                    element={<HostVans/>}
                    loader={hostVansLoader}
                    errorElement={<Error/>}
                />
                <Route path='reviews' element={<Reviews/>}
                loader={async ({request}) => await requiredAuth(request)}
                />
                <Route 
                    path='vans/:id' 
                    element={<HostVanDetail/>}
                    errorElement={<Error/>}
                    loader={hostVanDetailLoader}
                >
                    <Route index element={<HostVanInfo/>}
                    loader={async ({request}) => await requiredAuth(request)}
                    />
                    <Route path='pricing' element={<HostVanPricing/>}
                    loader={async ({request}) => await requiredAuth(request)}
                    />
                    <Route path='photos' element={<HostVanPhotos/>}
                    loader={async({request}) => await requiredAuth(request)}
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
