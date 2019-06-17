import styled from 'styled-components';
import React, { Component } from 'react';
import Link from 'next/link';

const Wrapper = styled.div`
    height: calc(100vh - 100px);
   .grid{
       width: 60%;
       margin: 0 auto;
       display: flex;
       justify-content: space-between;
   }
   .grid__item{
       width: 28%;
       height: 300px;
   }
   .grid__item img{
        width: 100%;
        height: 330px;
        object-fit: cover;
       
   }
   
`

class ProfileContent extends Component{
    render(){
        return(
            <Wrapper>
               <div className="grid">
                   <div className="grid__item"><img src="../static/img/man.jpg"></img></div>
                   <div className="grid__item"><img src="../static/img/eva.jpg"></img></div>
                   <div className="grid__item"><img src="../static/img/gabby.png"></img></div>
               </div>
                
            </Wrapper>
        );
    }
}

export default ProfileContent;