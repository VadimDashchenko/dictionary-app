import React from 'react'
import { observer } from 'mobx-react-lite';
import dictionary from '../store/Dictionary';
import { Chart } from 'react-google-charts';

interface IChart {
    data: any[]
}

const MyChart = observer(({data}: IChart) => {

    return (
        <div style={{ display: 'flex', maxWidth: 1000 }}>
            <Chart
                width={600}
                height={400}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Dictionary', 'Default data', 'All words in dictionary'],
                    ['Start with the letter', dictionary.startString.length, data.length],
                    ['End with the letter', dictionary.endString.length, data.length],
                    ['Letter appear in the dictionary', dictionary.inAll.length, data.length],
                    ['Repeated in conjunction', dictionary.doubleLetter.length, data.length],
                ]}
                options={{
                    title: 'Queries to dictionary',
                    chartArea: { width: '50%' },
                    vAxis: {
                        title: 'Total letters',
                    },
                }}
                legendToggle
            />
        </div>
    )
})

export default MyChart;