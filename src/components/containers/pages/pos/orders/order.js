import React from "react";
import styled from "styled-components";
import OrderSelected from "./orderSelected";

function Order() {
	return (
		<Container>
			<OrderSelected></OrderSelected>
			<OrderContainer></OrderContainer>
		</Container>
	);
}

export default Order;

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
	height: 571px;
	background-image: linear-gradient(white, #f7f8f9);
`;
