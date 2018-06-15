import React,{Component} from 'react';
import PropTypes from 'prop-types'
import {Layout} from 'antd'


class Study extends Component {

    /**
     * 构造函数
     * @param {*如果需要在构造函数中使用props属性值，构造函数传入的第一个参数默认为props} props 
     */
    constructor(props){
        super(props);
        //需要通过改变state的值，才能重新渲染到Virtual DOM中，从而才能刷新界面的值
        this.state = {
            val : props.val ? props.val : 100
        }
    }

    /**
     * 类的方法默认是不会绑定 this 的
     * 改变val的值，val需要通过state在构造函数中定义，并且需要通过this.setstate()来修改
     */
    changeVal(){
        this.setState({
            val : this.state.val + 1
        });
    }

    /**
     * 给this.props的属性赋予默认值
     */
    static defaultProps = {
        name : '张小凡'
    }

    render(){
        //组件的属性可以在组件类的 this.props 对象上获取,调用函数需要给函数bind this
        return (
            <Layout style = {{backgroundColor : "#FFF"}}>
                <p>你好！{this.props.name}</p>
                <div>
                   <p>{this.state.val}</p>
                    <input type = 'button' value = '按钮' onClick = {this.changeVal.bind(this)} />
                </div>
            </Layout>
       );
    }
}

/**
 * 使用 PropTypes 进行类型检查
 */
Study.propTypes = {
    name : PropTypes.string.isRequired, //表示字符串类型，为必填
    val : PropTypes.number
}

export default Study;