import React from 'react';
import st from './reset.module.scss';
import cx from 'classnames';
import users from '../../img/users.png';
import { useState } from 'react';
import { authApi } from '../../service/authService';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Countdown from 'react-countdown';
import Entercode from '../entercode/entercode'


const cookie = new Cookies();
function Reset(){

    const [phone,setPhone] = useState("");
    const [request , setRequest ] = useState({
        error : false,
        process : false,
        success : false
    })
    const[success,setSuccess] = useState(false)
    const [disable,setDisable] = useState();
    const [code , setCode] = useState("");
    let [kodXato , setKodXato] = useState(false);


    const sendCode = e => {
        e.preventDefault();
        setRequest({ ...request , process : true});
        authApi.sendResetCode({ phone : phone })
        .then( res => {
            console.log(res.data);
            setRequest({ error : false, success:true,process : false})
            cookie.set('phone',phone,{ path : '/entercode' });
            //console.log(cookie.get('phone'))
            }, err => {
                console.log(err);
                setRequest({ error : true , success : false , process : false })
            })
    };
    const sendCodeAndPhone = e => {
        e.preventDefault();
        // setRequest({ ...request , process : true});
        authApi.sendResetCodeAndPhone({phone : phone,code:code })
            .then( res => {
                    console.log(res.data.success);
                    // setRequest({ error : false, success : true , process : false})
                    setSuccess(res.data.success)
                    cookie.set('phone',phone,{ path : '/entercode' });
                    // console.log(cookie.get('phone'))
                    if (!res.data.success){
                        setKodXato(true)
                    }
                },
                err => {
                    console.log(err);
                    setRequest({ error : true , success : false , process : false })
                })
    };

    return(
        <div className="my-5">
            <div className="container">
                <form className={cx("card p-3",st.reset)} style={{"display":!success?"block":"none"}} onSubmit={ sendCode}>
                    {/*<div className={"text-center"}>*/}
                    {/*    <img src={users} className={cx(st.reset_icon)} alt=""/>*/}
                    {/*</div>*/}
                    {
                        !request.success &&
                        <div>
                            <div className={"p-0 m-0"}>
                                <h2 className={cx(st.reset_title)}>Parolni unutdingizmi ?</h2>
                                <p className={cx(st.reset_description)}>Kodni yuborish uchun telefon raqamingizni kiriting.</p>
                            </div>
                            <div className={cx("input-group", st.reset_input)}>
                                <span className="input-group-prepend">
                                    <i className="fa fa-fw fa-phone"></i>
                                </span>
                                <input onChange={e => setPhone(e.target.value)} disabled={request.success}
                                       placeholder="+998991234567" required type="tel" className="form-control"/>
                            </div>
                        </div>
                    }
                    {
                        request.error && 
                        <div className="alert alert-danger mx-0 mx-sm-4">
                            <i className="fa fa-fw fa-exclamation-triangle"></i>&nbsp;
                            Kiritilgan raqam foydalanuvchisi ro'yxatdan o'tmagan
                        </div>
                    }
                    {
                        !request.success &&
                        <div className={cx("d-flex align-items-center justify-content-between flex-wrap",st.reset_links)}>
                            {/*<Link to='/entercode' className="mx-2"> Вы уже получили пароль? </Link>*/}
                            <button disabled={ request.success } type="submit" className={cx(st.reset_button)}>Kodni jo'natish
                                {
                                    request.process && <i className="fa fa-fw fa-circle-notch fa-spin"></i>
                                }
                            </button>
                        </div>
                    }
                </form>

                {
                request.success &&
                    <div>
                        <div className={"alert alert-success mx-0 mx-sm-4 "+cx(st.reset_code)} style={{"display":success?"none":"block"}}>
                            <i className="fa fa-fw fa-check-circle"></i>&nbsp; Parolni tiklash uchun kod {phone} ga yuborildi.SMS orqali olgan kodingizni kiriting.

                            <label className={cx(st.padding)}>
                                <Countdown className={"ml-3"} date={Date.now() +2*60*1000}
                                           daysInHours={true}/>
                            </label>
                            <div className={cx("input-group",st.entercode_input)}>
                            <span className="input-group-prepend">
                                <i className="fa fa-fw fa-lock"></i>
                            </span>
                                <form style={{width: "97%"}} onSubmit={sendCodeAndPhone} className={cx("card",st.reset)}>
                                    <input style={{"width":"100%"}} onChange={ e => setCode(e.target.value)} placeholder="Kodni bu yerga yozing" required
                                           type="text" className="form-control"/>
                                    <button type="submit" className={"btn btn-success"}>send</button>
                                </form>
                                <h6 style={{"display":kodXato?"block":"none",color:"red"}}>Quyidagi kod xato</h6>
                            </div>
                        </div>
                    </div>

            }
                <div className={"my-0 pt-0"} style={{"display":success?"block":"none"}}>
                    <Entercode/>
                </div>
            </div>
        </div>
    )
}
export default Reset;