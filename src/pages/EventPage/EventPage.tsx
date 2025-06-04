import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getEventById} from "../../services/event.service";
import styles from './index.module.sass';
import bg from "../../assets/Images/homepage/vector.png";
import {CreateBattlePage} from "../../pages"
import {Modal} from "../../components/Modal";
import {getCurrentUser} from "../../services/auth.service.ts";
import * as AuthService from "../../services/auth.service.ts";

interface Nomination {
    id: number;
    name: string;
}

interface Battle {
    id: number;
    name: string;
}

interface EventData {
    id: number;
    name: string;
    date: string;
    city: string;
    place: string;
    nominations: Nomination[];
    battles: Battle[];
}

export const EventPage = () => {
    const {id} = useParams<{ id: string }>();
    const [event, setEvent] = useState<EventData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [showAdminBoard, setShowAdminBoard] = useState<boolean>(false);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        if (!id) return;

        getEventById(BigInt(id))
            .then((data) => {
                setEvent(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Ошибка при загрузке события");
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setShowAdminBoard(user.roles.includes("ROLE_MC", "ROLE_ADMIN"));
        }

    }, []);

    if (loading) return <div className={styles.loader}>Загрузка...</div>;
    if (error) return <div className={styles.alert__danger}>{error}</div>;
    if (!event) return <div>Событие не найдено</div>;

    return (
        <div className={styles.event}>
            <div className={styles.background}>
                <img src={bg} className={styles.home__vectorimg} alt="vector background"/>
            </div>

            <div className={styles.event__data}>
                <a className={styles.event__title}>{event.name}</a>
                <a>Дата {new Date(event.date).toLocaleDateString()}</a>
                <a>Город: {event.city}</a>
                <a>Место: {event.place}</a>

                <div className={styles.event__section}>
                    <h3>Баттлы</h3>
                    <ul>
                        {event.battles.map((battle) => (
                            <li key={battle.id}>
                                <a href={`/battle/${battle.id}/grid`}>{battle.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                {showAdminBoard && (
                    <button onClick={openModal} className={styles.modalButton}>
                        Создание баттла
                    </button>
                )}
            </div>
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <CreateBattlePage eventId={id} onClose={closeModal}/>
                </Modal>
            )}

        </div>
    );
};
