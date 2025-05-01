import React, { useState } from "react";
import {NavigateFunction, useLocation, useNavigate} from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { signup } from "../../services/auth.service";
import styles from './index.module.sass'

type Props = {}

export const Role = (props: Props) => {
    const navigate: NavigateFunction = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const location = useLocation();
    const { username, email, password } = location.state || {};

    const handleRegisterMC = () => {

        setMessage("");
        setLoading(true);

        console.log(username, email, password)

        signup(username, email, ["mc"], password).then(
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

    const handleRegisterViewer = () => {

        setMessage("");
        setLoading(true);

        console.log(username, email, password)

        signup(username, email, ["viewer"], password).then(
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
                <Formik>
                    <Form>
                        <div className={styles.form__group}>
                            <button type="button" onClick={handleRegisterMC} className={styles.login__btn} disabled={loading}>
                                {loading && (
                                    <span className={styles.spinner__border}></span>
                                )}
                                <span>mc</span>
                            </button>
                        </div>
                        <div className={styles.form__group}>
                            <button type="button" onClick={handleRegisterViewer} className={styles.login__btn} disabled={loading}>
                                {loading && (
                                    <span className={styles.spinner__border}></span>
                                )}
                                <span>no mc</span>
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

