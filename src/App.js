import Home from "./components/Pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Pages/login/Login";
import List from "./components/Pages/list/List";
import Single from "./components/Pages/single/Single";
import New from "./components/Pages/new/New";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home/>}></Route>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>

          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
