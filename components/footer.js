import styled from 'styled-components';
import React, { Component } from 'react';
import Link from 'next/link';

const Wrapper = styled.div`
    
    font-family:'Noto Sans HK', sans-serif;
    width: 60%;
    margin: 0 auto;
    .copyright{
        color:#999;
    }
    .sources{
        display: flex;
        justify-content: space-between;
        width: 80%
    }
    .sources a{
        text-decoration: none;
        color:#003569;
        text-transform: uppercase;
        font-size: 14px;
    }
`

class Footer extends Component{
    render(){
        return(
            <Wrapper>
                <div className="sources">
                    <a href="https://www.instagram.com/about/us/" target="_blank">о нас</a>
                    <a href="https://help.instagram.com" target="_blank">поддержка</a>
                    <a href="https://instagram-press.com" target="_blank">пресса</a>
                    <a href="https://www.instagram.com/developer/" target="_blank">api</a>
                    <a href="https://www.instagram.com/about/jobs/" target="_blank">вакансии</a>
                    <a href="https://help.instagram.com/519522125107875" target="_blank">конфиденциальность</a>
                    <a href="https://help.instagram.com/581066165581870" target="_blank">условия</a>
                    <a href="https://www.instagram.com/explore/locations/" target="_blank">директория</a>
                    <a href="https://www.instagram.com/directory/profiles/" target="_blank">профили</a>
                    <a href="https://www.instagram.com/directory/hashtags/" target="_blank">хэштеги</a>
                    <a href="#" target="_blank">язык</a>
                </div>
                <div className="copyright">© 2019 INSTAGRAM</div>
                 <style jsx global>
                 {`
                    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+HK:300,400&display=swap');
                `}</style>
            </Wrapper>
        );
    }
}

export default Footer;