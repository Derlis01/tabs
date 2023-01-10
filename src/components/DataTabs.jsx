import React, {useState, useEffect} from 'react'
import './datatabs.css'

const DataTabs = ({activesTabs}) => {

    const [tab, setTab] = useState(activesTabs)

    useEffect(()=>{
      const filtered = activesTabs.filter(e => e[1] === true);
      setTab(filtered);
      console.log(filtered);
    },[activesTabs])
  
  return (
    <>
        <div className="data">
            {tab.map((item, index) => (
                <div key={index}>{`${item[0]} is showing here`}</div>
            ))}
        </div>
    </>
  )
}

export default DataTabs