import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentPOS } from "../../../../../redux/pages/pos/pos.selector";

function OrderSelected({ pos }) {
	const [itemSelected, setItemSelected] = useState("");
	useEffect(() => {
		setItemSelected(pos.itemSelected);
	}, [pos]);
	return (
		<Container show={itemSelected === "" ? false : true}>
			<label>{itemSelected}</label>
			<h1>{pos.itemSelectedCount === "" ? "0" : pos.itemSelectedCount}</h1>
		</Container>
	);
}
const mapStateToProps = createStructuredSelector({
	pos: selectCurrentPOS,
});
export default connect(mapStateToProps, null)(OrderSelected);

const Container = styled.div`
	visibility: ${(props) => (props.show ? "visible" : "hidden")};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-content: center;
	height: ${(props) => (props.show ? "70px" : "0")};
	border: 0.5px solid #dedfe0;
	width: 100%;
	margin-bottom: ${(props) => (props.show ? "7px" : "0")};
	margin-right: 7px;
	border-radius: 3px;
	box-shadow: 0.5px 0.5px 10px #d6dbdf;
	background-image: linear-gradient(white, #f7f8f9);
	overflow-wrap: break-word;
	color: #676767;
	transition: all 0.6s;

	label {
		display: flex;
		align-items: center;
		padding: 15px 15px;
		width: 200px;
		text-align: left;
		font-weight: 800;
		font-size: 18px;
	}

	h1 {
		display: flex;
		align-items: center;
		padding: 15px;
		padding-left: 18px;
		max-width: 60px;
		font-weight: 800;
		font-size: 35px;
		border-left: 1px solid #9f9fa0;
		margin: 5px;
	}
`;
