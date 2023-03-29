import Layout from "./layout";
import RouterWeb from "./router";
import { Routes, Route, Navigate } from 'react-router-dom'
import Pages from './page'


function App() {
  const token = localStorage.getItem("token")
  const AuthAccount = ({ children }) => {
    return !token ? children : <Navigate to='/login' />
  }
  return (
    <>
      <Routes>
        <Route path="register" element={<Pages.Register />} />
        <Route path="login" element={<Pages.Login />} />
        {
          RouterWeb.map(item => {
            if (!item.child) {
              return (
                <Route key={item.id} path={item.path} element={<AuthAccount><Layout>{item.component} </Layout> </AuthAccount>} />
              )
            } else {
              return <Route key={item.id} path={item.path} element={<AuthAccount><Layout>{item.component} </Layout> </AuthAccount>} >
                {item.child.map((child, index) => {
                  return <Route exact path={child.path} key={index} element={child.component} />;
                })}
              </Route>
            }
          })
        }
        <Route path="*" element={<Pages.Notfound />} />
      </Routes>
    </>
  );
}

export default App;
