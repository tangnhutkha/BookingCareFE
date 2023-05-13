import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils/constant'
import * as actions from '../../../store/actions'
import './UserRedux.scss'
import TableManageUser from './TableManageUser';

class UserRedux extends Component {

    constructor(props) {
        super(props)
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            gender: '',
            phoneNumber: '',
            address: '',
            position: '',
            role: '',
            avatar: '',
        }
    }

    async componentDidMount() {
        this.props.getGenderStart()
        this.props.getPositionStart()
        this.props.getRoleStart()
        // try {
        //     let res = await getAllCodeService('gender')
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        // }
        // catch (e) {
        //     console.log(e)
        // }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let genders = this.props.genderRedux
            this.setState({
                genderArr: genders,
                gender: genders && genders.length > 0 ? genders[0].key : ''
            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            let positions = this.props.positionRedux
            this.setState({
                positionArr: positions,
                position: positions && positions.length > 0 ? positions[0].key : ''
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let roles = this.props.roleRedux
            this.setState({
                roleArr: roles,
                role: roles && roles.length > 0 ? roles[0].key : ''
            })
        }
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                gender: '',
                phoneNumber: '',
                address: '',
                position: '',
                role: '',
                avatar: '',
            })
        }
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput()
        if (isValid === false) return

        //fire redux action
        this.props.createNewUser({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            email: this.state.email,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            gender: this.state.gender,
            roleId: this.state.role,
            positionId: this.state.position
        })

        this.props.fetchUserRedux()
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state }

        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })

    }

    checkValidateInput = () => {
        let isValid = true
        let arrCheck = ['email', 'password', 'firstName', 'lastName',
            'phoneNumber', 'address']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false
                alert('Is Valid ' + arrCheck[i])
                break
            }
        }
        return {
            isValid
        }
    }
    render() {
        let language = this.props.language
        let genders = this.state.genderArr
        let positions = this.state.positionArr
        let roles = this.state.roleArr

        let { email, password, firstName, lastName, gender,
            phoneNumber, address, position, role } = this.state
        return (

            <div className="user-redux-container">
                <div className='title'>
                    Manage User Redux
                </div>
                <div className='user-redux-body'>
                    <div><FormattedMessage id="manage-user.add" /></div>
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-3 mt-3'>
                                <label><FormattedMessage id="manage-user.email" /></label>
                                <input className='form-control' type='email'
                                    value={email}
                                    onChange={(event) => { this.onChangeInput(event, 'email') }}
                                >
                                </input>
                            </div>
                            <div className='col-3 mt-3'>
                                <label><FormattedMessage id="manage-user.password" /></label>
                                <input className='form-control' type='password'
                                    value={password}
                                    onChange={(event) => { this.onChangeInput(event, 'password') }}
                                ></input>
                            </div>
                            <div className='col-3 mt-3'>
                                <label><FormattedMessage id="manage-user.first-name" /></label>
                                <input className='form-control' type='text'
                                    value={firstName}
                                    onChange={(event) => { this.onChangeInput(event, 'firstName') }}
                                ></input>
                            </div>
                            <div className='col-3 mt-3'>
                                <label><FormattedMessage id="manage-user.last-name" /></label>
                                <input className='form-control' type='text'
                                    value={lastName}
                                    onChange={(event) => { this.onChangeInput(event, 'lastName') }}
                                ></input>
                            </div>
                            <div className='col-3 mt-3'>
                                <label><FormattedMessage id="manage-user.phone-number" /></label>
                                <input className='form-control' type='text'
                                    value={phoneNumber}
                                    onChange={(event) => { this.onChangeInput(event, 'phoneNumber') }}
                                ></input>
                            </div>
                            <div className='col-9 mt-3'>
                                <label><FormattedMessage id="manage-user.address" /></label>
                                <input className='form-control' type='text'
                                    value={address}
                                    onChange={(event) => { this.onChangeInput(event, 'address') }}
                                ></input>
                            </div>
                            <div className='col-3 mt-3'>
                                <label><FormattedMessage id="manage-user.gender" /></label>
                                <select className='form-control'
                                    value={gender}
                                    onChange={(event) => { this.onChangeInput(event, 'gender') }}
                                >
                                    {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>
                                                    {language === LANGUAGES.VI ? item.value_vi : item.value_en}
                                                </option>
                                            )
                                        })}
                                </select>
                            </div>
                            <div className='col-3 mt-3'>
                                <label><FormattedMessage id="manage-user.position" /></label>
                                <select className='form-control'
                                    value={position}
                                    onChange={(event) => { this.onChangeInput(event, 'position') }}
                                >
                                    {positions && positions.length > 0
                                        && positions.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>
                                                    {language === LANGUAGES.VI ? item.value_vi : item.value_en}
                                                </option>
                                            )
                                        })}

                                </select>
                            </div>
                            <div className='col-3 mt-3'>
                                <label><FormattedMessage id="manage-user.role-id" /></label>
                                <select className='form-control'
                                    value={role}
                                    onChange={(event) => { this.onChangeInput(event, 'role') }}
                                >
                                    {roles && roles.length > 0
                                        && roles.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>
                                                    {language === LANGUAGES.VI ? item.value_vi : item.value_en}
                                                </option>
                                            )
                                        })}
                                </select>
                            </div>
                            <div className='col-3 mt-3'>
                                <label><FormattedMessage id="manage-user.image" /></label>
                                <div>
                                    <input id='previewImg' type='file' hidden></input>
                                    <label className='label-upload' htmlFor='previewImg'>Tải ảnh <i className="fas fa-upload"></i></label>
                                    <div className='preview-image'></div>
                                </div>
                            </div>
                            <div className='col-12 mt-4'>
                                <button className='btn btn-primary' onClick={() => this.handleSaveUser()}><FormattedMessage id="manage-user.save" /></button>
                            </div>
                            <div className='col-12 mt-4'>
                                <TableManageUser />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        positionRedux: state.admin.position,
        roleRedux: state.admin.roles,
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
