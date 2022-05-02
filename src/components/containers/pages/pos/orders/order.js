import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OrderSelected from "./orderSelected";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectItemSelected,
	selectCurrentPOS,
} from "../../../../../redux/pages/pos/pos.selector";

function Order({ itemSelected, pos }) {
	const [hasItemSelected, setHasItemSelected] = useState(false);

	useEffect(() => {
		setHasItemSelected(itemSelected !== "" ? true : false);
	}, [itemSelected]);
	return (
		<Container>
			<OrderSelected></OrderSelected>
			<OrderContainer hasItemSelected={hasItemSelected}></OrderContainer>
		</Container>
	);
}

const mapStateToProps = createStructuredSelector({
	itemSelected: selectItemSelected,
});
export default connect(mapStateToProps, null)(Order);

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 25%;
	margin: 7px 7px 7px 7px;
`;

const OrderContainer = styled.div`
	border: 0.5px solid #dedfe0;
	width: 100%;
	min-height: calc(100vh-70px);
	border-radius: 3px;
	box-shadow: 0.5px 0.5px 10px #d6dbdf;
	background-image: linear-gradient(white, #f7f8f9);
	height: ${(props) => (props.hasItemSelected ? "571px" : "648px")};
`;
