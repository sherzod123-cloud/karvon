import React from 'react'
import st from "../personal/personal.module.scss";
import style from '../sign-up.module.scss';
import cx from 'classnames'
import { useState } from 'react';
import { Redirect } from "react-router-dom";
import { authApi } from '../../../service/authService';


const Personal = () => {

    //Data to be sent to the backend
    const [data,setData] = useState({
        name : "",
        phone : "",
        password : "",
        confirm : "",
        email : "",
        accept : false,
        type : "personal"
    })

    //States for handling request process and response
    const [requestProcess , setRequestProcess] = useState({
        isRequest : false,
        isError : false,
        isSuccess : false
    })

    //Function that makes a post request to backend
    const register = e => {
        setRequestProcess( prev => ({...prev , isRequest : true }))
        e.preventDefault();
        authApi.register(data).then( res => {
            console.log(res)
            localStorage.setItem('token',res.data.token)
            setRequestProcess({ isError : false , isRequest : false , isSuccess : true });
            console.log(localStorage.getItem('usersDatum'))
        },err => console.log(err.request.response))
    }

    //Main registration form
    return (
        <React.Fragment>
            <h1 className={cx(style.sign_up_h1)}>Ro'yxatdan o'tish</h1>
            <h4 className={cx(style.sign_up_h4)}>Kategoriya tanlang</h4>
            <div className={cx('row justify-content-center')}>
                <div className={cx('col-6 col-md-4')}>
                    <div className={cx(style.card, data.type === "personal" ? style.blue : null)} onClick={() => setData({...data , type : "personal"})}>
                        <i className={cx(style.card_icon, 'fa fa-user-tie')}></i>
                        <h5 className={cx(style.card_h5)}>Shaxsiy kabinet</h5>
                    </div>
                </div>
                <div className={cx('col-6 col-md-4')}>
                    <div className={cx(style.card, data.type === "business" ? style.blue : null)} onClick={() => setData({...data , type : "business"})}>
                        <i className={cx(style.card_icon, 'far fa-handshake')}></i>
                        <h5 className={cx(style.card_h5)}>Biznes uchun</h5>
                    </div>
                </div>
            </div>
            <div className={cx(style.register_section)}>
                <div className={cx(st.personal)}>
                    <form onSubmit={ e => register(e) }>
                        <div className={cx('row')}>
                            <div className={cx('col-12 my-2')}>
                                <div className={cx('form-group')}>
                                    <label className={cx(st.label)}>foydalanuvchi ismi</label>
                                    <input type="text" className={cx(st.input, 'form-control')}
                                    onChange={ e => setData({...data , name : e.target.value})} placeholder="Ismingiz" required/>
                                </div>
                            </div>
                            <div className={cx('col-12 my-2')}>
                                <div className={cx('form-group')}>
                                    <label className={cx(st.label)}>email manzilingiz</label>
                                    <input type="email" className={cx(st.input, 'form-control')}
                                    onChange={ e => setData({...data , email : e.target.value })} placeholder="email" required/>
                                </div>
                            </div>
                            <div className={cx('col-12 my-2')}>
                                <div className={cx('form-group')}>
                                    <label className={cx(st.label)}>telefon raqam</label>
                                    <input type="tel" className={cx(st.input, 'form-control')}
                                    onChange={ e => setData({ ...data , phone : e.target.value })} placeholder="+998XXYYYZZWW" required/>  
                                </div>
                            </div>
                            <div className={cx('col-12 my-2')}>
                                <div className={cx('form-group')}>
                                    <label className={cx(st.label)}>parol</label>
                                    <input type="password" className={cx(st.input, 'form-control')}
                                    onChange={ e => setData({ ...data , password : e.target.value })} placeholder="Parol" required/>
                                </div>
                            </div>
                            <div className={cx('col-12 my-2')}>
                                <div className={cx('form-group')}>
                                    <label className={cx(st.label)}>parolni tasdiqlang</label>
                                    <input type="password" className={cx(st.input, 'form-control')}
                                    onChange={ e => setData({...data , confirm : e.target.value })} placeholder="Parol" required/>
                                </div>
                            </div>
                            <div className={cx('col-12')}>
                                <div className="form-check my-2">
                                    <input className={cx("form-check-input",st.check)} type="checkbox"
                                    onChange={ e => setData({...data , accept : e.target.checked })} id="defaultCheck" required />
                                    <label className={("form-check-label", st.check_label)} htmlFor="defaultCheck">
                                        Saytdan foydalanish shartlariga roziman
                                    </label>
                                </div>
                            </div>
                            {
                                requestProcess.isSuccess && 
                                <div className={cx("col-12")}>
                                    <div className={cx("alert alert-success")}>
                                       <i className="fa fa-fw fa-check-circle"></i> <strong>Raxmat!</strong>Hisob muvaffaqiyatli yaratildi. Siz saytga kirishingiz mumkin.
                                    </div>
                                </div>
                            }
                            <div className={cx('mt-5 col-12')}>
                                <button type="submit" className={cx(st.submit)} disabled={ requestProcess.isRequest }>
                                    Ro'yxatdan o'tish{ requestProcess.isRequest && <i className="fa fa-fw fa-spin fa-circle-notch"></i> }
                                </button>
                            </div>
                        </div>      
                    </form>
                </div>
            </div>
            {
                requestProcess.isSuccess &&
                <Redirect to={localStorage.getItem('token')?'/profile':"/sign-up"}/>
            }
        </React.Fragment>
    );
}

export default Personal;
