import { Routes,Route } from "react-router-dom";
import Registration from "./Component/Registration";
import Login from "./Component/Login";
import Home from "./Component/Home";


function App() {

  return (
    <div style={{textAlign:'center'}}>
      <Routes >
        <Route  path="/" Component={Registration}/>
        <Route  path="/login" Component={Login} />
        <Route  path="/home" Component={Home}/>
      </Routes>

    </div>
  );
}

export default App;
