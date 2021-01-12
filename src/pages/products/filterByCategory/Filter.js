import React, {Component, useState} from 'react';
import st from "../products.module.scss";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

const kategoriyalar = [
    {
        id:1,
        title:"Computers",
        htmlFor:1
    },
    {
        id:2,
        title:"Phone",
        htmlFor:2
    },
    {
        id:3,
        title:"TV",
        htmlFor:3
    },
    {
        id:4,
        title:"Lights",
        htmlFor:4
    },
    {
        id:5,
        title:"Fridges",
        htmlFor:5
    },
    {
        id:6,
        title:"Artel",
        htmlFor:6
    },
];


class Filter extends Component {
    render() {
        return (
            <div>
                {/*<h2 className={"mt-3 mb-3 ml-5 " +st.section_title}>Saralash</h2>*/}
                <ul className="list-unstyled list-group mb-5 mt-3">
                    {
                        kategoriyalar.map((item, index)=>{
                            return(
                                <li key={index} className="d-inline-block list-group-item nav-link ml-5">
                                    <input className="mt-3" type="checkbox" id={item.id}/>
                                    <label  htmlFor={item.htmlFor}><h5 className={"ml-3 mt-0"}>{item.title}</h5></label>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Filter;