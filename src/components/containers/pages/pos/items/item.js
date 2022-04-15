import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ItemCounter from "./itemCounter";
import { connect } from "react-redux";
import {
	setItemSelected,
	setItemSelectedCount,
} from "../../../../../redux/pages/pos/pos.action";
import { selectCurrentPOS } from "../../../../../redux/pages/pos/pos.selector";
import { createStructuredSelector } from "reselect";

function Item({ setItemSelected, setItemSelectedCount, pos }) {
	const [itemClicked, setItemClicked] = useState(false);
	const [itemSelected, setsItemSelected] = useState("");

	useEffect(() => {}, [pos]);

	const handleItemTileClick = (value) => {
		setItemSelected(value);
		setItemSelectedCount("");
		setItemClicked(value ? true : false);
	};

	const handleClearCounter = () => {
		setItemClicked(false);
		setItemSelected("");
		setItemSelectedCount("");
	};

	const handleOkCounter = () => {
		setItemClicked(false);
		setItemSelected("");
		setItemSelectedCount("");
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
						onClick={() => handleItemTileClick("One Something Chix")}
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
						onClick={() => handleItemTileClick("Two Something Beef")}
						clicked={pos.itemSelected === "Two Something Beef" ? true : false}
					>
						<ItemImg
							clicked={pos.itemSelected === "Two Something Beef" ? true : false}
						>
							<img src="/M1.JPG" />
						</ItemImg>
						<ItemDescription>Two Something Beef</ItemDescription>
						<ItemPrice>Php 100.00</ItemPrice>
					</ItemTile>

					<ItemTile
						onClick={() => handleItemTileClick("Three Something Egg")}
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
						<ItemPrice>Php 100.00</ItemPrice>
					</ItemTile>

					<ItemTile
						onClick={() => handleItemTileClick("Four Something Horse")}
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
						<ItemPrice>Php 100.00</ItemPrice>
					</ItemTile>

					<ItemTile
						onClick={() => handleItemTileClick("Five Something Soup")}
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
						<ItemPrice>Php 99.00</ItemPrice>
					</ItemTile>

					<ItemTile
						onClick={() => handleItemTileClick("Six Something Longga")}
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
						<ItemPrice>Php 100.00</ItemPrice>
					</ItemTile>

					<ItemTile
						onClick={() => handleItemTileClick("Seven Something Noodles")}
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
						<ItemPrice>Php 89.00</ItemPrice>
					</ItemTile>

					<ItemTile
						onClick={() => handleItemTileClick("Eight Something Pork")}
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
						<ItemPrice>Php 100.00</ItemPrice>
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
	setItemSelectedCount: (itemName) => dispatch(setItemSelectedCount(itemName)),
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
	// border: ${(props) => props.clicked && "none"};

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
	text-transform: capitalize;
	font-size: 12px;
	letter-spacing: 1px;
	margin: 5px 0;
`;

const ItemPrice = styled(ItemDescription)`
	color: #9f9fa0;
	font-weight: 500;
`;
