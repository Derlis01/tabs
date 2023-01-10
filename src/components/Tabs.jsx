import React, {useState} from 'react'
import './tabs.css'
import DataTabs from './DataTabs'

const Tabs = ({tabs}) => {

    const [array, setArray] = useState(tabs)

    const activeTab = (event) => {
      let elementClicked = event.target;
      if (event.target.tagName === 'P') {
          elementClicked = event.target.parentElement;
      }
      const key = elementClicked.dataset.key;

      const tabs = document.querySelectorAll('.tab');
      tabs.forEach(tab => tab.classList.remove('active'));
      tabs[key].classList.add('active');

      const newArray = [...array]

      newArray.map((dis) => dis[1] = false)

      newArray[key][1] = true

      setArray(newArray)
  }

  return (
    <>
        <div onClick={(e) => activeTab(e)} className='tabs'>{array.map((tab, i) => {
            return <div data-key={i} className='tab' key={i}>
                <p>{tab[0]}</p>
            </div>
        })}</div>
        <DataTabs activesTabs={array} />
    </>
  )
}

export default Tabs