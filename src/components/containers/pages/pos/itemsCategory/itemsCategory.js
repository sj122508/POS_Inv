import React from "react";
import styled from "styled-components";

function ItemsCategory() {
	return (
		<Container>
			<ParentCategory>categories</ParentCategory>
			<Category>Milk Tea</Category>
			<Category>Coffee</Category>

			<ParentCategory>categories</ParentCategory>
			<Category>Milk Tea</Category>
			<Category>Coffee</Category>
		</Container>
	);
}

export default ItemsCategory;

const Container = styled.div`
	border: 0.5px solid #dedfe0;
	display: flex;
	flex-direction: column;
	width: 15%;
	min-height: calc(100vh - 70px);
	margin: 7px 0 7px 7px;
	border-radius: 3px;
	box-shadow: 0.5px 0.5px 10px #d6dbdf;
	background-image: linear-gradient(white, #f7f8f9);
	letter-spacing: 3px;
	font-size: 12px;
`;

const ParentCategory = styled.div`
	background-color: #f7f8f9;
	padding: 12px;
	box-shadow: 0 0.3px 10px -10px #d6dbdf;
	font-weight: 500;
	color: #427deb;
	text-transform: uppercase;
	text-align: left;
`;

const Category = styled(ParentCategory)`
	background-image: linear-gradient(white, #fcfdfe);
	color: #676767;
	padding: 10px;
	box-shadow: none;
	align-content: left;
	text-align: left;
	padding-left: 20px;
	transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
	cursor: pointer;
	text-transform: capitalize;

	&:hover {
		background-color: #6495ed !important;
		background-image: none;
		color: white;
	}
`;
