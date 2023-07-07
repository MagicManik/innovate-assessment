import React, { useState } from 'react';
import "react-day-picker/dist/style.css";
// for range
import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';

const pastMonth = new Date();

const DatePick = () => {

    // for range
    const defaultSelected = {
        from: pastMonth,
        to: addDays(pastMonth, 1)
    };
    const [range, setRange] = useState(defaultSelected);

    return (
        <>
            {/* <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            numberOfMonths={2}
            onChange={handleChange}
        /> */}
            <DayPicker
                id="test"
                mode="range"
                defaultMonth={pastMonth}
                selected={range}
                onSelect={setRange}
                numberOfMonths={2}
                disabled={new Date()}
            />
        </>
    );
}

export default DatePick;