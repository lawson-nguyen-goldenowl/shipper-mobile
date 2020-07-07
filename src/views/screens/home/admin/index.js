import React, { useState } from 'react'
import { connect } from "react-redux";
import {
  View, Text
} from 'react-native'
import NavAdmin from "navigators/nav_admin";


const Admin = () => {
  const [display, setDisplay] = useState(null)
  return <NavAdmin />
}

export default connect()(Admin)
