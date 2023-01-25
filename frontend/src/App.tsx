import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersProvider from "./context/UsersContext";
import Users from "./components/Users";
import Deposit from "./components/Deposit";
import Withdrawl from "./components/Withdrawl";
import Transfer from "./components/Transfer";
import Navbar from "./components/Navbar";
import AddMember from "./components/AddMember";

function App() {
  return (
      <UsersProvider>

        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<><Navbar /><Users /></>} />
                <Route path={'/deposit'} element={<><Navbar /><Deposit /></>} />
                <Route path={'/withdraw'} element={<><Navbar /><Withdrawl /></>} />
                <Route path={'/transfer'} element={<><Navbar /><Transfer /></>} />
                <Route path={'/addMember'} element={<><Navbar /><AddMember /></>} />
            </Routes>
        </BrowserRouter>
      </UsersProvider>
  );
}

export default App;
