import React, { useState } from 'react';
import './TimeInput.scss';
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';

const TimeInput = () => {

    const [ hours, setHours ] = useState()
    const [ minutes, setMinutes ] = useState()
    const [ meridiem, setMeridiem ] = useState()
    const [ time, setTime ] = useState('');
    const [ days, setDays ] = useState()

    // return (
    //     <section>
    //       <br />
    //       <p>Selected Time: {time || '-'}</p>
    //       <TimePicker
    //         placeholder="Select Time"
    //         use12Hours
    //         showSecond={false}
    //         focusOnOpen={true}
    //         format="hh:mm A"
    //         onChange={e => setTime(e.format('LT'))}
    //       />
    //     </section>
    //   );


    return (
        <section>
            <form className='time-form-container'>
                <label for='hour'>Race Time:</label>
                <section className='input-area'>
                    <input 
                        className='hours-input'
                        type='number'
                        id='hour' 
                        name='hour'
                        onChange={(e) => setHours(e.target.value)}
                    />
                    <button
                        type='submit'
                        className='submit-btn'
                        onSubmit={setHours}
                    >Submit</button>
                </section>
            </form>
            <section className='divider-container'>
                <div className='style-divider'></div>
            </section>
        </section>
    )
}

                /* <label>
                    Minutes:
                    <input 
                        type="number" 
                        name="minute" 
                        onChange={(e) => setMinutes(e.target.value)}
                    />
                </label>
                <select>
                    <option value="P">PM</option>
                    <option value="A">AM</option>
                    onChange={(e) => setMeridiem(e.target.value)}
                </select>
                <label>
                    Day:
                    <input 
                        type="number" 
                        name="day"
                        onChange={(e) => setDays(e.target.value)}
                    />
                </label> */

export default TimeInput;

