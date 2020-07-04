import React, {useState} from 'react';
import { Donut } from 'react-dial-knob'
import './info-knobs.component.scss'

const InfoKnobs = () => {
    const [growthRate,setGrowthRate] = useState(50);
    const [wfhPopulation,setWfhPopulation] = useState(50);
    const [daysInOffice,setdaysInOffice] = useState(50);


    return (
        <div class="knobs-container">
            <div class="knob">
                <Donut
                diameter={100}
                min={0}
                max={100}
                step={1}
                value={growthRate}
                theme={{
                    donutColor: 'blue'
                }}
                onValueChange={setGrowthRate} />

            </div>
            <div class="knob">
                <Donut
                diameter={100}
                min={0}
                max={100}
                step={1}
                value={wfhPopulation}
                theme={{
                    donutColor: 'blue'
                }}
                onValueChange={setWfhPopulation} />
            </div>
            <div class="knob">
            <Donut
                diameter={100}
                min={0}
                max={100}
                step={1}
                value={daysInOffice}
                theme={{
                    donutColor: 'blue'
                }}
                onValueChange={setdaysInOffice} />
            </div>

        </div>
    )
}

export default InfoKnobs;
