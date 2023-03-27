import Layout from "./layout";
import RouterWeb from "./router";
import { Routes, Route, Navigate } from 'react-router-dom'
import Pages from './page'


function App() {
  const token = localStorage.getItem("token")
  const AuthAccount = ({children}) => {
    return !token ? children : <Navigate to='/login' />
  }
  return (
    <>
      <Routes>
        <Route path="register" element={<Pages.Register />} />
        <Route path="login" element={<Pages.Login />} />
        {
          RouterWeb.map(item => (
            <Route key={item.id} path={item.path} element={<AuthAccount><Layout>{item.component} </Layout> </AuthAccount>} />
          ))
        }
        <Route path="*" element={<Pages.Notfound />} />
      </Routes>
    </>
  );
}

export default App;
