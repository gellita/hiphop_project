import { useState } from "react";
import {Link, NavigateFunction, useNavigate} from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { login } from "../../services/auth.service";
import styles from './index.module.sass'

export const Login = () => {
    const navigate: NavigateFunction = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const initialValues: {
        username: string;
        password: string;
    } = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Это поле обязательно!"),
        password: Yup.string().required("Это поле обязательно!"),
    });

    const handleLogin = (formValue: { username: string; password: string }) => {
        const { username, password } = formValue;

        setMessage("");
        setLoading(true);

        login(username, password).then(
            () => {
                navigate("/");
                window.location.reload();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setLoading(false);
                setMessage(resMessage);
            }
        );
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
                    onSubmit={handleLogin}
                >
                    <Form>
                        <a className={styles.form__text}>Вход</a>
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
                            <label htmlFor="password"></label>
                            <Field name="password" type="password" className={styles.form__control} placeholder="Пароль"/>
                            <ErrorMessage
                                name="password"
                                component="div"
                                className={styles.alert__danger}
                            />
                        </div>

                        <div className={styles.form__group}>
                            <button type="submit" className={styles.login__btn} disabled={loading}>
                                {loading && (
                                    <span className={styles.spinner__border}></span>
                                )}
                                <span>Войти</span>
                            </button>
                        </div>
                        <Link to="/signup" className="signup">Зарегестрироваться</Link>

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

