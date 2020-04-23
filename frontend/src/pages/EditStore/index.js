import React from "react";
import { useHistory } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";

import Header from "../../util/Header/header";
import { RegisterButton } from "../../util/Style/global";
import { EditPage } from "./style";
import api from "../../services/requestAPI";

export default function EditStore() {
	const history = useHistory();

	const handleSubmit = async (values) => {
		try {
			await api.put(`/store/${values.cnpj}`, values);

			alert("Loja alterada com sucesso!");

			history.push("/home");
		} catch (error) {
			alert("Não foi possível alterar essa loja, tente novamente!");
		}
	};

	const validations = yup.object().shape({
		name: yup.string().required(),
		cnpj: yup.string().length(14).required(),
		cod_emp: yup.string().length(8).required(),
		serv_ip: yup.string().min(8).max(15).required(),
	});

	return (
		<EditPage>
			<Header />
			<section className="edit-container">
				<h2>Editar loja</h2>
				<Formik
					initialValues={{}}
					onSubmit={handleSubmit}
					validationSchema={validations}
				>
					<Form className="edit-container__form">
						<div className="edit-container__form__left">
							<p className="edit-container__form__title">Informações da loja</p>
							<ErrorMessage name="name" component="span" />
							<Field
								name="name"
								placeholder="Nome:"
								type="text"
								className="edit-container__form__left__name"
							/>
							<p className="edit-container__form__left__userIcon"></p>
							<ErrorMessage name="cnpj" component="span" />
							<Field
								name="cnpj"
								placeholder="CNPJ:"
								type="text"
								className="edit-container__form__left__cnpj"
							/>
							<p className="edit-container__form__left__cnpjIcon"></p>
							<ErrorMessage name="cod_emp" component="span" />
							<Field
								name="cod_emp"
								placeholder="Código da empresa:"
								type="text"
								className="edit-container__form__left__cod"
							/>
							<p className="edit-container__form__left__codIcon"></p>
						</div>
						<div className="edit-container__form__right">
							<p className="edit-container__form__title">Ambiente da loja</p>
							<ErrorMessage name="serv_ip" component="span" />
							<Field
								name="serv_ip"
								placeholder="Endereço do servidor:"
								type="text"
								className="edit-container__form__right__serv"
							/>
							<p className="edit-container__form__right__servIcon"></p>
						</div>
						<div className="edit-container__form__buttons">
							<RegisterButton onClick={() => history.push("/home")}>
								Voltar
							</RegisterButton>
							<RegisterButton type="submit">Editar loja</RegisterButton>
						</div>
					</Form>
				</Formik>
			</section>
			<section className="edit-style"></section>
		</EditPage>
	);
}
