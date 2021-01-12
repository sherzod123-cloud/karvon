import React, {useEffect, useState} from 'react'
import st from './blogs.module.scss'
import cx from 'classnames'
import BlogSidebar from './blogSidebar/blogSidebar';
import { BlogCard, Partner } from '../../components';
import radius from '../../img/radius2.jpg'
import Axios from "axios";
import {baseUrl} from "../../api/api";
import {Col, Row} from "reactstrap";


const Blogs = () => {

    const [data,setData] = useState({
            experts : [],
            hot : []
        });
    // const[data,setData] = useState([])

    useEffect(()=>{
        Axios.get(`${baseUrl}ui`)
            .then( res =>{
                setData({
                    experts : res.data.experts,
                    hot : res.data.goryachi
                });
            })
    },[data]);

    // const cardData = [
    //     {_id:1, img: img1, title: 'Davlat xizmatchilari uchun raqamli transformatsiya', avtor:'Admin', seenCount: Math.floor(Math.random() * 150), to:'/blogs/12',createdAt:new Date().toLocaleString(),description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloremque excepturi exercitationem iusto modi, pariatur saepe suscipit vel veritatis!'},
    //     {_id:2, img: img2, title: 'Davlat xizmatchilari uchun raqamli transformatsiya', avtor:'Admin', seenCount: Math.floor(Math.random() * 150), to:'/blogs/12',createdAt:new Date().toLocaleString(),description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloremque excepturi exercitationem iusto modi, pariatur saepe suscipit vel veritatis!'},
    //     {_id:3, img: img3, title: 'Davlat xizmatchilari uchun raqamli transformatsiya', avtor:'Admin', seenCount: Math.floor(Math.random() * 150), to:'/blogs/12',createdAt:new Date().toLocaleString(),description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta doloremque excepturi exercitationem iusto modi, pariatur saepe suscipit vel veritatis!'},
    // ];

    // const cards = cardData.map((i, index) => (
    //     <BlogCard datum={...i} key={index} />
    // ))

    return (
        <div className={cx(st.blogs)}>
        <div className={cx('container')}>
            <BlogSidebar/>
            <div className={cx(st.box)}>
                <img src={radius} alt="" className={cx(st.box_img)}/>
            </div>
            <h1 className={cx('home_blog_title')}>sarlavha</h1>
            <Row md={12}>
                {
                    data.hot.map((i, index) => {
                        return (
                            <Col md={3}sm={12} xs={12}>
                                <BlogCard data={i} key={i._id}/>
                            </Col>
                        )
                    })
                }
            </Row>
            <Row md={12} sm={12} xs={12}>
                    {
                        data.experts.map((i,index)=>{
                            return(
                                <Col md={3} sm={12} xs={12}>
                                    <BlogCard data={i} key={i._id}/>
                                </Col>
                            )
                        })
                    }
            </Row>
            {/*<div className={cx('row')}>*/}
            {/*   <div className={cx('col')}>*/}
            {/*      */}
            {/*   </div>*/}
            {/*</div>*/}
            <Partner />
        </div>
    </div>
    )
}

export default Blogs;