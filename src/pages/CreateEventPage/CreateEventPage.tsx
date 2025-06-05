import styles from './index.module.sass'
import {ErrorMessage, Field, Form, Formik} from "formik";
import {NavigateFunction, useNavigate} from 'react-router-dom';
import React, {useState} from "react";
import {createEvent} from "../../services/event.service";

export const CreateEventPage = () => {
    const navigate: NavigateFunction = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const initialValues: {
        name: string;
        city: string,
        place: string,
        date: string,
    } = {
        name: "",
        city: "",
        place: "",
        date: "",
    };

    const handleCreate = (formValue: { name: string, city: string, place: string, date: string }) => {
        const {name, city, place, date} = formValue;

        setLoading(true);
        createEvent(name, new Date(date), city, place).then(
            (data) => {
                navigate("/event/" + data.id);
                // navigate("/");
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
    }

    return (

        <div className={styles.main}>
            <div className={styles.home}>

                <Formik initialValues={initialValues} onSubmit={handleCreate}>
                    <Form>
                        <a className={styles.form__text}>Создание события</a>
                        <div className={styles.form__group}>
                            <label htmlFor="name"></label>
                            <Field name="name" type="text" className={styles.form__control} placeholder="Название"/>
                        </div>

                        <div className={styles.form__group}>
                            <label htmlFor="city"></label>
                            <Field name="city" type="text" className={styles.form__control} placeholder="Город"/>
                        </div>

                        <div className={styles.form__group}>
                            <label htmlFor="place"></label>
                            <Field name="place" type="text" className={styles.form__control} placeholder="Место"/>
                        </div>

                        <div className={styles.form__group}>
                            <label htmlFor="date"></label>
                            <Field name="date" type="date" className={styles.form__control}/>
                        </div>

                        <div className={styles.form__group}>
                            <button type="submit" className={styles.login__btn} disabled={loading}>
                                {loading && (
                                    <span className={styles.spinner__border}></span>
                                )}
                                <span>Создать</span>
                            </button>
                        </div>

                        {message && (
                            <div className={styles.form__group}>
                                <div className={styles.alert__danger}>
                                    {message}
                                </div>
                            </div>
                        )}
                    </Form>
                </Formik>
            </div>
        </div>


    )
}
