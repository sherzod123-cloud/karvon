import React, { Component } from 'react'
import './home.scss'
import Premier from './premier/premier';
import Hot from './hot/hot';
import Ekspert from './ekspert/ekspert';
import Reyting from './reyting/reyting';
import Aksiya from './aksiya/aksiya';
import Hit from './hit/hit';
import Popular from './popular/popular';
import { InnerLoader } from '../../components'
import Axios from 'axios';
import { api, baseUrl } from '../../api/api';
import SignIn from './sign in/signIn';


class Home extends Component {

state = {
    loading : true,
    data : {
        slider : [],
        experts : [],
        hot : []
    }
}

componentDidMount(){
    // (async function(){
    //     try{
    //         const res = await api.get('/ui');
    //
    //         if(res.status == 200){
    //             this.setState({
    //                 data: {
    //                     slider:
    //                 }
    //             });
    //         }
    //     }catch(err){
    //         console.log(err);
    //     }
    // }())

    Axios.get(`${baseUrl}ui`)
        .then( res =>{
            this.setState({
                data : {
                    slider : res.data.slider,
                    experts : res.data.experts,
                    hot : res.data.goryachi
                }
            },()=>{
                this.setState({loading : false})
            })
        })
}

render() {
    if(this.state.loading){
        return(
            <InnerLoader/>
        )
    }else{
        return (
            <div>
                <Premier data={this.state.data.slider}/>
                 {/*<SignIn />*/}
                <div className="home">
                    <Hot data={this.state.data.hot}/>
                    <Ekspert data={this.state.data.experts}/>
                    <Reyting/>
                    <Aksiya data={this.state.data.experts}/>
                    <Hit/>
                    <Popular/>
                </div>
            </div>      
        );
    }
}

}

export default Home;