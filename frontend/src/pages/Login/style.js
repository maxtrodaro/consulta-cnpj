import styled from "styled-components";

import iconUser from "../../assets/icon-user.png";
import iconPass from "../../assets/icon-pass.png";

export const LoginPage = styled.section`
	.login-container {
		width: 100%;
		height: 100vh;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		&__form {
			display: flex;
			flex-direction: column;
			margin: 0 auto;
			width: auto;
			margin-top: 50px;
			background: #f5f5f5;
			padding: 30px;
			border-radius: 10px;
			position: relative;
			&__error {
				display: none;
				+ input {
					border: 2px solid #f44336;
				}
			}
			&__input {
				width: 350px;
				height: 60px;
				color: #707070;
				border: 2px solid #e0e0e0;
				border-radius: 6px;
				padding: 0 50px;
				margin-top: 20px;
				&.error {
					border: 2px solid #f44336;
					color: #f44336;
				}
			}
			&__user {
				&::before {
					content: "";
					background: url(${iconUser}) no-repeat;
					position: absolute;
					display: block;
					height: 24px;
					width: 24px;
					top: 67px;
					left: 45px;
				}
			}
			&__password {
				&::before {
					content: "";
					background: url(${iconPass}) no-repeat;
					position: absolute;
					display: block;
					height: 28px;
					width: 24px;
					top: 147px;
					left: 45px;
				}
			}
			&__link {
				display: flex;
				align-items: center;
				margin-top: 20px;
				color: #696969;
			}
		}
		&__message {
			color: #ef9a9a;
			margin-top: 20px;
			font-size: 24px;
			line-height: 28px;
			&.e-none {
				display: none;
			}
			&.e-active {
				display: block;
			}
		}
	}
`;
