import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`

const Option = styled.option``;

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Cửa hàng</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Danh sách thú cưng:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Các loại thú cưng hiện có trong RosePet
                        </Option>
                        <Option>Chó</Option>
                        <Option>Mèo</Option>
                        <Option>Rùa</Option>
                        <Option>Hamster</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Các loại phụ kiện
                        </Option>
                        <Option>Đồ chơi</Option>
                        <Option>Thức ăn</Option>
                        <Option>Chuồng</Option>
                        <Option>Sữa tắm</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Giá Sản phẩm:</FilterText>
                    <Select>
                        <Option selected>Mới nhất</Option>
                        <Option>Giá tiền cao đến thấp</Option>
                        <Option>Giá tiền thấp đến cao</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList