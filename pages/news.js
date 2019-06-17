import styled from 'styled-components';
import Header from '../components/header';
const Wrapper = styled.div`

    
`

export default () => (
  <Wrapper>
    <Header></Header>
    <Footer></Footer>
    <style jsx global>{`
      body { 
        margin: 0;
      }
    `}</style>
  </Wrapper>
)
