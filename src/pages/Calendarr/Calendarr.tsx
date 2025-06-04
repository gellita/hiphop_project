import {useEffect, useState} from "react";
import Calendar from "react-calendar";
import './index.sass';
import {isSameDay} from 'date-fns'
import {ru} from "date-fns/locale";
import {format, isWithinInterval, parseISO, startOfDay, endOfDay} from "date-fns";
import {getEventsByDateRange} from "../../services/event.service.ts";


interface CalendarEvent {
    id: string;
    summary: string;
    description: string;
    start: { dateTime: string };
    end: { dateTime: string };
}

interface Event {
    "id": number,
    "name": string,
    "date": string
    "city": string,
    "place": string,
    "nominations": [],
}

// const API_KEY = 'AIzaSyAMGefIN4gE8RLh07QChcQICp86VTwN9Fo';
// const CALENDAR_ID = '85fdbb3b9740007888f217c22bf3118fbf88ef5c214f403167f131a5102e9a14@group.calendar.google.com';
//
// const fetchGoogleCalendarEvents = async (): Promise<CalendarEvent[]> => {
//     const timeMin = new Date().toISOString();
//     const res = await fetch(
//         `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${timeMin}`
//     );
//     const data = await res.json();
//     return data.items || [];
// };


export const Calendarr = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const fetchEventsForMonth = async (date: Date) => {
        const startDate = startOfDay(new Date(date.getFullYear(), date.getMonth(), 1));
        const endDate = endOfDay(new Date(date.getFullYear(), date.getMonth() + 1, 0));
        try {
            const events = await getEventsByDateRange(startDate, endDate);
            console.log(events.length);
            setEvents(events);
        } catch (err) {
            console.error("Ошибка загрузки событий", err);
        }
    };


    useEffect(() => {
        fetchEventsForMonth(new Date())
    }, []);

    const onActiveStartDateChange = ({activeStartDate}: { activeStartDate: Date }) => {
        fetchEventsForMonth(activeStartDate);
    };

    // Проверка — есть ли события в этот день
    const tileContent = ({date}: { date: Date }) => {
        const hasEvents = events.some(ev => {
            const evDate = parseISO(ev.date);
            return format(evDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd');
        });
        return hasEvents ? <div className="tile-marker-wrapper"><span className="event-dot"/></div> : null;
    };

    const selectedEvents = selectedDate
        ? events.filter(ev => format(parseISO(ev.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd'))
        : events;

    return (
        <div className="calendar-wrapper">
            <div className="sidebar">
                <div className="event-display">
                    {selectedEvents.length > 0 ? (
                        <>
                            <div style={{position: 'relative'}}>
                                {/* Здесь можно добавить картинку и стили */}
                                {selectedDate != null ? (
                                    <>
                                        <div className="big-date">{format(selectedDate!, 'd')}</div>
                                        <div className="month-text">{format(selectedDate!, 'LLLL', {locale: ru})}</div>
                                    </>
                                    ): (
                                    <>
                                        <div className="month-text">{format(selectedEvents[0].date, 'LLLL', {locale: ru})}</div>
                                    </>
                                    )}
                            </div>
                            <div className="event-info">
                                {selectedEvents.map((event) => (
                                    <div key={event.id} className="event-card"
                                         onClick={() => window.location.href = `/event/${event.id}`}
                                         style={{cursor: 'pointer'}}>
                                        <div className="event-info-name">{event.name}</div>
                                        <div className="event-info-place">{event.city}, {event.place}</div>
                                        <div className="event-info-date">{format(event.date, "yyyy-MM-dd")}</div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p style={{marginTop: '40px', fontSize: '18px', textAlign: 'center'}}>Нет событий</p>
                    )}
                </div>
            </div>

            <div className="main">
                <Calendar
                    locale="ru-RU"
                    onClickDay={setSelectedDate}
                    value={selectedDate}
                    tileContent={tileContent}
                    onActiveStartDateChange={onActiveStartDateChange}
                />
            </div>
        </div>
    );
};


