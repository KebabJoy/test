import styled from 'styled-components';
import React, { Component } from 'react';
import Link from 'next/link';

const Wrapper = styled.div`
    display: flex;
    border-top: 1px solid #efefef;
    width: 60%;
    margin: 0 auto;
    justify-content: space-around;
    padding: 20px ;
    a{
        text-transform: uppercase;
        color: #262626;
        display: flex;
        align-items: center;
        text-decoration: none;
    }
   img{
       width: 24px;
       margin-right: 6px;
   }
`

class ProfileContent extends Component{
    render(){
        return(
            <Wrapper>
               <div className="main"><Link href="profile"><a><img src="../static/img/main.png"></img>публикации</a></Link></div>
               <div className="channel"><Link href="profile/channel"><a><img src="../static/img/igtv.png"></img>igtv</a></Link></div>
               <div className="saved"><Link href="profile/saved"><a><img src="../static/img/saved.png"></img>сохранено</a></Link></div>
               <div className="tagged"><Link href="profile/tagged"><a><img src="../static/img/tagged.png"></img>отметки</a></Link></div>
                
            </Wrapper>
        );
    }
}

export default ProfileContent;