import React from 'react'
import { connect } from "react-redux";
import NavAdmin from "navigators/nav_admin";


const Admin = () => {
  return <NavAdmin />
}

export default connect()(Admin)
