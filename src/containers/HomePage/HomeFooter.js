import React, { Component } from 'react';
import { connect } from 'react-redux';




class HomeFooter extends Component {

    render() {

        return (
            <div className='home-footer'>
                <p>&copy; Copyright 2023 Kha Tang</p>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);