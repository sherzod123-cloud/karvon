import React, {Component}  from "react";
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

const shopByCategory=[
    {
        id: 1,
        title: "Action",
        htmlFor: 1
    },
    {
        id: 2,
        title: "Fantasy",
        htmlFor: 2
    },
    {
        id: 3,
        title: "Advanture",
        htmlFor: 3
    },
    {
        id: 4,
        title: "History",
        htmlFor: 4
    },
    {
        id: 5,
        title: "Animation",
        htmlFor: 5
    },
    {
        id: 6,
        title: "Horror",
        htmlFor: 6
    },
    {
        id: 7,
        title: "Biography",
        htmlFor: 7
    },
    {
        id: 8,
        title: "Mystery",
        htmlFor: 8
    }
];
class ShopBySidebar extends Component{
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return(
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="light"
                            inlineCollapsed={this.state.collapsed}
                        >
                            <SubMenu key="sub1" icon={<MailOutlined />} title="Shop by category">

                                <ul className="list-unstyled list-group mb-5 ml-5 mt-3">
                                    {
                                        shopByCategory.map((item, index)=>{
                                            return(
                                                    <li key={index} className="d-inline-block list-group-item nav-link">
                                                        <input className="mt-3" type="checkbox" id={item.id}/>
                                                        <label htmlFor={item.htmlFor}><h5 className={"ml-3 mt-0"}>{item.title}</h5></label>
                                                    </li>


                                            )
                                        })
                                    }

                                </ul>
                            </SubMenu>
                        </Menu>
                    </div>
                </div>

            </div>
        )
    }


}
export default ShopBySidebar;


