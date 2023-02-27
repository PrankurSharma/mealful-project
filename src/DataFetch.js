import { useState } from 'react';
import Charts from './Charts';
import TimeCharts from './TimeCharts';
import Collapsible from 'react-collapsible';

function DataFetch({ data, filterDate }) {
    var obj = {};
    var ctrObj = {};
    var filterData = data.filter((x) => {
        return (x.item_date === filterDate);
    });
    for(var i=0;i<filterData.length;i++){
        var ele = filterData[i].schedule_time.substring(0, 10);
        if(ele in ctrObj){
            ctrObj[ele] = ctrObj[ele] + 1;
        }
        else {
            ctrObj[ele] = 1;
        }
        if(ele in obj){
            obj[ele].push(filterData[i].schedule_time.substring(11));
        }
        else {
            obj[ele] = new Array();
            obj[ele].push(filterData[i].schedule_time.substring(11));
        }
    }
    var schedule_dates = Object.keys(ctrObj);
    return (
        <>
            <Charts ctrObj={ctrObj} />
            <h2> Schedule Dates </h2>
            <p> Select any one date from below schedule dates to view its time chart </p>
            {schedule_dates.map((x) => {
                return (
                    <>
                        <Collapsible trigger={x} triggerTagName="div">
                            <TimeCharts objValue={obj[x]} />
                        </Collapsible>
                    </>
                );
            })}
        </>
    );
}

export default DataFetch;