import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Reports from "../pages/Reports";
import MasterData from "../pages/MasterData";
import Test1 from "./Components/Test1";
import Test2 from "./Components/Test2";
import Test3 from "./Components/Test3";
import Test4 from "./Components/Test4";
import Test5 from "./Components/Test5";
import Test6 from "./Components/Test6";
import Test7 from "./Components/Test7";
import TestCss from "./Components/TestCss";
import StateProps from "./Components/State/StateProps";
import ReducerProps from "./Components/State/ReducerProps";
import SayHello from "./Components/SayHello";
import Heading from "./Components/Heading";
import Layout from "./Components/Layout";
import Events from "./Components/Events";
import Container from "./Components/Container";
import Status from "./Components/Status";
import Input from "./Components/Input";
import Product from "./Components/Product";
import { Divider } from "@mui/material";
import LoggedIn from "./Components/LoggedIn";
import User from "./Components/User";
import Reducer from "./Components/Reducer";

function App() {
  const fullName = {
    first: "Ahmad",
    last: "Kasem",
  };

  const names = [
    {
      first: "Ahmad",
      last: "Kasem",
    },
    {
      first: "Abd",
      last: "Kasem",
    },
    {
      first: "Osama",
      last: "Kasem",
    },
    {
      first: "Mohammad",
      last: "Kasem",
    },
  ];

  const products = [
    {
      name: "Pc1",
      desc: "test1",
      price: 10,
      number: 967645656,
    },
    {
      name: "Pc2",
      desc: "test2",
      price: 20,
      number: 967775656,
    },
    {
      name: "Pc3",
      desc: "test3",
      price: 30,
      number: 967888656,
    },
    {
      name: "Pc4",
      desc: "test4",
      price: 40,
      number: 967444656,
    },
  ];

  return (
    <div className="App">
      {/* <BrowserRouter>
     <Routes>
      <Route path='/' exact element={<Dashboard />} />
      <Route path='/Reports' element={<Reports />} />
      <Route path='/MasterData' element={<MasterData />} />
     </Routes>
     </BrowserRouter> */}
      {/* <Test1 name="ahmad" age={25} isLoggin={true} />
     <Test2 name={name} names={names} />
     <Test3 status="loading" />
     <Test4>Hi TypeScript </Test4>
     <Test5>
     <Test4>Hi Test 5</Test4>
     </Test5>
     <Test6 onClick={(event,id) => console.log("Button is",event,id)
     } />
     <Test7 value='' handleChange={(e) => console.log(e.target.value)
     } />
     <TestCss styles={{backgroundColor:"red", fontFamily:"cursive"}} />
     <StateProps />
     <ReducerProps /> */}

      <SayHello
        name="TypeScript"
        age={21}
        isLogged={false}
        fullName={fullName}
        names={names}
      />

      <Divider style={{ padding: "10px" }} />

      <Heading name="ahmad">Text</Heading>

      <Divider style={{ padding: "10px" }} />

      <Layout>
        <Heading name="ahmad">Text</Heading>
      </Layout>

      <Divider style={{ padding: "10px" }} />

      <Events handleClick={(e, id) => console.log(e, id)} />

      <Divider style={{ padding: "10px" }} />

      <Container
        styles={{ backgroundColor: "red", display: "flex" }}
        text="Hello my friend"
      />

      <Divider style={{ padding: "10px" }} />

      <Status status="success" />

      <Divider style={{ padding: "10px" }} />

      <Input
        handleChange={(event, id) => console.log(event.target.value, id)}
        value=""
      />

      <Divider style={{ padding: "10px" }} />

      <Product productData={products} />

      <Divider style={{ padding: "10px" }} />

      <LoggedIn />

      <Divider style={{ padding: "10px" }} />

      <User />

      <Divider style={{ padding: "10px" }} />

      <Reducer />

      <Divider style={{ padding: "10px" }} />
    </div>
  );
}

export default App;
