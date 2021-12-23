import { useState } from 'react';
import './About.css';

const About = () => {
  const tabInfo = [
    {
      key: '1',
      title: 'Tech',
      content: (
        <p>Hi this is the tech content</p>
      )
    }, {
      key: '2',
      title: 'Experience',
      content: (
        <p>This is my experience :D</p>
      )
    }, {
      key: '3',
      title: 'Human',
      content: (
        <p>Here is what I do for fun :D</p>
      )
    }
  ];

  const [ currentTab, setTab ] = useState('1');

  return (
    <section className="about--page" id="aboutSection">
      <section className="about--tabs">
    <nav>
        <ul className="about--menu">
          {tabInfo.map(tab => {
            if (tab.key === currentTab) {
              return (
                <li key={tab.key} className="about--tab about--active">{tab.title}</li>
              )
            } else {
              return (
              <li onClick={() => setTab(tab.key)} key={tab.key} className="about--tab">{tab.title}</li>
            )
            }
            
          })}
        </ul>
    </nav>
    {tabInfo.map(tab => {
      if (tab.key === currentTab) {
        return (
        <div className="about--panel about--active">
          {tab.content}
        </div>
        )
      } else {
          return (
        <div className="about--panel">
          {tab.content}
        </div>
        )
      }
    })}
</section>
    </section>
  )
}

export default About;