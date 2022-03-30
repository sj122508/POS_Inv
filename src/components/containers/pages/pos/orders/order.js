import React from "react";
import styled from "styled-components";

function Order() {
	return <Container></Container>;
}

export default Order;

const Container = styled.div`
	display: flex;
	width: 25%;
	min-height: calc(100vh-70px);
	margin: 7px 7px 7px 7px;
	border-radius: 3px;
	box-shadow: 0.5px 0.5px 10px #d6dbdf;
	background-image: linear-gradient(white, #f7f8f9);
`;
