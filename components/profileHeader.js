import styled from 'styled-components';
import React, { Component } from 'react';
import Link from 'next/link';

const Wrapper = styled.div`
    font-family: 'Noto Sans HK', sans-serif;
    display: flex;
    width: 40%;
    margin: 0 auto;
    padding: 60px 20px 0 20px;
    margin-bottom: 44px;
    a{
        text-decoration: none;
        color: black
    }
    h1, p{
        margin: 0;
    }
    .avatar{
        margin: 0 70px;
    }
    .edit{
        border: 1px solid #dbdbdb;
        background: #fff;
        font-size: 14px;
        padding: 5px 9px;
    }
    .avatar img{
        border-radius: 50%;
        width: 165px;
    }
    .private__settings, .social__stats{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 370px;
        margin-bottom: 20px;
    }
    .edit:hover{
        cursor: pointer;
    }
    .nickname{
        font-size: 28px;
        font-weight: 300;
    }
    .settings,.settings img{
        height: 30px;
    }
    .settings:hover{
        cursor: pointer;
    }
    .header__block{
        display: flex;
        flex-direction: column;
    }
    .name h1:first-letter{
        font-size: 150%;
    } 
    .name h1:first-child{
        margin-right: 10px;
    }
    .name h1{
        font-size: 16px;
    }
    .personal .name{
        display: flex;
    }
    .status{
        color: #262626;
    }
   
`

class ProfileHeader extends Component{
    render(){
        return(
            <Wrapper>
                <div className="avatar"><img src="../static/img/lean.jpg"></img></div>
                <div className="header__block">
                    <div className="private__settings">
                        <div className="nickname">kebabjoy</div>
                        <div className="edit"><Link href="/edit" ><a>Редактировать профиль</a></Link></div>
                        <div className="settings"><img src="../static/img/gear.png"></img></div>
                    </div>  
                    <div className="social__stats">
                        <div className="imgs">Публикаций</div>
                        <div className="followers">Подписчиков:</div>
                        <div className="followings">Подписок:</div>
                    </div>
                    <div className="personal">
                        <div className="name"><h1>никита</h1> <h1>сидоров</h1></div>
                        <div className="status"><p>asdjhdsklfklsd</p></div>
                    </div>
                </div>
                 <style jsx global>
                 {`
                    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+HK:300,400&display=swap');
                `}</style>
            </Wrapper>
        );
    }
}

export default ProfileHeader;