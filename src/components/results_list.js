import React from 'react';
import ResultsCard from './results_card';
import dummydata from '../dummy_data/dummydata';

export default props => {
    let list = dummydata.map((item, index)=>{
        return <ResultsCard key={index} item={item}/>
    })
    return (
        <div className="col s9">
        {/* <ResultsCard/> */}
            {list}
        </div>
    )
}
