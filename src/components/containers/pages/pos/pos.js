import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";
import Item from "./items/item";
import ItemsCategory from "./itemsCategory/itemsCategory";
import Order from "./orders/order";
// import { connect } from 'react-redux'

function POS() {
	return (
		<Container>
			{/* <Header>Hello</Header> */}
			<FilterArea></FilterArea>
			<ContainerBody>
				<ItemsCategory />
				<Item></Item>
				<Order></Order>
			</ContainerBody>
		</Container>
	);
}

export default POS;

/////////// STYLED COMPONENTS /////////////
const Container = styled.div`
	overflow: hidden;
	min-height: calc(100vh - 0px);
	background-image: linear-gradient(white, rgb(242, 246, 250));
`;

const Header = styled.div`
	display: flex;
	background-color: #427deb;
	height: 40px;
	align-items: center;
	overflow-x: hidden;
	padding: 0 15px;
	box-shadow: 0.5px 0.5px 5px #d6dbdf;
`;

const FilterArea = styled.div`
	display: flex;
	height: 55px;
	box-shadow: 0.5px 0.5px 5px #d6dbdf;
`;

const ContainerBody = styled.div`
	display: flex;
`;

const ContainerItem = styled.div`
	width: 75%;
	box-shadow: 0.5px 0.5px 5px #d6dbdf;
	min-height: calc(100vh - 130px);
	margin: 14px 0 14px 14px;
	border-radius: 6px;
`;

const ContainerOrder = styled.div`
	width: 25%;
	box-shadow: 0.5px 0.5px 5px #d6dbdf;
	min-height: calc(100vh - 130px);
	margin: 14px;
	border-radius: 6px;
`;
// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(POS)
