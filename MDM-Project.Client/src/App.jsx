import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss'

import HomePage from './containers/HomePages/HomePage';
import Schedule from './containers/Schedule/Schedule';
import LookupTickets from './containers/LookupTickets/LookupTickets';
import Invoice from './containers/Invoice/Invoice';
import Login from './containers/Auth/Login/Login';
import Register from './containers/Auth/Register/Register';
import Information from './containers/User/Information/Information';
import TicketHistory from './containers/User/TicketHistory/TicketHistory';
import ResetPassword from './containers/User/ResetPassword/ResetPassword';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/lich-trinh" element={<Schedule />} />
      <Route path="/tra-cuu-ve" element={<LookupTickets />} />
      <Route path="/hoa-don" element={<Invoice />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/information" element={<Information />} />
      <Route path="/ticket-purchase-history" element={<TicketHistory />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App