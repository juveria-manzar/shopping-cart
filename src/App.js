import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import Preview from "./components/Preview"
import Home from "./components/Home"

let App=()=>{
  return(
    <>
    <Router>
      <Navbar/>

      <Switch>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/preview">
          <Preview/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>

      </Switch>
      
    </Router>
    </>
  )
}

export default App