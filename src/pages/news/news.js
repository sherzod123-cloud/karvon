import React from 'react'
import './news.scss'
import Axios from 'axios';
import { api, baseUrl } from '../../api/api';
import { InnerLoader } from '../../components';
import hot from '../home/hot/hot';

class News extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loading: true,
            data: {
                hot: []
            }
        }
    }
   

    componentDidMount() {
        Axios.get(`${baseUrl}ui`)
        .then( res => {
            console.log(res);
            this.setState({
                data : {
                    hot : res.data.goryachi
                }
            },()=>{
                this.setState({loading : false})
            })
        })
    }

    componentDidUpdate() {
        console.log(this.state.data.hot)
    }


    render() {
        if(this.state.loading){
            return(
                <InnerLoader />
            )
        }else{
            return (
                <div className="news">
                    <div className='last_news'>
                        <a href='#' className='block-title'>
                            <span>
                                So'nggi yangiliklar
                            </span>
                        </a>
                        <div className='mb-25'>
                            <a href='#' className='news-lenta'>
                                <div className='news-lenta__meta'>
                                    <span>
                                        10:02
                                    </span>
                                </div>
                                <span className='news-lenta__title'>
                                    Chimyonda qor ko'chish hafi e'lon qilindi
                                </span>
                            </a>

                            <a href='#' className='news-lenta'>
                                <div className='news-lenta__meta'>
                                    <span>
                                        10:02
                                    </span>
                                </div>
                                <span className='news-lenta__title'>
                                    Chimyonda qor ko'chish hafi e'lon qilindi
                                </span>
                            </a>

                            <a href='#' className='news-lenta'>
                                <div className='news-lenta__meta'>
                                    <span>
                                        10:02
                                    </span>
                                </div>
                                <span className='news-lenta__title'>
                                    Chimyonda qor ko'chish hafi e'lon qilindi
                                </span>
                            </a>

                            <a href='#' className='news-lenta'>
                                <div className='news-lenta__meta'>
                                    <span>
                                        10:02
                                    </span>
                                </div>
                                <span className='news-lenta__title'>
                                    Chimyonda qor ko'chish hafi e'lon qilindi
                                </span>
                            </a>

                            <a href='#' className='news-lenta'>
                                <div className='news-lenta__meta'>
                                    <span>
                                        10:02
                                    </span>
                                </div>
                                <span className='news-lenta__title'>
                                    Chimyonda qor ko'chish hafi e'lon qilindi
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className='current_news'>
                        <div className='current_news__header'>
                            <div className='current_news__header_meta'>
                                <div className='current_news__header_meta__date'>18:47 / 18.11.2020</div>
                                <div className='current_news__header_meta__view'>23744</div>
                                <div className='current_news__header_meta__share_news'> Ulashing</div>
                            </div>
                        </div>

                        <div className='current_news__content'>
                            
                            <div className='current_news__content_img'>
                                <img 
                                    // src='https://storage.kun.uz/source/6/E2GcoTE9oNOV8485c03b6hoGVS7E0QoV.jpg'
                                    src={`http://umdsoft.uz${this.state.data.hot[0].image}`}
                                />
                                <div className='current_news__content_img_caption'>
                                    Foto: Oliy Majlis Qonunchilik palatasi axborot xizmati
                                </div>
                            </div>

                            <div className='current_news__header_title'>
                                {this.state.data.hot[0].title.uz}
                            </div>

                            <h4>{this.state.data.hot[0].description.uz}</h4>

                            {/* <p>lSint amet dolor sit mollit qui duis reprehenderit commodo magna aliqua ullamco consectetur velit eiusmod. Reprehenderit aute deserunt duis pariatur minim nulla quis adipisicing occaecat tempor. Nisi id ad eu in dolore adipisicing culpa dolor consectetur anim consequat esse Lorem. Ad proident laboris nulla magna laborum id enim et. Minim non sunt incididunt pariatur sit amet.</p>
                            <p>lSint amet dolor sit mollit qui duis reprehenderit commodo magna aliqua ullamco consectetur velit eiusmod. Reprehenderit aute deserunt duis pariatur minim nulla quis adipisicing occaecat tempor. Nisi id ad eu in dolore adipisicing culpa dolor consectetur anim consequat esse Lorem. Ad proident laboris nulla magna laborum id enim et. Minim non sunt incididunt pariatur sit amet.</p> */}
                        </div>

                    </div>

                    <div className='advertisement'>
                        <div className='recommended_news'>
                            <a href='#' className='block-title'>
                                <span>
                                    Tavsiya etamiz
                                </span>
                            </a>

                            <div className='mb-25'>
                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>

                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>

                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>

                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>

                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className='much_readed'>
                            <a href='#' className='block-title'>
                                <span>
                                    Ko'p o'qilgan
                                </span>
                            </a>
                            <div className='mb-25'>
                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>

                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>

                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>

                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>

                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>      
            );
        }

    }
}

export default News;