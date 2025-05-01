import styles from './index.module.sass';
import {Field, Form, Formik} from "formik";
import {NavigateFunction, useNavigate} from 'react-router-dom';
import {useState} from "react";
import {createBattle} from "../../services/battle.service";

type Props = {
    eventId: bigint;
    onClose: () => void;
};

export const CreateBattlePage = ({eventId, onClose}: Props) => {
    const navigate: NavigateFunction = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [newParticipant, setNewParticipant] = useState('');
    const [participants, setParticipants] = useState([]);

    const initialValues = {
        name: "",
        eventId: "",
        nominationId: "",
        participants: [""],
    };

    const handleAdd = () => {
        if (newParticipant.trim()) {
            setParticipants([...participants, newParticipant.trim()]);
            setNewParticipant('');
        }
    };

    const handleRemove = (index) => {
        const updated = [...participants];
        updated.splice(index, 1);
        setParticipants(updated);
    };

    const handleCreate = (formValue: typeof initialValues) => {
        const {name, nominationId} = formValue;
        // window.alert(nominationId)
        console.log("eventId: " + eventId + "participants: " + participants.values());
        console.log(participants.length)
        participants.forEach((value) => {
            console.log(value);
        });
        setLoading(true);
        createBattle(name, Number(eventId), Number(nominationId), participants).then(
            () => {
                setLoading(false);
                onClose(); // Закрываем модалку
                navigate("/event/" + eventId);
                window.location.reload();
                // navigate("/");
            },
            (error) => {
                window.alert("alert!!!")
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
                <div className={styles.form__title}>Создание батлов</div>

                <div className={styles.form__group}>
                    <Field name="name" type="text" className={styles.form__control} placeholder="Название"/>
                </div>

                <div className={styles.form__group}>
                    <Field
                        as="select"
                        name="nominationId"
                        className={styles.form__control}>
                        <option value="">Выберите номинацию</option>
                        <option value="1">top-16</option>
                        <option value="2">top-8</option>
                    </Field>
                </div>

                <div style={{marginTop: '20px'}}>
                    <label>Участники:</label>
                    <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                        <input
                            type="text"
                            value={newParticipant}
                            onChange={(e) => setNewParticipant(e.target.value)}
                            placeholder="Введите участника"
                        />
                        <button type="button" onClick={handleAdd}>
                            Добавить
                        </button>
                    </div>

                    <ul>
                        {participants.map((p, index) => (
                            <li key={index}>
                                {p}
                                <button
                                    type="button"
                                    onClick={() => handleRemove(index)}
                                    style={{marginLeft: '10px'}}
                                >
                                    ❌
                                </button>
                            </li>
                        ))}
                    </ul>
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
