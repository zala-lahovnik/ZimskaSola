import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersProvider from "./context/UsersContext";
import Users from "./components/Users";
import Deposit from "./components/Deposit";
import Withdrawl from "./components/Withdrawl";
import Transfer from "./components/Transfer";

function App() {
  return (
      <UsersProvider>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Users />} />
                <Route path={'/deposit'} element={<Deposit />} />
                <Route path={'/withdraw'} element={<Withdrawl />} />
                <Route path={'/transfer'} element={<Transfer />} />
            </Routes>
        </BrowserRouter>
      </UsersProvider>
  );
}

export default App;
