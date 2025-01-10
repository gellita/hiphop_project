import {useState} from "react";
import Calendar from "react-calendar";
import './index.sass';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const Calendarr = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className="calendar_background">
        <div className="calendar_conteiner">
            <div className="events"></div>
            <Calendar onChange={onChange} value={value} />
        </div>
        </div>
    );
};