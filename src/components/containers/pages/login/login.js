import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../../presentationals/form/button/button";
import TextArea from "../../../presentationals/form/textArea/textArea";
import { useNavigate } from "react-router-dom";
import { Pages } from "./../../../../common/constantUtilities";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { userLoggin } from "../../../../redux/pages/login/login.action";
import { selectCurrentLogin } from "../../../../redux/pages/login/login.selector";

// reference
// npm install @mui/material @emotion/react @emotion/styled

function Login({ userLoggin, login }) {
	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [requiredUsername, setRequiredUsername] = useState(false);
	const [requiredPassword, setRequiredPassword] = useState(false);
	const [credentialValidation, setCredentialValidation] = useState(false);
	const [loginProgress, setLoginProgress] = useState(false);
	const [loginSuccess, setLoginSeccess] = useState(false);

	useEffect(() => {
		if (username != "" && requiredUsername) {
			setRequiredUsername(false);
		}

		if (password != "" && requiredPassword) {
			setRequiredPassword(false);
		}
	}, [username, password, loginSuccess]);

	useEffect(() => {
		if (loginProgress === true && login.loginProgress === false) {
			console.log(login, "loginloginloginloginloginloginloginlogin");
			setLoginProgress(false);
			navigate(Pages.POS);
		}
	}, [login]);

	const handleChangeUsername = (value) => {
		setUsername(value);
	};

	const handleChangePassword = (value) => {
		setPassword(value);
	};

	const handleClickLogin = () => {
		let withBlankField = false;
		setRequiredUsername(false);
		setRequiredPassword(false);

		if (username == "") {
			setRequiredUsername(true);
			withBlankField = true;
		}

		if (password == "") {
			setRequiredPassword(true);
			withBlankField = true;
		}

		if (!withBlankField) {
			setLoginProgress(true);

			const userCredential = {
				username: username,
				password: password,
			};

			userLoggin(userCredential);
		}
	};

	return (
		<Contaniner>
			<Logo>
				<h1>J</h1>
			</Logo>
			<ContainerLogin>
				<LoginHeader>
					<h2>POS-Inv</h2>
				</LoginHeader>
				{credentialValidation && (
					<CredentialValidation>
						<label>Your username or password is incorrect</label>
					</CredentialValidation>
				)}

				<TextArea
					label="Username"
					onChange={handleChangeUsername}
					defaultValue=""
					maxLength={15}
					withValidationMessage={requiredUsername}
					disabled={loginProgress}
				/>
				<TextArea
					label="Password"
					onChange={handleChangePassword}
					defaultValue=""
					maxLength={15}
					withValidationMessage={requiredPassword}
					disabled={loginProgress}
				/>
				<Button
					buttonName="Login"
					onClick={handleClickLogin}
					isDisabled={false}
					showCircularProgress={loginProgress}
				/>
			</ContainerLogin>
		</Contaniner>
	);
}

const mapStateToProps = createStructuredSelector({
	login: selectCurrentLogin,
});

const mapDispatchToProps = (dispatch) => ({
	userLoggin: (userCredential) => dispatch(userLoggin(userCredential)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

/////////// STYLED COMPONENTS /////////////
const Contaniner = styled.div`
	display: flex;
	justify-content: center;
	overflow: hidden;
	align-items: center;
	// height: 100vh;
	min-height: calc(100vh - 0px);
	flex-direction: column;
	background-image: linear-gradient(white, rgb(242, 246, 250));
`;
const Logo = styled.div`
    box-shadow: 1px 1px 2px rgb(216,222,228);
    border: 1px solid  rgb(216,222,228);
    width: 60px;
    height: 60px;
    margin-bottom: 30px;
    border-radius: 50%;
    display: flex;
    align-items:center;
    flex-direction: column;

    h1 {
        margin: 0;
        font-size: 40px;
    {
`;
const ContainerLogin = styled.div`
	width: 255px;
	height: auto;
	margin-bottom: 30px;
	padding: 16px;
	display: flex;
	background-color: rgb(241, 244, 247);
	border-radius: 6px;
	box-shadow: 1px 1px 2px rgb(216, 222, 228);
	border: 1px solid rgb(216, 222, 228);
	flex-direction: column;

	span {
		color: black;
	}
`;
const LoginHeader = styled.div`
	border-bottom: 1px solid rgb(216, 222, 228);

	h2 {
		margin: 10px 10;
	}
`;
const CredentialValidation = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 5px;

	label {
		letter-spacing: 0.5px;
		display: flex;
		align-items: center;
		color: red;
		font-size: 10px;
		font-weight: 400;
	}
`;
