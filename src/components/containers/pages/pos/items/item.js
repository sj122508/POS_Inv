import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";

function Item() {
	return (
		<Container>
			<Content>
				<ItemTile>
					<ItemImg>
						<img src="/M1.JPG" />
					</ItemImg>
					<ItemDescription>Somethingafaf awfa awfaawr STOP</ItemDescription>
					<ItemPrice>Php 100.00</ItemPrice>
				</ItemTile>

				<ItemTile>
					<ItemImg>
						<img src="/M1.JPG" />
					</ItemImg>
					<ItemDescription>Somethingafaf awfa</ItemDescription>
					<ItemPrice>Php 100.00</ItemPrice>
				</ItemTile>

				<ItemTile>
					<ItemImg>
						<img src="/M1.JPG" />
					</ItemImg>
					<ItemDescription>Somethingafaf awfa</ItemDescription>
					<ItemPrice>Php 100.00</ItemPrice>
				</ItemTile>

				<ItemTile>
					<ItemImg>
						<img src="/M1.JPG" />
					</ItemImg>
					<ItemDescription>Somethingafaf awfa</ItemDescription>
					<ItemPrice>Php 100.00</ItemPrice>
				</ItemTile>

				<ItemTile>
					<ItemImg>
						<img src="/M1.JPG" />
					</ItemImg>
					<ItemDescription>Somethingafaf awfa</ItemDescription>
					<ItemPrice>Php 100.00</ItemPrice>
				</ItemTile>

				<ItemTile>
					<ItemImg>
						<img src="/M1.JPG" />
					</ItemImg>
					<ItemDescription>Somethingafaf awfa</ItemDescription>
					<ItemPrice>Php 100.00</ItemPrice>
				</ItemTile>
				<ItemTile>
					<ItemImg>
						<img src="/M1.JPG" />
					</ItemImg>
					<ItemDescription>Somethingafaf awfa</ItemDescription>
					<ItemPrice>Php 100.00</ItemPrice>
				</ItemTile>
				<ItemTile>
					<ItemImg>
						<img src="/M1.JPG" />
					</ItemImg>
					<ItemDescription>Somethingafaf awfa</ItemDescription>
					<ItemPrice>Php 100.00</ItemPrice>
				</ItemTile>
				<ItemTile>
					<ItemImg>
						<img src="/M1.JPG" />
					</ItemImg>
					<ItemDescription>Somethingafaf awfa</ItemDescription>
					<ItemPrice>Php 100.00</ItemPrice>
				</ItemTile>
				<ItemTile>
					<ItemImg>
						<img src="/M1.JPG" />
					</ItemImg>
					<ItemDescription>Somethingafaf awfa</ItemDescription>
					<ItemPrice>Php 100.00</ItemPrice>
				</ItemTile>

				<ItemTile>
					<ItemImg>
						<img src="/M1.JPG" />
					</ItemImg>
					<ItemDescription>Somethingafaf awfa</ItemDescription>
					<ItemPrice>Php 100.00</ItemPrice>
				</ItemTile>
				<ItemTile>
					<ItemImg>
						<img src="/M1.JPG" />
					</ItemImg>
					<ItemDescription>Somethingafaf awfa</ItemDescription>
					<ItemPrice>Php 100.00</ItemPrice>
				</ItemTile>
				<ItemTile>
					<ItemImg>
						<img src="/M1.JPG" />
					</ItemImg>
					<ItemDescription>Somethingafaf awfa</ItemDescription>
					<ItemPrice>Php 100.00</ItemPrice>
				</ItemTile>
				<ItemTile>
					<ItemImg>
						<img src="/M1.JPG" />
					</ItemImg>
					<ItemDescription>Somethingafaf awfa</ItemDescription>
					<ItemPrice>Php 100.00</ItemPrice>
				</ItemTile>
				<ItemTile>
					<ItemImg>
						<img src="/M1.JPG" />
					</ItemImg>
					<ItemDescription>Somethingafaf awfa</ItemDescription>
					<ItemPrice>Php 100.00</ItemPrice>
				</ItemTile>
			</Content>
		</Container>
	);
}

export default Item;

const Container = styled.div`
	width: 55%;
	min-height: calc(100vh-70px);
	margin: 7px 0 7px 7px;
	border-radius: 3px;
	box-shadow: 0.5px 0.5px 10px #d6dbdf;
	height: 498px;
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
	padding: 16px;
	height: auto;
`;

const ItemTile = styled.div`
	max-height: 40%;
	word-wrap: break-word;
	position: relative;

	&:hover {
		h1 {
			font-weight: 800;
		}
	}
`;

const ItemImg = styled.div`
	height: 100px;
	border-radius: 10px;

	box-shadow: rgb(0 0 0 / 90%) 0px 6px 8px -10px,
		rgb(0 0 0 / 73%) 0px 6px 8px -10px;
	transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	cursor: pointer;

	&:hover {
		box-shadow: 0.5px 0.5px 15px #676767;
		height: 120px;
		border: none;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 8px;
		border: 3px solid #eeeff0;

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
