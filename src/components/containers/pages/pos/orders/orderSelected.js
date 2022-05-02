import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentPOS } from "../../../../../redux/pages/pos/pos.selector";

function OrderSelected({ pos }) {
	const [itemSelected, setItemSelected] = useState("");
	const [itemSelectedCount, setItemSelectedCount] = useState("");
	useEffect(() => {
		setItemSelected(pos.itemSelected);
		setItemSelectedCount(pos.itemSelectedCount);
	}, [pos]);
	return (
		<Container show={itemSelected === "" ? false : true}>
			{itemSelected && (
				<>
					<ItemContainer>
						<label>Product</label>
						<label>Quantity</label>
						<Price>
							<label>Price</label>
						</Price>
					</ItemContainer>
					<ItemDetail>
						<label>{itemSelected}</label>
						<label>
							{itemSelectedCount === "" || itemSelectedCount === "0"
								? "0"
								: itemSelectedCount}
						</label>
						<PriceDetail>
							<label>100.00</label>
						</PriceDetail>
					</ItemDetail>
				</>
			)}
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
	flex-direction: column;
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
	transition: all 0.6s;
`;

const ItemContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin: 7px 7px 0px 7px;
	font-size: 12px;
	font-weight: 700;
	padding-bottom: 2px;
	border-bottom: 1.5px solid #9f9fa0;
	color: #676767;
	letter-spacing: 2px;
	text-align: left;

	label {
		display: flex;
		width: 43%;
	}
`;

const ItemDetail = styled(ItemContainer)`
	font-size: 10px;
	border-bottom: none;
	font-weight: 500;
	label {
		display: flex;
	}
`;

const Price = styled(ItemContainer)`
	border-bottom: none;
	margin: 0;
`;

const PriceDetail = styled(Price)`
	font-weight: 500;
	label {
		font-size: 10px;
	}
`;
