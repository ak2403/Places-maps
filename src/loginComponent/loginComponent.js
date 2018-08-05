import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, Image, NavigatorIOS, TextInput, View, Button } from 'react-native';
import UIInput from '../components/UIComponent/InputComponent';
import { authCheck } from '../actions';
import DashBoardComponent from '../dashBoardComponent/dashBoardComponent';

class LoginComponent extends React.Component {

    state = {
        username: '',
        password: ''
    }

    onSubmit = () => {
        this.props.authCheck(this.state);
    }

    componentDidMount() {
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.isAuth) {
            this.props.navigator.push({
                component: DashBoardComponent
            });
            return false;
        }
        return true;
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.loginView}>
                    <Image source={require("../img/logo.png")} style={styles.logoImg} />
                    <UIInput changeEvent={value => this.setState({ username: value })} />
                    <UIInput secureText={true} changeEvent={value => this.setState({ password: value })} />
                    <Button
                        disabled={(this.state.username && this.state.password) ? false : true}
                        onPress={this.onSubmit}
                        title='Sign In' />
                    <Text>Forgotten Password ?</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    loginView: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoImg: {
        width: 200,
        height: 200
    }
});

const mapDispatchToProps = dispatch => {
    return {
        authCheck: (data) => dispatch(authCheck(data))
    }
}

const mapStateToProps = (props) => {
    return {
        isAuth: props.authenication.isAuth,
        errorMsg: props.authenication.authErrorMsg
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);