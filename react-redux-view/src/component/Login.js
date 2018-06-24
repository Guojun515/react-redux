import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Spin } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import qs from 'qs';

import { post } from './../axios/HttpUtils';
import { userAction } from './../store/login/login-action';


import './../style/login.less';

const FormItem = Form.Item;

class Login extends Component {

    state = {
        loading: false
    }

    /**
     * 改变状态，显示加载中
     * @param {*} value 
     */
    showLoading(value) {
        this.setState({
            loading: value
        });
    }

    /**
     * 点击登录的方法
     * @param {*} e 
     */
    handleSubmit(e) {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.showLoading(true);
                post('/user/doLogin', qs.stringify(values) ,{
                    headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }
                }).then((response) => {
                     this.showLoading(false);
                    if (response) {
                        this.props.createLogin({isLogin : true, ...response});
                        this.props.history.push("/app/index");
                    }
                }).catch ((e) => {
                    this.showLoading(false);
                });
            }
        });
        
        e.preventDefault();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login'>
                <div className='login-main'>
                    <div className='login-logo' />
                    <div className='login-content'>
                        <Spin spinning={this.state.loading}  >
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: '请输入用户名!' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: '请输入密码!' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(
                                        <Checkbox>记住我</Checkbox>
                                    )}
                                    <a className="login-form-forgot" href="">忘记密码</a>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        登录
                                </Button>
                                    <a href="">现在注册!</a>
                                </FormItem>
                            </Form>
                        </Spin>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * 设置属性的类型和校验
 */
Login.propTypes = {
    userName: PropTypes.string,
    createLogin: PropTypes.func.isRequired
}

/**
 * 把state对象映射到props中
 */ 
const mapStateToProps = (state) => {
    return {
        userName: state.userInfo.userName
    }
}

/**
 * 用来建立 UI 组件的参数到store.dispatch方法的映射
 */
const mapDispatchToProps = {
    createLogin : userAction.createLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login));