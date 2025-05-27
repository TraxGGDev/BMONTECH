import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegisterView from './views/registerView';
import LoginView from './views/LoginView';
import Layout from './layouts/Layout';

export default function Router(){
    return(
        <BrowserRouter>
          <Routes> 
            <Route element={<Layout />}>
                <Route path='/auth/register' element={<RegisterView/>}/>
                <Route path='/auth/login' element={<LoginView/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    )
}