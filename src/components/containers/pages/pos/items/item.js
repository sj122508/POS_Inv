import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ItemCounter from "./itemCounter";
import { connect } from "react-redux";
import {
	setItemSelected,
	setItemSelectedCount,
	setItemSelectedPrice,
} from "../../../../../redux/pages/pos/pos.action";
import { selectCurrentPOS } from "../../../../../redux/pages/pos/pos.selector";
import { createStructuredSelector } from "reselect";

function Item({
	setItemSelected,
	setItemSelectedCount,
	setItemSelectedPrice,
	pos,
}) {
	const [itemClicked, setItemClicked] = useState(false);
	const [itemSelected, setsItemSelected] = useState("");

	const handleItemTileClick = (value) => {
		setItemSelected(value.itemName);
		setItemSelectedPrice(value.itemPrice);
		setItemSelectedCount("");
		setItemClicked(value ? true : false);
	};

	const handleClearCounter = () => {
		setItemClicked(false);
		setItemSelected("");
		setItemSelectedCount("");
		setItemSelectedPrice("");
	};

	const handleOkCounter = () => {
		setItemClicked(false);
		setItemSelected("");
		setItemSelectedCount("");
		setItemSelectedPrice("");
	};

	return (
		<Container>
			<ItemCounter
				show={itemClicked}
				clickClearCounter={handleClearCounter}
				clickOkCounter={handleOkCounter}
			></ItemCounter>

			<ContentContainer itemClicked={itemClicked}>
				<Content>
					<ItemTile
						onClick={() =>
							handleItemTileClick({
								itemName: "One Something Chix",
								itemPrice: 100,
							})
						}
						clicked={pos.itemSelected === "One Something Chix" ? true : false}
					>
						<ItemImg
							clicked={pos.itemSelected === "One Something Chix" ? true : false}
						>
							<img src="/M1.JPG" />
						</ItemImg>
						<ItemDescription>One Something Chix</ItemDescription>
						<ItemPrice>Php 100.00</ItemPrice>
					</ItemTile>

					<ItemTile
						onClick={() =>
							handleItemTileClick({
								itemName: "Two Something Beef",
								itemPrice: 200,
							})
						}
						clicked={pos.itemSelected === "Two Something Beef" ? true : false}
					>
						<ItemImg
							clicked={pos.itemSelected === "Two Something Beef" ? true : false}
						>
							<img src="/M1.JPG" />
						</ItemImg>
						<ItemDescription>Two Something Beef</ItemDescription>
						<ItemPrice>Php 200.00</ItemPrice>
					</ItemTile>

					<ItemTile
						onClick={() =>
							handleItemTileClick({
								itemName: "Three Something Egg",
								itemPrice: 150,
							})
						}
						clicked={pos.itemSelected === "Three Something Egg" ? true : false}
					>
						<ItemImg
							clicked={
								pos.itemSelected === "Three Something Egg" ? true : false
							}
						>
							<img src="/M1.JPG" />
						</ItemImg>
						<ItemDescription>Three Something Egg</ItemDescription>
						<ItemPrice>Php 150.00</ItemPrice>
					</ItemTile>

					<ItemTile
						onClick={() =>
							handleItemTileClick({
								itemName: "Four Something Horse",
								itemPrice: 50,
							})
						}
						clicked={pos.itemSelected === "Four Something Horse" ? true : false}
					>
						<ItemImg
							clicked={
								pos.itemSelected === "Four Something Horse" ? true : false
							}
						>
							<img src="/M1.JPG" />
						</ItemImg>
						<ItemDescription>Four Something Horse</ItemDescription>
						<ItemPrice>Php 50.00</ItemPrice>
					</ItemTile>

					<ItemTile
						onClick={() =>
							handleItemTileClick({
								itemName: "Five Something Soup",
								itemPrice: 55,
							})
						}
						clicked={pos.itemSelected === "Five Something Soup" ? true : false}
					>
						<ItemImg
							clicked={
								pos.itemSelected === "Five Something Soup" ? true : false
							}
						>
							<img src="/M1.JPG" />
						</ItemImg>
						<ItemDescription>Five Something Soup</ItemDescription>
						<ItemPrice>Php 55.00</ItemPrice>
					</ItemTile>

					<ItemTile
						onClick={() =>
							handleItemTileClick({
								itemName: "Six Something Longga",
								itemPrice: 55,
							})
						}
						clicked={pos.itemSelected === "Six Something Longga" ? true : false}
					>
						<ItemImg
							clicked={
								pos.itemSelected === "Six Something Longga" ? true : false
							}
						>
							<img src="/M1.JPG" />
						</ItemImg>
						<ItemDescription>Six Something Longga</ItemDescription>
						<ItemPrice>Php 55.00</ItemPrice>
					</ItemTile>

					<ItemTile
						onClick={() =>
							handleItemTileClick({
								itemName: "Seven Something Noodles",
								itemPrice: 60,
							})
						}
						clicked={
							pos.itemSelected === "Seven Something Noodles" ? true : false
						}
					>
						<ItemImg
							clicked={
								pos.itemSelected === "Seven Something Noodles" ? true : false
							}
						>
							<img src="/M1.JPG" />
						</ItemImg>
						<ItemDescription>Seven Something Noodles</ItemDescription>
						<ItemPrice>Php 60.00</ItemPrice>
					</ItemTile>

					<ItemTile
						onClick={() =>
							handleItemTileClick({
								itemName: "Eight Something Pork",
								itemPrice: 65,
							})
						}
						clicked={pos.itemSelected === "Eight Something Pork" ? true : false}
					>
						<ItemImg
							clicked={
								pos.itemSelected === "Eight Something Pork" ? true : false
							}
						>
							<img src="/M1.JPG" />
						</ItemImg>
						<ItemDescription>Eight Something Pork</ItemDescription>
						<ItemPrice>Php 65.00</ItemPrice>
					</ItemTile>
				</Content>
			</ContentContainer>
		</Container>
	);
}

const mapStateToProps = createStructuredSelector({
	pos: selectCurrentPOS,
});

const mapDispatchToProps = (dispatch) => ({
	setItemSelected: (itemName) => dispatch(setItemSelected(itemName)),
	setItemSelectedCount: (count) => dispatch(setItemSelectedCount(count)),
	setItemSelectedPrice: (price) => dispatch(setItemSelectedPrice(price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);

/////////// STYLED COMPONENTS /////////////
const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
	margin: 7px 0 7px 7px;
`;

const ContentContainer = styled.div`
	border: 0.5px solid #dedfe0;
	width: 100%;
	min-height: calc(100vh-70px);
	border-radius: 3px;
	box-shadow: 0.5px 0.5px 10px #d6dbdf;
	height: ${(props) => (props.itemClicked ? "552px" : "628px")};

	border-top: 10px solid rgba(0, 0, 0, 0);
	border-bottom: 10px solid rgba(0, 0, 0, 0);
	// background: grey;
	// height: inherit;

	overflow-y: auto;
	overflow-x: hidden;

	&::-webkit-scrollbar {
		width: 6px;
		height: 40px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #676767;
		border-radius: 6px;
	}
`;

const Content = styled.div`
	display: grid;
	grid-gap: 14px;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	padding: 0 16px;
	height: auto;
`;

const ItemTile = styled.div`
	max-height: 40%;
	word-wrap: break-word;
	position: relative;
	h1 {
		font-weight: ${(props) => (props.clicked ? "800" : "500")};
	}

	&:hover {
		h1 {
			font-weight: 800;
		}
	}
`;

const ItemImg = styled.div`
	height: ${(props) => (props.clicked ? "120px" : "100px")};
	border-radius: 10px;

	box-shadow: ${(props) => (props.clicked ? "1px 1px 30px #676767" : "")};
	transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	cursor: pointer;

	${(props) =>
		!props.clicked &&
		css`
			&:hover {
				box-shadow: 0.5px 0.5px 15px #676767;
				height: 120px;
				border: none;
			}
		`}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 8px;
		border: 3px solid #eeeff0;
		border: ${(props) => props.clicked && "none"};

		&:hover {
			border: none;
		}
	}
`;

const ItemDescription = styled.h1`
	font-weight: 500;
	color: #676767;
	// text-transform: capitalize;
	font-size: 12px;
	letter-spacing: 1px;
	margin: 5px 0;
`;

const ItemPrice = styled(ItemDescription)`
	color: #9f9fa0;
	font-weight: 500;
`;
