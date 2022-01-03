//import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
//import Product from "./components/Product";
// import Cart from "./pages/Cart";
//import { Home } from "@material-ui/icons";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom"


const App = () => {
  return (
    <>
      <Home/>
       <Login/>
      <Register/>
      {/* <Cart/> */}
      <ProductList/> 
      {/* <Product/> */}
    </>

   )
}
//     <Router>
//       <Routes>
//         <Route path="/">
//           <Home/>
//         </Route>
//         <Route path="/products">
//           <ProductList/>
//         </Route>
//       </Routes>
//     </Router>
  


//    )

// };

// export default App;

// export default function App() {
//   return (
//     <Router>
//       <div>
        
//         <Switch>
//           <Route path="/">
//             <Home />
//           </Route>
//           <Route path="/products">
//             <ProductList/>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }


export default App;