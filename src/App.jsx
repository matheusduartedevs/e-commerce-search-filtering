import Nav from './Navigation/Nav.jsx'
import Products from './Products/Products.jsx'
import Recommended from './Recommended/Recommended.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'

const App = () => {
  return (
    <>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
    </>
  )
}

export default App