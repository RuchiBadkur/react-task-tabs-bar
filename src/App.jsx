import { useState } from 'react'
import './App.css'

function App() {

  const tabs = [
    {label: 'tab 1', content: <div>content of tab 1</div>},
    {label: 'tab 2', content: <div>content of tab 2</div>},
    {label: 'tab 3', content: <div>content of tab 3</div>},
    {label: 'tab 4', content: <div>content of tab 4</div>},
    {label: 'tab 5', content: <div>content of tab 5</div>}
  ]

  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      {
        tabs.map((tab, index) => (
          <button 
          className={index === activeTab ? 'active' : ''}
          key={index}
          onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))
      }
      <div>
        {tabs[activeTab].content}
      </div>
    </>
  )
}

export default App
