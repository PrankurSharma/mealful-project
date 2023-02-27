import DataFetch from './DataFetch';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function Main() {
    const [data, set_data] = useState([]);
    const [filterDate, set_filterDate] = useState("");
    const [clicked, set_clicked] = useState(false);
    useEffect(() => {
        Axios.get('/scheduleData.json').then((response) => {
            set_data(response.data); 
        });
    }, []);

    return (
        <>
            <div className='form'>
                <h2> Filter by Number of reservations scheduled for a particular day </h2>
                <label> Date: </label>
                <input type="date" onChange={(e) => {
                    set_filterDate(e.target.value);
                    set_clicked(true);
                }}/>
            </div>
            {clicked && <DataFetch data={data} filterDate={filterDate}/>}
        </>
    );
}

export default Main;