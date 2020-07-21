import React from 'react'
import { connect } from 'react-redux'
import Shipper from './shipper'
import Admin from './admin'

const DashBoard = ({ authentication, navigation }) => {
    let permission = authentication.userInfo.permission
    switch (permission) {
        case 'shipper':
            return <Shipper navigation={navigation} />
            break;
        case 'admin':
            return <Admin />    
        default:
            break;
    }
}


const mapStateToProps = ({ authentication }) => ({ authentication })
export default connect(mapStateToProps)(DashBoard) 