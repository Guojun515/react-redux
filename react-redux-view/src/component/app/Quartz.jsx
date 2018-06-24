import React, { Component } from 'react';
import { Layout, Row, Col, Form, Input, Select, Button, Table, Divider } from 'antd';

const { Content } = Layout;
const Search = Input.Search;
const Option = Select.Option;

class Quartz extends Component {

    /**
     * 构造函数
     * @param {*如果需要在构造函数中使用props属性值，构造函数传入的第一个参数默认为props} props 
     */
    constructor(props) {
        super(props);
        //需要通过改变state的值，才能重新渲染到Virtual DOM中，从而才能刷新界面的值
        this.state = {

        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const colProps = {
            span: 4,
            style: {
                marginBottom: 16,
                marginRight: 16
            }
        }

        const btnColProps = {
            span: 1,
            style: {
                marginBottom: 16,
                marginRight: 24
            },
        }

        const dataSource = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        }];

        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            sorter: true
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            sorter: true
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
            sorter: true
        }];

        // rowSelection object indicates the need for row selection
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };

        const tableProps = {
            rowSelection,
            columns,
            dataSource,
            //loading : true,
            rowKey: 'key',
            onChange: (pagination, filters, sorter) => {

            }
        };

        //组件的属性可以在组件类的 this.props 对象上获取,调用函数需要给函数bind this
        return (
            <Layout style = {{backgroundColor : "#FFF", padding : 20}}>
                <Row>
                    <Col {...colProps}>
                        {getFieldDecorator("userName")(<Search placeholder="用户名" />)}
                    </Col>
                    <Col {...colProps}>
                        {getFieldDecorator("email")(<Search placeholder="邮箱" />)}
                    </Col>
                    <Col {...colProps}>
                        {getFieldDecorator("sex")(
                            <Select allowClear placeholder="性别" style={{ width: "100%" }}>
                                <Option value='1'>男</Option>
                                <Option value='0'>女</Option>
                            </Select>
                        )}
                    </Col>
                    <Col {...btnColProps}>
                        <Button type="primary" icon="search">查询</Button>
                    </Col>
                    <Col {...btnColProps}>
                        <Button>重置</Button>
                    </Col>
                </Row>
                <Divider/>
                <Content>
                    <Table {...tableProps} />
                </Content>
            </Layout>
        );
    }
}

export default Form.create()(Quartz);;