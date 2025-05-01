import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../../services/event.service";
import styles from './index.module.sass';

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
    const { id } = useParams<{ id: string }>();
    const [event, setEvent] = useState<EventData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (!id) return;

        getEventById(BigInt(id))
            .then((data) => {
                setEvent(data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Ошибка при загрузке события");
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className={styles.loader}>Загрузка...</div>;
    if (error) return <div className={styles.alert__danger}>{error}</div>;
    if (!event) return <div>Событие не найдено</div>;

    return (
        <div className={styles.event}>
            <h2 className={styles.event__title}>{event.name}</h2>
            <p><strong>Дата:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p><strong>Город:</strong> {event.city}</p>
            <p><strong>Место:</strong> {event.place}</p>

            <div className={styles.event__section}>
                <h3>Номинации</h3>
                <ul>
                    {event.nominations.map((nom) => (
                        <li key={nom.id}>{nom.name}</li>
                    ))}
                </ul>
            </div>

            <div className={styles.event__section}>
                <h3>Баттлы</h3>
                <ul>
                    {event.battles.map((battle) => (
                        <li key={battle.id}>{battle.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
