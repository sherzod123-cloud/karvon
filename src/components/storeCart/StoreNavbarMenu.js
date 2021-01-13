import React, { useState } from 'react';
import cl from 'classnames'
import st from './storenavbarmenu.scss'
import { Nav, NavItem, Dropdown, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, NavLink, Button } from 'reactstrap';


function StoreNavbarMenu() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div>
            <Nav className={"storenavmenu"}>
                <NavItem>
                    <NavLink href="#" className={"navStyle"}>Today</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className={"navStyleChild"}>Products</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className={"navStyleChild"}>Top products</NavLink>
                </NavItem>
                {/*<Dropdown nav isOpen={dropdownOpen} toggle={toggle}>*/}
                {/*    <DropdownToggle nav caret>*/}
                {/*        Newest*/}
                {/*    </DropdownToggle>*/}
                {/*    <DropdownMenu>*/}
                {/*        <DropdownItem header>Header</DropdownItem>*/}
                {/*        <DropdownItem disabled>Action</DropdownItem>*/}
                {/*        <DropdownItem>Another Action</DropdownItem>*/}
                {/*        <DropdownItem divider />*/}
                {/*        <DropdownItem>Another Action</DropdownItem>*/}
                {/*    </DropdownMenu>*/}
                {/*</Dropdown>*/}
                <NavItem>
                    <NavLink>
                        <i className="fa fa-bars mt-3"/>
                    </NavLink>

                </NavItem>
                <NavItem className="for-border">
                    <NavLink>
                        <i className="fa fa-th-large mt-3 ml-3"></i>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <i className="fa fa-sort-amount-down mt-3"></i>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle nav caret className="dropText">
                                Newest
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Header</DropdownItem>
                                <DropdownItem disabled>Action</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavLink>
                </NavItem>

            </Nav>
        </div>
    );
};
export default StoreNavbarMenu;