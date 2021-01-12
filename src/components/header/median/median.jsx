import React, {useState} from 'react'
import st from './median.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { CategoryList } from '../../';
import headset from '../../../img/headset.svg'
import { css } from 'jquery';


const Median = (props) => {
    const [value, setValue] = useState('All categories');
    const [open, setOpen] = useState(false);
    const [categori, setCategori] = useState([
        {value: 'Phones and accessories'},
        {value: 'Computers and office equipment'}
    ]);

    const list = categori.map((item, index) => (
        <li className={cx(st.li)} onClick={() => setValue(item.value)} key={index}>
            <p className={cx(st.p, 'text-truncate')}>
                {item.value}   
            </p>
        </li>
    ));

    const lang = props.lang.lang;

    return (
        <div className={cx(st.median)}>
            <div className={cx( st.row)}>
                <div className={cx(st.first_block)}>
                    <div className={cx(st.logo_content)}>
                        <Link className={cx(st.logo,"d-none d-md-inline-block")} to='/'>
                            Karvon
                        </Link>
                    </div>

                    <div className={cx(st.col)}>
                        <Link className={cx(st.categori)} onClick={ () => setOpen(!open)}>
                            <i className={`bx bx-fw bx-${open ? "x" : "menu-alt-left"}`} style={{fontSize : "13px", marginRight : "3px"}}></i>
                            <span className={cx(st.categori_text)}> {lang.allCategori} </span>
                        </Link>
                    </div>

                    <div className={cx(st.relative)}>
                        {
                            open && <CategoryList onClose={()=>{
                                        setOpen(false)
                                    }} data={props.category} type={props.lang.type}/>
                        }
                    </div>
                </div>

                <div className={cx(st.second_block)}>
                    <div className={cx(st.search_content)}>
                        <div className={cx(st.form_group)}>
                            <div className={cx('input-group')}>

                                <div className={cx('input-group-append')}>
                                    <div className={cx(st.select)}>
                                        <div className={cx(st.selected)}>
                                            <span className={cx(st.selected_text,'text-truncate')}>{value}</span> 
                                            <i className={cx('fas fa-caret-down d-inline-block')}></i>
                                        </div>
                                        <ul className={cx(st.ul)}>
                                            {list}
                                        </ul>
                                    </div>
                                    
                                </div>

                                <input type="search" placeholder={ lang.search } className={cx(st.input, 'form-control')} required />
                                
                                <div className={cx(st.search)}>
                                        <i className={cx('fas fa-search')}></i>
                                    </div>
                                
                            </div>
                        </div>

                        
                    </div>

                    <div className={cx(st.tools)}>
                        <figure>
                            <Link to='/wishlist'>
                                {/* <img src={require('../../../img/tag.svg')} alt=""/> */}
                                <i className={cx("far fa-heart", st.heart)}></i>
                                <figcaption> {lang.wishList} </figcaption>
                                <span className={cx(st.badge , st.badge_wishlist)}> {props.wishlist.count>99 ? "99+" : props.wishlist.count} </span>
                            </Link>
                        </figure>
                        <figure>
                            <Link to='/cart'>
                                {/* <img src={require('../../../img/cart.svg')} /> */}
                                <i class={cx("fas fa-cart-arrow-down", st.cart)}></i>
                                <figcaption> {lang.cart} </figcaption>
                                <span className={st.badge}> {props.cart.count>99 ? "99+" : props.cart.count} </span>
                            </Link>
                        </figure>
                    </div>
                </div>

            </div>
        </div>

    );
}

const mstp = state => (state);

export default connect(mstp,null)(Median);