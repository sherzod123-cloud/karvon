import React, {useState, Component, useEffect} from "react";
import { Menu, Button } from 'antd';
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




// submenu keys of first level
// const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

class StoreCardSidebar extends React.Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div style={{ width: 340, marginLeft: 28 }} >
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="red"
                    inlineCollapsed={this.state.collapsed}
                >
                    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

// ReactDOM.render(<StoreCardSidebar />, mountNode);

export default StoreCardSidebar;
// export default StoreCardSidebar;


// ReactDOM.render(<StoreCardSidebar />, mountNode);


// function StoreCardSideBar(){
//
//     const [openKeys, setOpenKeys] = React.useState(['sub1']);
//     const onOpenChange = keys => {
//         const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
//         if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
//             setOpenKeys(keys);
//         } else {
//             setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
//         }
//     };
//     return (
//             <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
//                 <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
//                     <Menu.Item key="1">Option 1</Menu.Item>
//                     <Menu.Item key="2">Option 2</Menu.Item>
//                     <Menu.Item key="3">Option 3</Menu.Item>
//                     <Menu.Item key="4">Option 4</Menu.Item>
//                 </SubMenu>
//                 <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
//                     <Menu.Item key="5">Option 5</Menu.Item>
//                     <Menu.Item key="6">Option 6</Menu.Item>
//                     <SubMenu key="sub3" title="Submenu">
//                         <Menu.Item key="7">Option 7</Menu.Item>
//                         <Menu.Item key="8">Option 8</Menu.Item>
//                     </SubMenu>
//                 </SubMenu>
//                 <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
//                     <Menu.Item key="9">Option 9</Menu.Item>
//                     <Menu.Item key="10">Option 10</Menu.Item>
//                     <Menu.Item key="11">Option 11</Menu.Item>
//                     <Menu.Item key="12">Option 12</Menu.Item>
//                 </SubMenu>
//             </Menu>
//         );
// };


