import styles from './index.module.sass';
import {Field, Form, Formik} from "formik";
import {NavigateFunction, useNavigate} from 'react-router-dom';
import {useState} from "react";
import {createEvent} from "../../services/event.service";

type Props = {
    onClose: () => void;
};

export const CreateEventPage = ({ onClose }: Props) => {
    const navigate: NavigateFunction = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const initialValues = {
        name: "",
        city: "",
        place: "",
        date: "",
    };

    const handleCreate = (formValue: typeof initialValues) => {
        const { name, city, place, date } = formValue;

        setLoading(true);
        createEvent(name, new Date(date), city, place).then(
            (data) => {
                setLoading(false);
                onClose(); // Закрываем модалку
                navigate("/event/" + data.id);
            },
            (error) => {
                const resMessage =
                    (error.response?.data?.message) ||
                    error.message ||
                    error.toString();

                setLoading(false);
                setMessage(resMessage);
            }
        );
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleCreate}>
            <Form className={styles.form}>
                <div className={styles.form__title}>Создание события</div>

                <div className={styles.form__group}>
                    <Field name="name" type="text" className={styles.form__control} placeholder="Название" />
                </div>

                <div className={styles.form__group}>
                    <Field name="city" type="text" className={styles.form__control} placeholder="Город" />
                </div>

                <div className={styles.form__group}>
                    <Field name="place" type="text" className={styles.form__control} placeholder="Место" />
                </div>

                <div className={styles.form__group}>
                    <Field name="date" type="date" className={styles.form__control} />
                </div>

                <div className={styles.form__group}>
                    <button type="submit" className={styles.login__btn} disabled={loading}>
                        {loading && <span className={styles.spinner__border}></span>}
                        <span>Создать</span>
                    </button>
                </div>

                {message && (
                    <div className={styles.alert__danger}>
                        {message}
                    </div>
                )}
            </Form>
        </Formik>
    );
};
