import React, { useEffect, useState } from 'react';
import st from './store.module.scss';
import {Button} from 'reactstrap'
import cl from 'classnames';
import { StoreCard } from '../../components';
import { connect } from 'react-redux';
import Filter from "../products/filterByCategory/Filter";
import StoreCardSidebar from "../products/storeCardSidebar/StoreCardSidebar";
import StoreNavbarMenu from "../../components/storeCart/StoreNavbarMenu";
import ShopBySidebar from "../products/shopbysidebar/ShopBySidebar";
import SliderSidebar from "../products/sliderSidebar/SliderSidebar";




function Store(props){

    const [stores, setStores] = useState(props.stores);
    const [request, setRequest] = useState(true);

    useEffect(()=>{
        setStores(props.stores)
    },[props.stores]);
    
    return(
        <div className="container-fluid" id="app">
            <div className={cl(st.store, "py-5 px-0")}>
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <h1 className="page_title ml-5">Do'konlar</h1>
                    </div>
                    <div className="col-12 col-lg-9 mt-0">
                        <StoreNavbarMenu/>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-3 col-12">
                        <Filter/>
                        <StoreCardSidebar/>
                        <ShopBySidebar/>
                        <SliderSidebar/>
                        <div>
                            <Button color="primary" size="lg" block className="mt-4 p-3 ml-2">Refline  Search</Button>
                            <Button outline color="info" size="lg" block className="mt-3 p-3 ml-2">Reset  Filter</Button>
                        </div>

                    </div>

                    <div className="col-12 col-lg-9 mt-5">
                        {
                            stores.data.map((item, index)=> {
                                return(
                                    <div className="animate__animated animate__fadeInLeft p-0">
                                        <StoreCard data={item} key={index}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/*<div className="col-12 col-lg-3">*/}
                    {/*    <h3 className={cl(st.adTitle)}>Reklama</h3>*/}
                    {/*    <div className={cl(st.ads)}>*/}
                    {/*        <div><img src={require('../../img/mac.jpg')} alt="ad"/></div>*/}
                    {/*        <div><img src={require('../../img/s11.jpg')} alt="ad"/></div>*/}
                    {/*        <div><img src={require('../../img/jacket.jpg')} alt="ad"/></div>*/}
                    {/*        <div><img src={require('../../img/nike.jpg')} alt="ad"/></div>*/}
                    {/*        <div><img src={require('../../img/house.jpg')} alt="ad"/></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

const mstp = state => (state);
export default connect(mstp,null)(Store);