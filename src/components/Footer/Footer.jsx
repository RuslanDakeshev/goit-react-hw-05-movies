import { FooterWrapper, Img,Nav,Text } from './Footer.styled';


export const Footer = () => {
    const image = 'https://img.zerkalo.io/720x720s/0a/f/marka_korabl.jpg';
  return (
    <FooterWrapper>
      <Nav>
              <Text>Made with Ukraine in the heart</Text>
              <Img src={image} alt="Картинка" width='100px'></Img>
      </Nav>
    </FooterWrapper>
  );
};