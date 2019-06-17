import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

const Wrapper = styled.div`

    
`

export default () => (
  <Wrapper>
    <Header></Header>
    
    <style jsx global>{`
      body { 
        margin: 0;
      }
    `}</style>
  </Wrapper>
)
