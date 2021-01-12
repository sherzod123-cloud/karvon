import React, {useState, useEffect, createRef} from 'react';
import st from './productInfo.module.scss';
import cl from 'classnames';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import {InnerLoader} from '../../components';
import {productApi} from '../../service/productService';
import ReactStars from 'react-rating-stars-component';
import parser from 'react-html-parser';
import carouselImg3 from './../../img/aksi_3.jpg'
import Swal from 'sweetalert2';
import user from '../../img/user.png';
import comment from '../../img/comment.svg';

function ProductWithAction(props) {

    const [id] = useState(props.match.params.id);
    const [product, setProduct] = useState({});
    const [comments, setComments] = useState([]);
    const [request, setRequest] = useState(true);
    const [hasInCart, setHasInCart] = useState(false);
    const slider = createRef();

    function update() {
        productApi.getProductById(id)
            .then(res => {
                setProduct(res.data.product[0]);
                setComments(res.data.comment);
                setRequest(false)
            })
    }


    useEffect(() => {
        productApi.getProductById(id)
            .then(res => {
                const isHave = props.cart.items.find(item => item.product._id === res.data.product[0]._id);
                if (isHave) {
                    setHasInCart(true)
                }
                setProduct(res.data.product[0]);
                console.log(res.data)
                setComments(res.data.comment);
                setRequest(false)
            })
    }, [])

    function format(str) {
        let a = "";
        while (str.length > 2) {
            a = str.slice(str.length - 3, str.length) + " " + a;
            str = str.slice(0, str.length - 3)
        }
        a = str + " " + a;
        return a;
    }

    return (
        request ?
            <InnerLoader/>
            :
            <div className="container">
                <div className={st.productInfo}>
                    <div className="row">
                        <div className="col-12 col-md-3">

                            <ul className={st.product_prices}>
                                <li><h3>Marketing oferti</h3></li>
                                <li><img src={carouselImg3} alt=""/> <span>{format(product.price)}</span></li>
                                <li><img src={carouselImg3} alt=""/> <span>{format(product.price)}</span></li>
                                <li><img src={carouselImg3} alt=""/> <span>{format(product.price)}</span></li>
                                <li><img src={carouselImg3} alt=""/> <span>{format(product.price)}</span></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-9">
                            <div className="row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to='/'> Bosh sahifa</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link to='/products'> Mahsulotlar </Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        {product.title.uz}
                                    </li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className={`col-12 col-md-6 ${st.preview}`}>

                                    <button className={st.chevron_left} onClick={() => slider.current.slickPrev()}><i
                                        className="fa fa-fw fa-chevron-left"></i></button>
                                    <button className={st.chevron_right} onClick={() => slider.current.slickNext()}><i
                                        className="fa fa-fw fa-chevron-right"></i></button>


                                    <Slider ref={slider} slidesToScroll={1} slidesToShow={1} autoplay={true}
                                            autoplaySpeed={3000}
                                            arrows={false} cssEase="ease-in" dots={false}>
                                        {
                                            product.images.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <img src={`http://umdsoft.uz${item}`} alt=""/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Slider>
                                </div>
                                <div className="col-12 col-md-6">
                                    <h2 className={st.title}> {product.title.uz} </h2>
                                    <ReactStars
                                        count={5}
                                        size={25}
                                        value={Number(product.rating)}
                                        isHalf={true}
                                        edit={false}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="orange"
                                    />
                                    <h3 className={st.price}> {format(product.price)}SUM</h3>
                                    <div className={st.seller_info}>
                                        <h5>Sotuvchi haqida malumot:</h5>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>Telefon: {product.author.phone} </td>
                                                <td>Email: {product.author.email} </td>
                                            </tr>
                                            <tr>
                                                <td>Faks: {product.author.phone} </td>
                                                <td> Sayt: www.esavdo.uz</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    Ijtimoiy tarmoq:
                                                    <a href="#"><i className="fab fa-telegram"></i></a>
                                                    <a href="#"> <i className="fab fa-facebook"></i> </a>
                                                    <a href="#"> <i className="fab fa-instagram"></i> </a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={st.actions}>
                                        <button onClick={(e) => {
                                            if (hasInCart) {
                                                Swal.fire("Eslatma !", "Maxsulot savatchada mavjud. Siz savatchaga o'tib uning miqdorini ko'paytirishingiz yoki kamaytirishingiz mumkun", "warning");
                                            } else {
                                                setHasInCart(true);
                                                props.addToCart({count: 1,
                                                    product: {
                                                        image: product.images[0],
                                                        title: product.title,
                                                        price: product.price,
                                                        _id: product._id
                                                    }
                                                });
                                                Swal.fire("Qo'shildi", "Maxsulot savatchaga qo'shildi", "success");
                                            }
                                        }}><i className="fa fw fa-shopping-cart"></i> Savatchaga <span>+1</span>
                                        </button>
                                        <button><i className="fa fa-fw fa-tag"></i> Yoqtirganlarga</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-12 mt-5">
                            <Tabs/>
                        </div>
                        <div className="col-12 py-5 px-0">
                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="offer">
                                    <div className={`d-flex justify-content-between ${st.products_table_header}`}>
                                        <p>Lorem ipsum dolor sit.</p>
                                        <button>
                                            <i className="fas fa-exchange-alt"/>
                                            <span>Lorem</span>
                                        </button>
                                    </div>
                                    <div className={st.products_table}>
                                        <table className='table'>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <button>Logo brand</button>
                                                </td>
                                                <td>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, vero.
                                                </td>
                                                <td>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
                                                    velit.
                                                </td>
                                                <td width='10%'>
                                                    <p>3 900 000</p>
                                                </td>
                                                <td>
                                                    <button>LoremLorem</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <button>Logo brand</button>
                                                </td>
                                                <td>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, vero.
                                                </td>
                                                <td>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
                                                    velit.
                                                </td>
                                                <td width='10%'>
                                                    <p>3 900 000</p>
                                                </td>
                                                <td>
                                                    <button>LoremLorem</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <button>Logo brand</button>
                                                </td>
                                                <td>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, vero.
                                                </td>
                                                <td>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
                                                    velit.
                                                </td>
                                                <td width='10%'>
                                                    <p>3 900 000</p>
                                                </td>
                                                <td>
                                                    <button>LoremLorem</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <button>Logo brand</button>
                                                </td>
                                                <td>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, vero.
                                                </td>
                                                <td>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
                                                    velit.
                                                </td>
                                                <td width='10%'>
                                                    <p>3 900 000</p>
                                                </td>
                                                <td>
                                                    <button>LoremLorem</button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="info">
                                    {
                                        parser(product.info.uz)
                                    }
                                </div>
                                <div className="tab-pane fade" id="description">
                                    {
                                        parser(product.description.uz)
                                    }
                                </div>
                                <div className="tab-pane fade" id="comments">
                                    <CommentPoster onSuccess={val => update()} productId={product._id}/>
                                    <div className="py-5">
                                        {
                                            comments.length > 0 ?
                                                <React.Fragment>
                                                    {
                                                        comments.map((item, index) => {
                                                            return (
                                                                <Comment data={item} key={index}/>
                                                            )
                                                        })
                                                    }
                                                </React.Fragment>
                                                :
                                                <div className={st.no_comment}>
                                                    <img src={comment} alt="none"/>
                                                    <p>Bu maxsulot uchun bildirilgan fikrlar mavjud emas . Birinchi
                                                        bo'lib fikr bildiring .</p>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

const mstp = state => (state);
const mdtp = dispatch => ({
    addToCart: (payload) => {
        dispatch({type: "ADD_TO_CART", payload: payload})
    }
})
export default connect(mstp, mdtp)(ProductWithAction);


function Tabs() {
    return (
        <ul className="nav nav-tabs py-3" role="tablist">
            <li className="nav-item">
                <a className={cl(st.navlist, "nav-link active")} data-toggle="tab" href="#offer">Takliflar va
                    narxlar</a>
            </li>
            <li className="nav-item">
                <a className={cl(st.navlink, "nav-link")} data-toggle="tab" href="#info">Maxsulot haqida malumot</a>
            </li>
            <li className="nav-item">
                <a className={cl(st.navlink, "nav-link")} data-toggle="tab" href="#description">Tarif</a>
            </li>
            <li className="nav-item">
                <a className={cl(st.navlink, "nav-link")} data-toggle="tab" href="#comments">Fikrlar</a>
            </li>
        </ul>
    )
}


function CommentPoster({productId, onSuccess}) {

    const [rate, setRate] = useState(0);
    const [comment, setComment] = useState("");
    const [req, setReq] = useState(false);

    function makeComment(e) {
        console.log(comment);
        e.preventDefault();
        if (!localStorage.getItem('token')) {
            Swal.fire("Xatolik", "Faqat avtorizatsiyadan o'tgan foydalanuvchilar fikr bildira olishadi . Iltimos saytga kiring yoki ro'yxatdan o'ting", "error")
        } else {
            setReq(true);
            productApi.postComment(rate, productId, comment)
                .then(res => {
                    setReq(false);
                    onSuccess(res.comment)
                }, err => console.log(err))
        }
    }

    return (
        <form className={st.comment} onSubmit={makeComment}>
            <h4>Fikr bildiring</h4>

            <div className="form-group">
                <label htmlFor="commentText">Fikringiz matnini kiriting</label>
                <textarea onChange={e => setComment(e.target.value)}
                          placeholder="Maxsulot menga yoqdi. Sifati va narxi ham ancha yaxshi" className="form-control"
                          required id="commentText"></textarea>
            </div>
            <button disabled={req} className={st.comment_submit}> Fikr qoldirish {req &&
            <i className="fa fa-fw fa-circle-notch fa-spin"></i>} </button>
        </form>
    )
}

function Comment({data}) {
    return (
        <div className={cl(st.comments_list,)}>
            <img src={user} alt="Foydalanuvchi rasmi" className="mx-1"/>
            <div className={st.comments_list_body}>
                <h5> {data.author.name} </h5>
                <time><i className="fa fa-fw fa-calendar"></i> {data.date.slice(0, 10)} <i
                    className="fa fa-fw fa-clock"></i> {data.date.slice(11, 16)} </time>
                <p>
                    {data.comment}
                </p>
            </div>
        </div>
    )
}