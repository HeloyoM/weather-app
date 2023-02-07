import { RouterProvider } from "react-router-dom"
import './App.css'
import Header from './components/common/Header/Header'
import routers from './utils/routes'
import ScreenWrapper from './screens/ScreenSrapper'

function App() {
  return (
    <div className='App'>
      <Header />
      <RouterProvider router={routers} />
    </div>
  )
}

export default App
