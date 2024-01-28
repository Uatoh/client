import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
  text-align: justify;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: '#fff8f8' })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>IndoRetreading Shop</Logo>
        <Desc>
          Since 2003, we focus on producing the best quality of bus and truck
          retread tires and implementing Integrated Tire Management System
          (ITMS). Providing total solutions from quality product to technical
          support to tire management system support, we take on the
          responsibility to support our customers in their growth. We specialize
          in radial tire retread and radial tire repair. And many of our
          customers have enjoyed tire cost saving from having us implementing
          ITMS on their sites. Our production, marketing and tire teams are
          professional and highly skilled in tire knowledge. PT. Indo Retreading
          and Tire Services always aims to find tire solutions for our
          customers.
        </Desc>
        {/* <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer> */}
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link
              style={{ textDecoration: 'inherit', color: 'inherit' }}
              to="/"
            >
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              style={{ textDecoration: 'inherit', color: 'inherit' }}
              to="/products/iphones"
            >
              iPhone
            </Link>
          </ListItem>
          <ListItem>
            <Link
              style={{ textDecoration: 'inherit', color: 'inherit' }}
              to="/products/earphones"
            >
              Earphone
            </Link>
          </ListItem>
          <ListItem>
            <Link
              style={{ textDecoration: 'inherit', color: 'inherit' }}
              to="/products/speakers"
            >
              Speaker
            </Link>
          </ListItem>
          <ListItem>
            <Link
              style={{ textDecoration: 'inherit', color: 'inherit' }}
              to="/products/macbooks"
            >
              MacBook
            </Link>
          </ListItem>
          <ListItem>
            <Link
              style={{ textDecoration: 'inherit', color: 'inherit' }}
              to="/cart"
            >
              Cart
            </Link>
          </ListItem>
          <ListItem>
            <Link
              style={{ textDecoration: 'inherit', color: 'inherit' }}
              to="/wishlist"
            >
              Wishlist
            </Link>
          </ListItem>
          <ListItem>
            <Link
              style={{ textDecoration: 'inherit', color: 'inherit' }}
              to="/myaccount"
            >
              My Account
            </Link>
          </ListItem>
          <ListItem>
            <Link
              style={{ textDecoration: 'inherit', color: 'inherit' }}
              to="/track"
            >
              Order Tracking
            </Link>
          </ListItem>
          <ListItem>
            <Link
              style={{ textDecoration: 'inherit', color: 'inherit' }}
              to="/terms"
            >
              Terms
            </Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} /> Kw. Industri Multiguna 2
          No.12, Sukaresmi, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> (021) 89903580
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} />{' '}
          didik@indoretreading.com
        </ContactItem>
        {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
      </Right>
    </Container>
  );
};

export default Footer;
