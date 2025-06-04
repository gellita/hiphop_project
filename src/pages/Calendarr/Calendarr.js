import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import './index.sass';
import { ru } from "date-fns/locale";
import { format, parseISO, startOfDay, endOfDay } from "date-fns";
import { getEventsByDateRange } from "../../services/event.service.ts";
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
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const fetchEventsForMonth = async (date) => {
        const startDate = startOfDay(new Date(date.getFullYear(), date.getMonth(), 1));
        const endDate = endOfDay(new Date(date.getFullYear(), date.getMonth() + 1, 0));
        try {
            const events = await getEventsByDateRange(startDate, endDate);
            console.log(events.length);
            setEvents(events);
        }
        catch (err) {
            console.error("Ошибка загрузки событий", err);
        }
    };
    useEffect(() => {
        fetchEventsForMonth(new Date());
    }, []);
    const onActiveStartDateChange = ({ activeStartDate }) => {
        fetchEventsForMonth(activeStartDate);
    };
    // Проверка — есть ли события в этот день
    const tileContent = ({ date }) => {
        const hasEvents = events.some(ev => {
            const evDate = parseISO(ev.date);
            return format(evDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd');
        });
        return hasEvents ? _jsx("div", { className: "tile-marker-wrapper", children: _jsx("span", { className: "event-dot" }) }) : null;
    };
    const selectedEvents = selectedDate
        ? events.filter(ev => format(parseISO(ev.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd'))
        : events;
    return (_jsxs("div", { className: "calendar-wrapper", children: [_jsx("div", { className: "sidebar", children: _jsx("div", { className: "event-display", children: selectedEvents.length > 0 ? (_jsxs(_Fragment, { children: [_jsx("div", { style: { position: 'relative' }, children: selectedDate != null ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "big-date", children: format(selectedDate, 'd') }), _jsx("div", { className: "month-text", children: format(selectedDate, 'LLLL', { locale: ru }) })] })) : (_jsx(_Fragment, { children: _jsx("div", { className: "month-text", children: format(selectedEvents[0].date, 'LLLL', { locale: ru }) }) })) }), _jsx("div", { className: "event-info", children: selectedEvents.map((event) => (_jsxs("div", { className: "event-card", onClick: () => window.location.href = `/event/${event.id}`, style: { cursor: 'pointer' }, children: [_jsx("div", { className: "event-info-name", children: event.name }), _jsxs("div", { className: "event-info-place", children: [event.city, ", ", event.place] }), _jsx("div", { className: "event-info-date", children: format(event.date, "yyyy-MM-dd") })] }, event.id))) })] })) : (_jsx("p", { style: { marginTop: '40px', fontSize: '18px', textAlign: 'center' }, children: "\u041D\u0435\u0442 \u0441\u043E\u0431\u044B\u0442\u0438\u0439" })) }) }), _jsx("div", { className: "main", children: _jsx(Calendar, { locale: "ru-RU", onClickDay: setSelectedDate, value: selectedDate, tileContent: tileContent, onActiveStartDateChange: onActiveStartDateChange }) })] }));
};
