import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, Image, NavigatorIOS, TextInput, View, Button } from 'react-native';
import InputComponent from '../components/inputComponent/inputComponent';
import { signUp } from '../actions/authenticate';
import LoginComponent from '../loginComponent/loginComponent';

class SignUpComponent extends React.Component {

    state = {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        studentID: '',
        isActive: false
    }

    registerUser = () => {
        this.props.signUp(this.state)
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.isSigned){
            nextProps.navigator.push({
                component: LoginComponent
            })
            return false;
        }
        return true;
    }

    render() {

        return (
            <View style={styles.container}>
                <InputComponent placeholder="Enter your name" changeEvent={(value) => this.setState({ username: value })} />
                <InputComponent placeholder="Enter your email" changeEvent={(value) => this.setState({ email: value })} />
                <InputComponent placeholder="Enter your student ID" changeEvent={(value) => this.setState({ studentID: value })} />
                <InputComponent placeholder="Enter your password" changeEvent={(value) => this.setState({ password: value })} />
                <InputComponent placeholder="Confirm your password" changeEvent={(value) => this.setState({ confirmPassword: value })}/>
                <Button onPress={this.registerUser} title="Sign Up" />
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

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (data) => dispatch(signUp(data))
    }
}

const mapStateToProps = (data) => {
    return {
        isSigned: data.authenication.isSigned
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);