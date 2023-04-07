import Layout from "./layout";
import RouterWeb from "./router";
import { Routes, Route, Navigate } from 'react-router-dom'
import Pages from './page'
import { ToastContainer } from 'react-toastify';



function App() {
  const token = localStorage.getItem("token")
  const role = localStorage.getItem("role")
  const AuthAccount = ({ children }) => {
    // console.log('hello')
    // return token ? children : <Navigate to='/login' />
    return children
  }
  return (
    <>
      <Routes>
        <Route path="register" element={<Pages.Register />} />
        <Route path="login" element={<Pages.Login />} />
        <Route path="/" element={<Layout><Pages.Homepage /></Layout>} />
        {
          RouterWeb.map(item => {
            if (!item.child) {
              return (
                <Route key={item.id} path={item.path} element={<AuthAccount><Layout>{item.component} </Layout> </AuthAccount>} />
              )
            } else if (item.child) {
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
