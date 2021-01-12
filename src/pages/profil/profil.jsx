import React, {useState, useEffect} from 'react'
import st from './profil.module.scss'
import {productApi} from '../../service/productService';
import brin from '../../img/brin.jpg';
import {CreateStore} from '../../pages'
import {TreeSelect, ProductCard} from '../../components';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import decoder from 'jwt-decode';
import {connect} from 'react-redux';
import $ from 'jquery';
import cx from 'classnames';
import cart from '../../img/emptycart.png';
import Swal from 'sweetalert2';
import WishList from "../wishlist/wishlist";
import {api} from '../../api/api';

const Profil = (props) => {

    const id = decoder(localStorage.getItem('token')).id;
    const token = localStorage.getItem('token');
    let myProducts = [];
    props.products.data.forEach(product => {
        product.author._id === id && myProducts.push(product);
    })

    const [products, setProducts] = useState(myProducts);
    const [loadingImg, setLoadingImg] = useState(false);
    const [editModal, setEditModal] = useState(false);
    $('#personalInfo').addClass(st.content_item_visible);
    $('#personalInfo_a').addClass(st.user_menu_list_link_active);

    useEffect(() => {
        let pro = []
        props.products.data.forEach(product => {
            product.author._id === id && pro.push(product);
        })
        setProducts(pro);

        (async function () {
            try {
                const res = await api(token).get('auth/profile');

                console.log(res);
                if (res.status === 200) {
                    console.log(res);
                }

            } catch (err) {
                console.log(err);
            }
        }())
    }, [props])

    const chat = [
        {
            type_message: 'send',
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, reiciendis!",
            time: "08:55"
        },
        {
            type_message: 'receive',
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, reiciendis!",
            time: "08:55"
        },
        {
            type_message: 'receive',
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, reiciendis!",
            time: "08:55"
        },
        {
            type_message: 'send',
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, reiciendis!",
            time: "08:55"
        },
        {
            type_message: 'receive',
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, reiciendis!",
            time: "08:55"
        },
        {
            type_message: 'send',
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, reiciendis!",
            time: "08:55"
        },
        {
            type_message: 'receive',
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, reiciendis!",
            time: "08:55"
        },
        {
            type_message: 'send',
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, reiciendis!",
            time: "08:55"
        },
    ]
    const links = [
        {to: "createStore", title: "Do'kon yaratish", icon: "fa fa-plus"},
        {to: "createProduct", title: "Maxsulot qo'shish", icon: "fa fa-cart-plus"},
        {to: "myProducts", title: "Mening do'konim", icon: "fa fa-th-large"}
    ]
    const links2 = [
        {to: "personalInfo", title: "Shahsiy ma'lumotlar", icon: "fa fa-user"},
        {to: "personalChat", title: "Chat", icon: "fa fa-comment"},
        {to: "personalLike", title: "Yoqtirganlar", icon: "fa fa-heart"},
    ]
    const changeImg = (e) => {
        // setLoadingImg(true);
        // if(e.target.files[0]) {
        //     let res = api(token).post("", {
        //         file: e.target.files[0]
        //     });
        //     if(res.status == 200){
        //         let res = api(token).get("");
        //         setLoadingImg(false);
        //         if(res.status == 200){
        //             let img = document.querySelector('.edit_avatar img');
        //             img.src = URL.createObjectURL(res.data);
        //         }
        //     }
        // }
        let img = document.querySelector('.edit_avatar img');
        img.src = URL.createObjectURL(e.target.files[0]);
    }
    return (
        <div className={cx(st.user_body)}>
            <div className="row py-2">
                <div className="col-md-3">
                    <div className={cx(st.user__photo)}>
                        <label htmlFor="avatar" className="edit_avatar m-0">
                            <i className="fas fa-camera" title="Rasmni almashtirish"/>
                            <img className={cx(st.user__photo)} src={brin} alt="user"/>    
                        </label>
                        <input hidden id="avatar" onChange={e => changeImg(e)}  type="file" name="avatar" accept=".png, .jpeg, .jpg" />
                    </div>
                    <div className={st.user_menu}>
                        <ul className={st.user_menu_list}>
                            {
                                links.map((item, index) =>
                                    <li className={st.user_menu_list_item}>
                                        <a id={item.to + '_a'}
                                           className={st.user_menu_list_link}
                                           onClick={e => toggleTab(e, links, links2, index, e.currentTarget.getAttribute('tab-target'))}
                                           tab-target={`#${item.to}`}>
                                            <i className={item.icon}/> <span>{item.title}</span>
                                        </a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                <div className='col-md-9 px-5'>
                    <div className={cx(st.user_body_right)}>
                        <div className={(st.user_info)}>
                            <h1>Sergey Brin</h1>
                            <h4>Senior software engineer</h4>
                        </div>
                        <div className={st.user_menu}>
                            <ul className={st.user_menu_list}>
                                {
                                    links2.map((item, index) =>
                                        <li className={st.user_menu_list_item}>
                                            <a id={item.to + '_a'}
                                               className={st.user_menu_list_link}
                                               onClick={e => toggleTab(e, links2, links, index, e.currentTarget.getAttribute('tab-target'))}
                                               tab-target={`#${item.to}`}>
                                                <i className={item.icon}></i> <span>{item.title}</span>
                                            </a>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className={st.content}>
                            <div id="personalLike" className={cx(st.content_item)}>
                                <PersonalLike/>
                            </div>
                            <div id="personalChat" className={cx(st.content_item)}>
                                <PersonalChat chat={chat}/>
                            </div>
                            <div id="personalInfo" className={cx(st.content_item)}>
                                <PersonalInfo setEditModal={setEditModal} editModal={editModal}/>
                            </div>
                            <div id="createStore" className={cx(st.content_item)}>
                                <CreateStore/>
                            </div>
                            <div id="createProduct" className={cx(st.content_item)}>
                                <AddProduct props={props} onComplete={() => {
                                    productApi.getroducts()
                                        .then(res => {
                                            props.setProducts(res.data);
                                        })
                                }} categories={props.category}/>
                            </div>
                            <div id="myProducts" className={cx(st.content_item)}>
                                <div className="row p-0 bg-white">
                                    <div className="col-12 mb-2 p-3 ">
                                        {products.length > 0 &&
                                        <h1 className="text-center my-4">Mening maxsulotlarim</h1>}
                                    </div>
                                    {
                                        products.length > 0 ? products.map((item, index) => {
                                                return (
                                                    <div className="col-6 col-md-4 col-lg-3 p-0" key={index}>
                                                        <ProductCard lang="uz" product={item} props={props}/>
                                                    </div>
                                                )
                                            }) :
                                            <div className={st.empty}>
                                                <img src={cart} alt=""/>
                                                <h2>Siz hali hech qanday maxsulot qo'shmagansiz !</h2>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PersonalLike(props) {
    return (
        <WishList/>
    )
}
function PersonalChat(props) {
    return (
        <div className={st.personalChat}>
            {
                props.chat.map((item) => {
                    if (item.type_message === 'send') {
                        return (
                            <div className={st.bubbleWrapper}>
                                <div className={cx(st.inlineContainer, st.own)}>
                                    <div className={cx(st.ownBubble, st.own)}>
                                        {item.title}
                                    </div>
                                    <img className={st.inlineIcon} src={brin}/>
                                </div>
                                <span className={st.own}>{item.time}</span>
                            </div>
                        )
                    } else {
                        return (
                            <div className={st.bubbleWrapper}>
                                <div className={st.inlineContainer}>
                                    <img className={st.inlineIcon}
                                         src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"/>
                                    <div className={cx(st.otherBubble, st.other)}>
                                        {item.title}
                                    </div>
                                </div>
                                <span className={st.other}>{item.time}</span>
                            </div>
                        )
                    }
                })
            }
            <div className="input-group px-5 py-4">
                <input id="input__send" type="text" className="form-control py-3" placeholder="Nimadir yozing"
                       aria-describedby="basic-addon2"/>
                <div className='input-group-append'>
                    <button className="py-3 px-5 btn btn-info" id="basic-addon2">SEND</button>
                </div>
            </div>
        </div>
    )
}
function EditModal(props){
    return(
        <div class="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header px-5">
                        <h3 class="modal-title" id="exampleModalLabel">Malumotlarni Yangilash</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body px-5">
                        <div className={st.modal_edit_body}>
                            <div className='row py-3'>
                                <label htmlFor="name" className='col-2'>Name</label>
                                <input id='name' className="form-control col p-2"/>
                            </div>
                            <div className='row py-3'>
                                <label htmlFor="name1" className='col-2'>Name</label>
                                <input id='name1' className="form-control col p-2"/>
                            </div>
                            <div className='row py-3'>
                                <label htmlFor="name2" className='col-2'>Name</label>
                                <input id='name2' className="form-control col p-2"/>
                            </div>
                            <div className='row py-3'>
                                <label htmlFor="name3" className='col-2'>Name</label>
                                <input id='name3' className="form-control col p-2"/>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class={cx(st.btn_edit, "btn btn-secondary px-3")} data-dismiss="modal">Close</button>
                        <button type="button" class={cx(st.btn_edit, "btn btn-primary px-3")}  data-dismiss="modal">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
function PersonalInfo(props) {
    return (
        <div className={cx(st.personalInfo)}>
            <EditModal/>
            <div className={st.personalInfo_title}>
                <h4>Overview</h4>
                <div data-toggle="modal" data-target="#exampleModal" className={st.personalInfo_edit}>
                    <span>Edit</span>
                    <i className="fas fa-edit"/>
                </div>
            </div>
            <hr/>
            <div className={st.personalInfo_menu}>
                <div className='row'>
                    <div className='col-md-6'>
                        <ul>
                            <li><i className="fas fa-users"/> 2 Positive Refference</li>
                            <li><i className="fas fa-comment"/>Fluent English. Learn Italian</li>
                            <li><i className="fas fa-calendar"/>22, Male</li>
                            <li><i className="fas fa-user-friends"/>Member since 2015</li>
                        </ul>
                    </div>
                    <div className='col-md-6'>
                        <ul>
                            <li><i className="fas fa-suitcase-rolling"/>Travel Blogger</li>
                            <li><i className="fas fa-book"/>Penn State University</li>
                            <li><i className="fas fa-map-marker-alt"/>From West Chester, PA, USA</li>
                            <li><i className="fas fa-id-badge"/>Profile 100% complate</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AddProduct({categories, props, onComplete}) {

    const [request, setRequest] = useState(false);
    const [type, setType] = useState("user");
    const [data, setData] = useState({
        titleuz: "",
        titleru: "",
        category: "",
        company: "",
        descriptionuz: "",
        descriptionru: "",
        infouz: "",
        inforu: "",
        images: [],
        price: ""
    });

    useEffect(() => {
        const id = decoder(localStorage.getItem('token')).id;
        const type = decoder(localStorage.getItem("token")).role;
        setType(type);
        props.stores.data.forEach((store) => {
            if (store.director === id) {
                setData({...data, company: store._id})
            }
        })
    }, [])

    function handleSubmit(e) {
        let form = new FormData();
        let fullFilled = true;
        Object.keys(data).forEach(key => {
            if (data[key].length < 1) {
                fullFilled = false;
            }
            if (key === 'images') {
                for (let i = 0; i < data.images.length; i++) {
                    form.append(key, data.images[i]);
                }
            } else {
                form.append(key, data[key])
            }
        })

        if (fullFilled) {
            setRequest(true);
            productApi.addProduct(form)
                .then(res => {
                    setRequest(false);
                    onComplete();
                    Swal.fire({
                        title: "Qo'shildi",
                        text: "Maxsulot muvoffaqiyatli qo'shildi",
                        icon: "success"
                    })
                }, err => {
                    setRequest(false);
                    Swal.fire({
                        title: "Xatolik",
                        text: "Maxsulotni qo'shishda xatolik . Balki maydonlarni xato to'ldirgandirsiz ?",
                        icon: "error"
                    })
                });
        } else {
            Swal.fire("Xatolik", "Iltimos , barcha maydonlarni tog'ri to'ldiring", "error")
        }
    }

    return (
        <div className={cx(st.addProduct)}>
            <h1 className="text-center my-5">Mahsulot qo'shish</h1>
            <form encType="multipart/form-data" onSubmit={e => {
                e.preventDefault();
                handleSubmit();
            }}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="tiru">Sarlavha (ru)</label>
                            <input onChange={e => setData({...data, titleru: e.target.value})} type="text" id="tiru"
                                   required/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="tiuz">Sarlavha (uz)</label>
                            <input onChange={e => setData({...data, titleuz: e.target.value})} type="text" id="tiuz"
                                   required/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="category">Kategoriya</label>
                            <TreeSelect id="category" onChange={(val) => setData({...data, category: val})}
                                        data={categories} placeholder="Mahsulot kategoriyasini tanlang"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="descru">Ta'rif (ru)</label>
                            <ReactQuill onChange={e => setData({...data, descriptionru: e})}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="descuz">Ta'rif (uz)</label>
                            <ReactQuill onChange={e => setData({...data, descriptionuz: e})}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="inru">Malumot (ru)</label>
                            <ReactQuill onChange={e => setData({...data, inforu: e})}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="inuz">Malumot (uz)</label>
                            <ReactQuill onChange={e => setData({...data, infouz: e})}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="images">Rasmlarni yuklang</label>
                            <input onChange={e => setData({...data, images: e.target.files})} multiple type="file"
                                   id="images" required/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="price">Narxi</label>
                            <input type="text" onChange={e => setData({...data, price: e.target.value})} id="price"
                                   placeholder="UZS"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <button disabled={request} className={st.addProductSubmitButton} type="submit">
                            Qo'shish {request && <i className="fa fa-fw fa-circle-notch fa-spin"/>}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

function toggleTab(e, obj, obj2, index, id) {
    for (let i = 0; i < 3; i++) {
        $("#" + obj[i].to + "_a").removeClass(st.user_menu_list_link_active);
    }
    for (let i = 0; i < 3; i++) {
        $("#" + obj2[i].to + "_a").removeClass(st.user_menu_list_link_active);
    }
    $("#" + obj[index].to + "_a").addClass(st.user_menu_list_link_active);

    $(id).siblings().removeClass(st.content_item_visible);
    $(id).addClass(st.content_item_visible);
}

const mstp = state => (state);
const mdtp = dispatch => ({
    setProducts: (data) => {
        dispatch({type: "setProducts", payload: data})
    }
})
export default connect(mstp, mdtp)(Profil);