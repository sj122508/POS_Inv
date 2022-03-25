import { CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Button({ buttonName, isDisabled, onClick, showCircularProgress }) {
	return (
		<Container disabled={isDisabled}>
			<ButtonContainer disabled={isDisabled} onClick={onClick}>
				{showCircularProgress && (
					<ButtonCircularProgress>
						<CircularProgress />
					</ButtonCircularProgress>
				)}

				<button disabled={isDisabled}>{buttonName}</button>
			</ButtonContainer>
		</Container>
	);
}

export default Button;

// test
/////////// STYLED COMPONENTS /////////////
const Container = styled.div`
	display: flex;
	flex-direction: row-reverse;
	margin-top: 20px;

	// button {
	//     letter-spacing: 1px;
	//     text-align: center;
	//     color: white;
	//     background: ${(props) => (props.disabled ? "#E5E7E9" : "#427deb")}; //
	//     font-weight: normal;
	//     border-radius: 30px; //
	//     outline: none; //
	//     border: none; //
	//     padding: 7px 30px; //
	//     font-size: 12px;
	//     font-weight: 400;
	//     cursor: ${(props) => (props.disabled ? "default" : "pointer")};
	//     transition: background-color .30s ease-in-out;
	// }

	// button:disabled {
	//   background-color: "#E5E7E9";
	//   cursor: not-allowed;
	// }
`;
const ButtonContainer = styled.div`
    background: ${(props) => (props.disabled ? "#E5E7E9" : "#427deb")};
    border-radius: 30px; //
    padding: 7px 25px; //
    display: flex;
    flex-direction: row;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    
    button {
      letter-spacing: 1px; 
      text-align: center;
      color: white;
      font-weight: normal;
      font-size: 12px;
      font-weight: 400;
      background: none;
      outline: none; 
      border: none; 
      transition: background-color .30s ease-in-out;
      cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    }

    &:hover{
      background-color: ${(props) => (props.disabled ? "#E5E7E9" : "#6495ED")};
    }
  }
    
`;
const ButtonCircularProgress = styled.div`
	span {
		display: flex;
		flex-direction: start;
		height: 13px !important;
		width: 13px !important;
		color: white !important;
		margin-top: 2px;
	}
`;
