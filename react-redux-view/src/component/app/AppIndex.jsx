import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Layout, Row, Col, Calendar, Progress, Divider, Card, Icon } from 'antd'


class AppIndex extends Component {

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
        const colProps = {
            span: 12,
            style: {
                height: 380,
                paddingTop: 16,
                paddingLeft: 16,
                backgroundColor: "#FFF",
                border: '10px solid #EAEAEA'
            }
        }

        //组件的属性可以在组件类的 this.props 对象上获取,调用函数需要给函数bind this
        return (
            <Layout >
                <Row>
                    <Col {...colProps}>
                        <Calendar fullscreen={false} />
                    </Col>
                    <Col {...colProps}>
                        <Row>
                            <Col span={4}>
                                Total Memory
                            </Col>
                            <Col span={20} >
                                <Progress percent={50} style={{ width: '80%' }} status="active" />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 80, textAlign: "center" }}>
                            <Col span={10}>
                                <Progress percent={75} type="dashboard" />
                                <p style={{ marginTop: 20 }}>Heap Memory</p>
                            </Col>
                            <Col span={10} >
                                <Progress percent={30} type="dashboard" />
                                <p style={{ marginTop: 20 }}>NoHeap Memory</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col {...colProps}>
                        <Divider orientation="left">Thread Info</Divider>
                        <Row>
                            <Col span={10}>
                                <Card bordered={false}>
                                    <div className="clear y-center">
                                        <div className="pull-left" style = {{marginRight: '20px'}}>
                                            <Icon type="message" className="text-2x text-danger" />
                                        </div>
                                        <div className="clear">
                                            <div className="text-muted">Thread Count</div>
                                            <h2>301</h2>
                                        </div>
                                    </div>
                                </Card>
                                <Card bordered={false}>
                                    <div className="clear y-center">
                                        <div className="pull-left" style = {{marginRight: '20px'}}>
                                            <Icon type="message" className="text-2x" />
                                        </div>
                                        <div className="clear">
                                            <div className="text-muted">Deadlock Thread Count</div>
                                            <h2>30122</h2>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={10}>
                                <Card bordered={false}>
                                    <div className="clear y-center">
                                        <div className="pull-left" style = {{marginRight: '20px'}}>
                                            <Icon type="message" className="text-2x text-info" />
                                        </div>
                                        <div className="clear">
                                            <div className="text-muted">Deamon Thread Count</div>
                                            <h2>802</h2>
                                        </div>
                                    </div>
                                </Card>
                                <Card bordered={false}>
                                    <div className="clear y-center">
                                        <div className="pull-left" style = {{marginRight: '20px'}}>
                                            <Icon type="message" className="text-2x text-success" />
                                        </div>
                                        <div className="clear">
                                            <div className="text-muted">Deadlocks Thread</div>
                                            <h2>102</h2>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col {...colProps}>
                        <Divider orientation="left">Class Load Info</Divider>
                        <Row>
                            <Col span={10}>
                                <Card bordered={false}>
                                    <div className="clear y-center">
                                        <div className="pull-left" style = {{marginRight: '20px'}}>
                                            <Icon type="message" className="text-2x text-danger" />
                                        </div>
                                        <div className="clear">
                                            <div className="text-muted">Class Load Count</div>
                                            <h2>301</h2>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={10}>
                                <Card bordered={false}>
                                    <div className="clear y-center">
                                        <div className="pull-left" style = {{marginRight: '20px'}}>
                                            <Icon type="message" className="text-2x text-info" />
                                        </div>
                                        <div className="clear">
                                            <div className="text-muted">Class Unload Count</div>
                                            <h2>802</h2>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

/**
 * 使用 PropTypes 进行类型检查
 */
AppIndex.propTypes = {
    name: PropTypes.string.isRequired, //表示字符串类型，为必填
    val: PropTypes.number
}

export default AppIndex;