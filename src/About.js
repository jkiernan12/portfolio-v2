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
          <h4>Multimedia Coordinator — 1/18-7/21</h4>
          <p>JOHNSON & WALES UNIVERSITY, PROVIDENCE RI</p>
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
          <p>RHODE ISLAND MONTHLY MAGAZINE, PROVIDENCE RI</p>
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
        <p><span className="strong">Frontend</span>:React, React Router, HTML/CSS, Sass, ES6 JavaScript</p>
        <p><span className="strong">Backend</span>: Node.js, Express, RESTful APIs, PostrgreSQL, Mongoose & MongoDB</p>
        <p><span className="strong">Testing</span>: TDD, Mocha/Chai, Cypress</p>
        <p><span className="strong">Tooling</span>: Git, GitHub, ESLint, NPM, VSCode</p>
        </div>
      )
    }, {
      key: '3',
      title: 'Human',
      content: (
        <div className='about--container'>
        <p>I'm not just a working, programming 🤖 -- I'm also a human with lots of interests and hobbies!</p>
        <iframe className="about--video" width="560" height="315" src="https://www.youtube.com/embed/A3vQNVZmYSs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <h4>Here's what I'm into:</h4>
        <ul>
          <li>Climbing: DEFINITELY my biggest hobby. When not climbing on plastic, I climb in Connecticut and New Hampshire. You can check out some of my climbing ticks and to-dos on <a href="https://www.mountainproject.com/user/200928904/john-kiernan">Mountain Project</a></li>
          <li>Homebrewing/craft beer: I've been homebrewing for five years. My current fascination is European-style sour beers (here's <a href="https://www.beeradvocate.com/beer/profile/641/1745/">one of my favorites</a>). Currently I have an oude bruin in the fermenter that should be ready in... oh maybe another year or so?</li>
          <li>Longboarding: I picked up a couple of cheapo boards this past summer and have been cruising around on my local bike path ever since. No tricks or bombing downhill just yet, just relaxing carving.</li>
          <li>Travel: Sadly more of a pre-Covid hobby -- I managed to get to Germany, Spain and Italy in the last couple of years. I would love to get out to Japan and Australia/New Zealand sometime in the next few years.</li>
          <li>Watery adventures: Sailing, snorkeling ans scuba diving 🐠🌊⛵️</li>
        </ul>
        </div>
      )
    }
  ];

  const [ currentTab, setTab ] = useState('2');

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
        <div key={tab.key} className="about--panel about--active">
          {tab.content}
        </div>
        )
      } else {
          return (
        <div key={tab.key} className="about--panel">
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