import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setItemSelectedCount } from "../../../../../redux/pages/pos/pos.action";
import { selectCurrentPOS } from "../../../../../redux/pages/pos/pos.selector";
import { createStructuredSelector } from "reselect";

function ItemCounter({
	show,
	clickClearCounter,
	clickOkCounter,
	setItemSelectedCount,
	pos,
}) {
	const [count, setCount] = useState("");
	const [countSelected, setCountSelected] = useState([]);

	useEffect(() => {
		setCount(pos.itemSelectedCount);
	}, [pos]);

	const handleSetCount = (value) => {
		const count = pos.itemSelectedCount + value;

		if (pos.itemSelectedCount.length < 3 && count !== "00") {
			setItemSelectedCount(count);
		}
	};

	return (
		<Container show={show}>
			{show && (
				<ItemCounterContainer show={show}>
					<ItemCounterTile onClick={() => handleSetCount(0)}>
						<span>0</span>
					</ItemCounterTile>
					<ItemCounterTile onClick={() => handleSetCount(1)}>
						<span>1</span>
					</ItemCounterTile>
					<ItemCounterTile onClick={() => handleSetCount(2)}>
						<span>2</span>
					</ItemCounterTile>
					<ItemCounterTile onClick={() => handleSetCount(3)}>
						<span>3</span>
					</ItemCounterTile>
					<ItemCounterTile onClick={() => handleSetCount(4)}>
						<span>4</span>
					</ItemCounterTile>
					<ItemCounterTile onClick={() => handleSetCount(5)}>
						<span>5</span>
					</ItemCounterTile>
					<ItemCounterTile onClick={() => handleSetCount(6)}>
						<span>6</span>
					</ItemCounterTile>
					<ItemCounterTile onClick={() => handleSetCount(7)}>
						<span>7</span>
					</ItemCounterTile>
					<ItemCounterTile onClick={() => handleSetCount(8)}>
						<span>8</span>
					</ItemCounterTile>
					<ItemCounterTile onClick={() => handleSetCount(9)}>
						<span>9</span>
					</ItemCounterTile>
					<ItemCounterTile type="clear" onClick={() => clickClearCounter()}>
						<span>Clear</span>
					</ItemCounterTile>
					<ItemCounterTile type="ok" onClick={() => clickOkCounter()}>
						<span>Ok</span>
					</ItemCounterTile>
				</ItemCounterContainer>
			)}
		</Container>
	);
}
const mapStateToProps = createStructuredSelector({
	pos: selectCurrentPOS,
});
const mapDispatchToProps = (dispatch) => ({
	setItemSelectedCount: (count) => dispatch(setItemSelectedCount(count)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemCounter);

/////////// STYLED COMPONENTS /////////////
const Container = styled.div`
	visibility: ${(props) => (props.show ? "visible" : "hidden")};
	height: ${(props) => (props.show ? "50px" : "0")};
	width: 100%;
	box-shadow: 0.5px 0.5px 10px #d6dbdf;
	border-radius: 3px;
	padding: ${(props) => (props.show ? "10px 0" : "0")};
	margin-bottom: ${(props) => (props.show ? "7px" : "0")};
	transition: all 0.6s;
	background-image: linear-gradient(white, #f7f8f9);
	border: 0.5px solid #dedfe0;
`;

const ItemCounterContainer = styled.div`
	visibility: ${(props) => (props.show ? "visible" : "hidden")};
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(12, minmax(0, 1fr));
	height: ${(props) => (props.show ? "50px" : "0")};
	margin: 0 10px;
	transition: all 0.6s;
`;

const ItemCounterTile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-item: center;
	width: 100%;

	background: ${(props) =>
		props.type === "clear"
			? "#A93226"
			: props.type === "ok"
			? "#186A3B"
			: "#676767"};
	border-radius: 5px;

	transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	cursor: pointer;
	box-shadow: 0.5px 0.5px 2px #676767;
	text-transform: uppercase;

	span {
		text-align: center;

		color: white;
		font-size: ${(props) =>
			props.type === "clear" || props.type === "ok" ? "14px" : "35px"};
		font-weight: 700;
	}

	&:hover {
		background: ${(props) => (props.type === undefined ? "#427deb" : "")};
		box-shadow: 0.5px 0.5px 8px
			${(props) =>
				props.type === "clear"
					? "#A93226"
					: props.type === "ok"
					? "#186A3B"
					: "#427deb"};
	}
`;
