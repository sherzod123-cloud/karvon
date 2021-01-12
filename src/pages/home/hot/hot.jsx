import React from 'react'
import st from './hot.module.scss'
import cx from 'classnames'
import { useEffect ,useState } from 'react';
import service from '../../../img/it_service.jpg'
import ind_1 from '../../../img/industry_1.jpg'
import ind_2 from '../../../img/industry_2.jpg'
import ind_3 from '../../../img/industry_3.jpg'
import ind_4 from '../../../img/industry_4.jpg'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import parser from 'react-html-parser';
import Slider from 'react-slick'

const Hot = (props) => {

    const { lang } = props.lang;
    const { type } = props.lang;

    console.log(props.data);


    return (
        <div className={cx(st.hot)}>
            <div>
                <h1 className={cx('home_blog_title')}> { lang.bloghome } </h1>
                <div className={cx(st.hot_items)}>
                    
                    <div className={cx(st.last_hot_card)}>
                        <HotCard data={props.data[0]} index='0' type={type} stil='main'/>
                    </div>

                    <div className={cx(st.hot_cards)}>
                        <div className={cx(st.hot_cards_item)}>
                            <HotCard data={props.data[1]} index='1' type={type} stil='simple'/>
                            <HotCard data={props.data[2]} index='2' type={type} stil='simple'/>
                        </div>
                        <div className={cx(st.hot_cards_item)}>
                            <HotCard data={props.data[3]} index='3' type={type} stil='simple'/>
                            <HotCard data={props.data[4]} index='4' type={type} stil='simple'/>
                        </div>
                    </div>

                    
                </div>

            </div>
        </div>
    );
}

function HotCard({index, data , type, stil}){
    console.log(index)
    return(
        <div className={cx(st.box, st[stil])}>
            <img className={cx(st.hot_card_img)} src={`http://umdsoft.uz${data.image}`} alt=""/>
            <Link to="/news" className={cx(st.content_h2)}>
                {data.title[type]}
            </Link>
            <p>
               { parser(data.description[type]) }
            </p>
            <button><Link to={ `/news/${data._id}`}>Davomini o'qish</Link></button>
        </div>
    )
}

const mstp = state => (state);

export default connect(mstp,null)(Hot);