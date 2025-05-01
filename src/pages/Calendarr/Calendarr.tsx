import {useEffect, useState} from "react";
import Calendar from "react-calendar";
import './index.sass';
import {format, isSameDay, parseISO} from 'date-fns'
import {ru} from "date-fns/locale";
// import {date} from "yup";

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];
// interface Database {
//     [key: string]: string;
// }
//
// // Пример данных базы данных
// const mockDatabase: Database = {
//     '09-01-2025': 'Какого Хуя 10 число если я поставил 9',
//     '10-01-2025': 'Пизда',
//     '11-01-2025': 'ПиздаХ2'
// };
//
// const monthFormatted = (month: string) => {
//     if (month === 'январь' || month === 'февраль' || month === `апрель` || month === `май` || month === `июнь` || month === `июль` || month === `сентябрь` || month === `октябрь` || month === `ноябрь` || month === `декабрь`) {
//         {
//             const newMonth = month.slice(0, -1)
//             return newMonth + 'я'
//
//         }
//     } else if (month === 'март' || month === 'август') {
//         {
//             return month + 'а'
//
//         }
//     }
// }
//
//
// export const Calendarr = () => {
//     const [selectedDate, setSelectedDate] = useState<number | null>(null);
//     const [dateInfo, setDateInfo] = useState<string>('');
//     const [selectedMonth, setSelectedMonth] = useState<string | undefined>(undefined);
//     // const [value, onChange] = useState<Value>(new Date());
//
//     const handleDateClick = (date: Date | Date[]): void => {
//         if (date instanceof Date) {
//             const newDate = date.toLocaleString().split(',')[0];
//             const formattedDate = newDate.replaceAll('.', '-')
//             const day = date.getDate();
//             const month = date.toLocaleString('ru-RU', { month: 'long' });
//             setSelectedDate(day);
//             setSelectedMonth(monthFormatted(month))
//             setDateInfo(mockDatabase[formattedDate] || 'Нет информации для этой даты.');
//         }
//     };
//
//     return (
//         <div className="calendar_background">
//             <div className="calendar_conteiner">
//                 <div className="events">
//                     {selectedDate && (
//                     <div>
//                         <h2>{selectedDate} </h2>
//                         <h2>{selectedMonth}</h2>
//                         <p>{dateInfo}</p>
//                     </div>
//                 )}
//                 </div>
//                 <Calendarr onChange={handleDateClick}
//                           value={selectedDate && selectedMonth}
//                           locale="ru-RU"/>
//             </div>
//
//         </div>
//     );
// };

interface CalendarEvent {
    id: string;
    summary: string;
    description: string;
    start: { dateTime: string };
    end: { dateTime: string };
}

const API_KEY = 'AIzaSyAMGefIN4gE8RLh07QChcQICp86VTwN9Fo'; // 🔑 Вставь сюда свой ключ
const CALENDAR_ID = '85fdbb3b9740007888f217c22bf3118fbf88ef5c214f403167f131a5102e9a14@group.calendar.google.com'; // 📅 Публичный ID календаря

const fetchGoogleCalendarEvents = async (): Promise<CalendarEvent[]> => {
    const timeMin = new Date().toISOString();
    const res = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${timeMin}`
    );
    const data = await res.json();
    return data.items || [];
};

export const Calendarr = () => {
    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            const events = await fetchGoogleCalendarEvents();
            setEvents(events);
        };

        fetchEvents(); // первая загрузка

        const interval = setInterval(() => {
            console.log('🔄 Обновление событий из Google Calendarr...');
            fetchEvents();
        }, 600000); // 10 минут = 600000 мс

        return () => clearInterval(interval); // очистка интервала
    }, []);

    const tileContent = ({ date }: { date: Date }) => {
        const hasEvents = events.some(event =>
            isSameDay(parseISO(event.start.dateTime), date)
        );
        return hasEvents ? <div className="tile-marker-wrapper"><span className="event-dot" /></div> : null;
    };

    const getEventsForDate = (date: Date) => {
        return events.filter(event =>
            isSameDay(parseISO(event.start.dateTime), date)
        );
    };

    const selectedEvents = selectedDate ? getEventsForDate(selectedDate) : [];

    return (
        <div className="calendar-wrapper">
            {/* Левая панель */}
            <div className="sidebar">
                <div className="event-display">
                {selectedEvents.length > 0 ? (
                    <>
                        <div style={{ position: 'relative' }}>
                            <img
                                src="src/assets/Images/calendar/dancer.png"
                                alt="Event"
                                className="event-image"
                            />
                            <div className="overlay">
                                <div className="big-date">{format(selectedDate!, 'd')}</div>
                                <div className="month-text">{format(selectedDate!, 'LLLL', { locale: ru })}</div>
                            </div>
                        </div>
                        <div className="event-info">
                            <h2>{selectedEvents[0].summary}</h2>
                            {selectedEvents[0].description && <p>{selectedEvents[0].description}</p>}
                        </div>
                    </>
                ) : (
                    <p style={{ marginTop: '40px', fontSize: '18px', textAlign: 'center' }}>Нет событий</p>
                )}
                </div>
            </div>

            {/* Правая панель */}
            <div className="main">
                <div className="today-label">
                    {/*Сегодняшняя дата: {format(, 'd MMMM yyyy', { locale: ru })}*/}
                </div>

                <Calendar
                    onClickDay={setSelectedDate}
                    value={selectedDate}
                    locale="ru-RU"
                    tileContent={tileContent}
                />
            </div>
        </div>
        // <div className="calendar_background">
        //     <div className="calendar_conteiner">
        //         <div className="events">
        //             <Calendarr
        //                 onClickDay={setSelectedDate}
        //                 tileContent={tileContent}
        //                 locale="ru-RU"
        //             />
        //             {selectedDate && (
        //                 <div className="mt-4">
        //                     <h2 className="text-xl mb-2">
        //                         События на {format(selectedDate, 'dd MMMM yyyy')}
        //                     </h2>
        //                     {selectedEvents.length === 0 ? (
        //                         <p>Нет событий</p>
        //                     ) : (
        //                         <ul className="list-disc pl-5">
        //                             {selectedEvents.map(event => (
        //                                 <li key={event.id} className="mb-4">
        //                                     <strong>{event.summary}</strong> <br />
        //                                     {format(parseISO(event.start.dateTime), 'HH:mm')} —{' '}
        //                                     {format(parseISO(event.end.dateTime), 'HH:mm')}
        //                                     {event.description && (
        //                                         <p className="mt-1 text-sm text-gray-700">{event.description}</p>
        //                                     )}
        //                                 </li>
        //                             ))}
        //                         </ul>
        //                     )}
        //                 </div>
        //             )}
        //         </div>
        //     </div>
        // </div>
    );
};


