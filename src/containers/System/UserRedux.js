import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class UserRedux extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {
        return (
            <div className="user-redux-container">
                <div className='title'>
                    Manage User Redux
                </div>
                <div className='user-redux-body'>
                    <div>Them moi nguoi dung</div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
