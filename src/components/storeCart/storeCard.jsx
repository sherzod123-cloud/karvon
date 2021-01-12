import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import st from './storecard.module.scss';
import cl from 'classnames';
import ReactStars from 'react-rating-stars-component';
import {Link} from 'react-router-dom';

function StoreCard({data}) {

    return (
        <div className={cl(st.storeCard)}>
            <div className={cl("row")}>
                <div className="col-12 col-sm-5 col-lg-3">
                    <img src={`http://umdsoft.uz${data.image}`} alt=""/>
                </div>
                <div className="col-12 col-sm-7 col-lg-8">
                    <div className={cl("row")}>
                        <div className="d-flex justify-content-between flex-wrap py-2 col-lg-6">
                            <h3>
                                {data.name}
                                {/*Lorem ipsum dolor sit, amet consectetur adipisicing elit.*/}
                                {/*Voluptate adipisci soluta nisi, vel maiores natus esse odit illum odio magni rem blanditiis*/}
                                {/*quis facere voluptatem asperiores nesciunt nostrum sapiente quos?*/}
                            </h3>
                        </div>
                        <div className="col-lg-5 offset-1">
                            <ReactStars
                                count={5}
                                size={20}
                                isHalf={true}
                                emptyIcon={<i className="fa fa-fw fa-star"></i>}
                                filledIcon={<i className="fa fa-fw fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                activeColor="#FFAA00"
                            />
                        </div>
                    </div>
                    <div className={cl("row")}>
                        <div className="col-lg-5">
                            <h3>Kompaniya haqida :</h3>
                        </div>
                        <div className="col-lg-5 offset-2">
                            <h4 className="ml-2">4.0</h4><h5 class="reviews">235 reviews</h5>
                        </div>
                    </div>
                    <div className={cl("row")}>
                        <div className="col-lg-12">
                            <p>{data.description.uz} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aut,
                                corporis culpa debitis dolore eaque eos exercitationem hic ipsum iusto nam nihil, odit
                                officia quidem reiciendis repellendus repudiandae sint. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className={cl("row")}>
                        <div className="col-lg-5">
                            <div className="d-flex justify-content-between flex-wrap">
                                <h3>
                                    <i className="bx bx-fw bx-phone"></i> 93 772-07-49
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-1">
                            {/*<button type="button" className="btn bg-blue">*/}
                            <Link to={`/market/${data._id}`}>
                                Do'konni ko'rish
                            </Link>
                            {/*</button>*/}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

const mstp = state => (state);
export default connect(mstp, null)(StoreCard);