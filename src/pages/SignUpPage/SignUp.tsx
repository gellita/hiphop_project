import React, { useState } from "react";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { signup } from "../../services/auth.service";
import styles from './index.module.sass'

type Props = {}

export const SignUp = (props: Props) => {
    const navigate: NavigateFunction = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const initialValues: {
        username: string;
        email: string,
        password: string;
    } = {
        username: "",
        email: "",
        password: "",
    };
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Имя пользователя обязательно'),
        email: Yup.string()
            .email('Некорректный email')
            .required('Email обязателен'),
        password: Yup.string()
            .min(6, 'Пароль должен быть не менее 6 символов')
            .required('Пароль обязателен'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
            .required('Подтверждение пароля обязательно'),
    });




    const handleRegister = (formValue: { username: string; email: string; password: string; }) => {
        const { username, email, password } = formValue;
        navigate("/role", {
            state: {
                username,
                email,
                password,
            },
        });
    };

    return (
        <div className={styles.login}>
            <div className={styles.background}>
                <img src="./src/assets/Images/homepage/vector.png" className={styles.home__vectorimg} alt = "vector image"/>
            </div>
            <div className={styles.login__card__container}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleRegister}
                >
                    <Form>
                        <a className={styles.form__text}>Регистрация</a>
                        <div className={styles.form__group}>
                            <label htmlFor="username"></label>
                            <Field name="username" type="text" className={styles.form__control} placeholder="Имя пользователя"/>
                            <ErrorMessage
                                name="username"
                                component="div"
                                className={styles.alert__danger}
                            />
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="email"></label>
                            <Field name="email" type="email" className={styles.form__control} placeholder="Email"/>
                            {/*<ErrorMessage*/}
                            {/*    name="e"*/}
                            {/*    component="div"*/}
                            {/*    className={styles.alert__danger}*/}
                            {/*/>*/}
                        </div>

                        <div className={styles.form__group}>
                            <label htmlFor="password"></label>
                            <Field name="password" type="password" className={styles.form__control} placeholder="Пароль"/>
                            <ErrorMessage
                                name="password"
                                component="div"
                                className={styles.alert__danger}
                            />
                        </div>

                        <div className={styles.form__group}>
                            <label htmlFor="confirmPassword"></label>
                            <Field
                                name="confirmPassword"
                                type="password"
                                className={styles.form__control}
                                placeholder="Повторите пароль"
                            />
                            <ErrorMessage
                                name="confirmPassword"
                                component="div"
                                className={styles.alert__danger}
                            />
                        </div>


                        <div className={styles.form__group}>
                            <button type="submit" className={styles.login__btn} disabled={loading}>
                                {loading && (
                                    <span className={styles.spinner__border}></span>
                                )}
                                <span>Зарегаться</span>
                            </button>
                        </div>

                        {message && (
                            <div className={styles.form__group}>
                                <div  className={styles.alert__danger}>
                                    {message}
                                </div>
                            </div>
                        )}
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

