import React, {Component} from "react";
import { Menu, Slider} from 'antd';
import {ReactDOM, unmountComponentAtNode} from 'react-dom'
import {} from 'antd/dist/antd.css'
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

class SliderSidebar extends Component{
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };



    render() {
        function onChange(value) {
            console.log('onChange: ', value);
        }

        function onAfterChange(value) {
            console.log('onAfterChange: ', value);
        }
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="light"
                            inlineCollapsed={this.state.collapsed}
                        >
                            <SubMenu key="sub1" className="mt-4" icon={<MailOutlined />} title="Price range">
                                <Menu.Item key={1}>
                                    <Slider
                                        // tooltipVisible={true}
                                        range
                                        dots={true}
                                        step={1}
                                        included={true}
                                        defaultValue={[20, 70]}
                                        onChange={onChange}
                                        onAfterChange={onAfterChange}
                                    />
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </div>
                {/*<Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />*/}

            </div>
        )
    }

}
export default SliderSidebar;



