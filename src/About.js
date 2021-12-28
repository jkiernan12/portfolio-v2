import { useState } from 'react';
import './About.css';

const About = () => {
  const tabInfo = [
    {
      key: '1',
      title: 'Experience',
      content: (
        <div>
          <p>In my previous positions, I worked in digital and print content creation, project management, and digital marketing. I became the go-to person whenever coworkers ran into technical obstacles or when managers wanted to implement new technologies and software. I had the opportunity to learn good ol' fashioned HTML and CSS and implement it to create and enhance marketing channels.</p>
          <h4>Multimedia Coordinator — 1/18-Present</h4>
          <h5>JOHNSON & WALES UNIVERSITY, PROVIDENCE RI</h5>
          <ul>
            <li>Created graphics, wrote copy and designed email campaigns in HTML</li>
            <li>Working in HTML and via CMS, edited and maintained pre-existing web pages, created new
pages and leveraged marketing strategy across website.</li>
            <li>Helped implement and establish style guidelines for a major brand redesign impacting all
marketing channels: print, email and web</li>
<li>Managed an extensive campaign calendar and coordinated with vendors, internal stakeholders,
writers and designers.</li>
          </ul>
          <h4>Editorial Assistant — 10/16-10/17</h4>
          <h5>RHODE ISLAND MONTHLY MAGAZINE, PROVIDENCE RI</h5>
          <ul>
            <li>Demonstrated strong writing and organizational skills by pitching and writing profiles, features, shorts, and weekly blog posts.</li>
            <li>Managed local travel website and social media and utilized creative outreach and SEO to boost followers.</li>
            <li>Collaborated with coworkers to create compelling video content promoting stories across digital platforms.</li>
<li>Worked with corporate advertisers to create curated publications focusing on new business ventures.
</li>
          </ul>
        </div>
      )
    }, {
      key: '2',
      title: 'Tech',
      content: (
        <div>
        <p>In my career, I've had plenty of opportunities to focus my energy on technical challenges -- web management, creating HTML email/pages templates, CRM and database work -- and this was my favorite part of the job. I self-taught with lessons from the Odin Project, uDemy, and freeCodeCamp. In 2021, I realized programming was something I wanted to pursue fulltime, and I joined the <a href="https://turing.edu/
        ">Turing School of Software & Design</a>.</p>
        <p>It has been an amazing experience. I've learned a lot of technical skills, but also soft skills in terms of teamwork in a technical environment, the Agile methodology/workflow, and challenges in the larger software development ecosystem.</p>
        <p><span class="strong">Frontend</span>:React, React Router, HTML/CSS, Sass, ES6 JavaScript</p>
        <p><span class="strong">Backend</span>: Node.js, Express, RESTful APIs, PostrgreSQL, Mongoose & MongoDB</p>
        <p><span class="strong">Testing</span>: TDD, Mocha/Chai, Cypress</p>
        <p><span class="strong">Tooling</span>: Git, GitHub, ESLint, NPM, VSCode</p>
        </div>
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
    <h2>About Me</h2>
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