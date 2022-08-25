import styled from "styled-components";
import { mobile } from "../responsive";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';


const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
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
  ${mobile({ display: "none" })}
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
  ${mobile({ backgroundColor: "#fff8f8" })}
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
                <Logo>ROSEPET</Logo>
                <Desc>
                    RosePet không chỉ mang đến cho bạn chú cún cưng mà bạn yêu thích.
                    Đến với RosePet bạn sẽ tìm cho mình được một người bạn trung thành. Từ người bạn này,
                    chúng ta thêm yêu thương cuộc sống và những người xung quanh. Hơn thế nữa,
                    người bạn mới còn giúp bạn rèn luyện tính kiên trì, chăm chỉ, có trách nhiệm, giàu tình yêu thương, nhân ái,...
                    từ những việc cho cún ăn, huấn luyện cún, đi thể dục cùng cún và đi cafe cùng cún . . .
                    Tôi tin chắc rằng bạn sẽ có cuộc sống ý nghĩa hơn khi có người bạn này bên cạnh.
                    Sẽ thật thú vị biết bao khi luôn có “người” vẫy đuôi chờ bạn về nhà mỗi ngày. Với sứ mệnh Gắn Kết Yêu Thương.
                    RosePet Hân Hạnh Và Cảm Ơn!
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>ROSEPET - Gán kết yêu thương</Title>
                <List>
                    <ListItem>Trang chủ</ListItem>
                    <ListItem>Giỏ hàng</ListItem>
                    <ListItem>Phụ kiện thú cưng</ListItem>
                    <ListItem>Tài khoản</ListItem>
                    <ListItem>Đơn hàng</ListItem>
                    <ListItem>Danh sách thú cưng</ListItem>
                    <ListItem>Điều kiện</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Liên hệ</Title>
                <ContactItem>
                    <HomeIcon style={{ marginRight: "10px" }} /> 176 Trần Phú, Thành Phố Huế
                </ContactItem>
                <ContactItem>
                    <PhoneIcon style={{ marginRight: "10px" }} /> 0123456789
                </ContactItem>
                <ContactItem>
                    <MailIcon style={{ marginRight: "10px" }} /> khanhquoc2920@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer