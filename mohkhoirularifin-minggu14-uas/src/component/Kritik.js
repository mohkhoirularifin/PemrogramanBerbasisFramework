import React, { Component } from 'react'
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";

class Kritik extends Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };
    
    render() {
        const { isLoggingOut, logoutError } = this.props;
        return (
            <div>
                <h1>Kritik</h1>
                <button
                    onClick={this.handleLogout}>Logout
                </button>
                {isLoggingOut && <p>Logging Out....</p>}
                {logoutError && <p>Error logging out</p>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError
    };
}

export default connect(mapStateToProps)(Kritik);
