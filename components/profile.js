import styled from 'styled-components';
import React, { Component } from 'react';
import ProfileHeader from '../components/profileHeader';
import Footer from '../components/footer';
import ProfileContent from './profileContent';
import ProfileNav from './profileNav';
import Link from 'next/link';


const Wrapper = styled.div`
  
   background: #fafafa;
   display: flex;
   flex-direction: column;
`

class Profile extends Component{
    render(){
        return(
            <Wrapper>
                
                <ProfileHeader></ProfileHeader>
                <ProfileNav></ProfileNav>
                <ProfileContent></ProfileContent>
                <Footer></Footer>
            </Wrapper>
        );
    }
}

export default Profile;