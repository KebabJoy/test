import styled from 'styled-components';
import Header from '../components/header';
import Profile from '../components/profile';

const Wrapper = styled.div`
`

export default () => (
  <Wrapper>
    <Header></Header>
    <Profile></Profile>
    <style jsx global>{`
      body { 
        margin: 0;
      }
    `}</style>
  </Wrapper>
)
