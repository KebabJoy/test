import styled from 'styled-components';
import React, { Component } from 'react';
import Link from 'next/link';

const Wrapper = styled.div`
    border-bottom: 1px solid rgba(0,0,0,.0975);
    height: 75px;
    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 60%;
        margin: 0 auto;
        line-height: 75px;
    }
    .instLogo a, a div{
        display: flex;
        align-items: center;
    }
    .border{
        height: 40px;
        width: 40px;
        border-right: 1px solid black;
    }
    .margin{
        margin-left: 8px;
    }
    input{
        padding:  0;
        border: 1px solid #dbdbdb;
        outline: none;
        border-radius: 3px;
    }
    input::placeholder{
        text-align: center;
        background: 32% url(../static/img/search.png) no-repeat;
        background-size: 10px;
        background-color: #fafafa ;
    }
    .nav img{
        height: 24px;
    }
    .nav{
        display: flex;
        width: 115px;
        justify-content: space-between;
    }
   
`

class Header extends Component{
    render(){
        return(
            <Wrapper>
                <div className="container">
                    <div className="instLogo">
                        <Link href='/' exact>
                            <a>
                                <div className="border"><img src="../static/img/instagram-new.png" height="30px" ></img></div>
                                <div className="margin"><img src="../static/img/inst__name.png"  height="50px"></img></div>
                            </a>
                        </Link>
                    </div>
                    <div className="search"><input placeholder="Поиск"></input></div>
                    <div className="nav">
                        <div className="recommendations"><Link href="#"><a><img src="../static/img/compass.png"></img></a></Link></div>
                        <div className="news"><Link href="/news"><a><img src="../static/img/heart.png"></img></a></Link></div>
                        <div className="profile"><Link href="/profile"><a><img src="../static/img/profile.png"></img></a></Link></div>
                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default Header;