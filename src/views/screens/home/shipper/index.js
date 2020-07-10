import React from 'react'
import { connect } from "react-redux";
import NavShipper from "navigators/nav_shipper";


const Shipper = () => {
  return <NavShipper />
}

export default connect()(Shipper)
