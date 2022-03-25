import React from "react";
import styled from "styled-components";

function TextArea({
	label,
	onChange,
	defaultValue,
	maxLength,
	withValidationMessage,
}) {
	const onInputChange = (e) => {
		console.log(e.target.value, "aafafwf");
		onChange(e.target.value);
	};

	return (
		<Container withValidationMessage={withValidationMessage}>
			<Label>
				<label>{label}</label>
			</Label>
			<input
				onChange={onInputChange}
				defaultValue={defaultValue ? defaultValue : null}
				maxLength={maxLength}
			/>
			{withValidationMessage && (
				<LabelValidation>
					<label>This field is required</label>
				</LabelValidation>
			)}
		</Container>
	);
}

export default TextArea;

/////////// STYLED COMPONENTS /////////////
const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;

	input {
		letter-spacing: 1px;
		display: flex;
		padding: 5px 12px;
		font-size: 12px;
		font-weight: 400;
		line-height: 20px;
		background-color: white;
		border: ${(props) =>
			props.withValidationMessage
				? "1px solid red"
				: "1px solid rgb(216,222,228)"};
		border-radius: 6px;
		margin-top: 5px;
		transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
		color: rgb(145, 158, 171);
		outline: none;
	}

	input:hover {
		border: 1px solid #6495ed;
		box-shadow: 0.5px 0.5px 5px #6495ed;
		cursor: pointer;
	}
`;
const Label = styled.div`
	label {
		letter-spacing: 1px;
		display: flex;
		align-items: right;
		color: rgb(145, 158, 171);
		font-size: 12px;
		font-weight: 400;
	}
`;

const LabelValidation = styled(Label)`
	label {
		color: red;
		letter-spacing: 0.5px;
		font-size: 10px;
	}
`;
