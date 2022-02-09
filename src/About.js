import { useState } from 'react';
import './About.css';
import KiernanResume from './assets/KiernanResume.pdf';

const About = () => {
  const tabInfo = [
    {
      key: '1',
      title: 'Experience',
      content: (
        <div>
        <h4 className='experience--title'>My Story</h4>
          <p>In my previous positions, I worked in digital and print content creation, project management, and digital marketing. I became the go-to person whenever coworkers ran into technical obstacles or when managers wanted to implement new technologies and software. I had the opportunity to learn good ol' fashioned HTML and CSS and implement it to create and enhance marketing channels. </p>

          <p>I self-taught with lessons from the Odin Project, uDemy, and freeCodeCamp. In 2021, I realized programming was something I wanted to pursue fulltime, and I joined the <a href="https://turing.edu/
          ">Turing School of Software & Design</a>.</p>
          <p>It has been an amazing experience. I've learned a lot of technical skills, but also soft skills in terms of teamwork in a technical environment, the Agile methodology/workflow, and challenges in the larger software development ecosystem.</p>
          <h4 className='experience--title'>My Experience</h4>
          <div className='job-title--container'>
            <p className='job-title'>Multimedia Coordinator</p>
            <p>Jan 2018 - July 2021</p>
          </div>
          <p className='job-company'>Johnson & Wales University, Providence RI</p>
          <ul>
            <li>Developed 400+ email templates using Photoshop, HTML, CSS and Liquid templating language.</li>
            <li>Edited and maintained pre-existing web pages and created new pages and templates, including landing pages for more than 40 events.</li>
            <li>Created and maintained an applicant portal for 1,200+ students per marketing cycle using custom HTML/CSS, Javascript and database queries.</li>
            <li>Helped manage database/CRM: trained and guided users, implemented new features, and resolved issues.</li>
            <li>Maintained a campaign calendar of 75+ print, email and digital campaigns and coordinated with vendors and internal stakeholders.</li>
          </ul>
          <div className='job-title--container'>
            <p className='job-title'>Editorial Assistant</p>
            <p>October 2016 - October 2017</p>
          </div>
          <p className='job-company'>Rhode Island Monthly Communications</p>

          <ul>
            <li>Pitched and wrote profiles, features, shorts, and weekly blogs. </li>
            <li>Managed local travel website and social media and utilized creative outreach and SEO to boost followers.</li>
          </ul>
          <div className='experience-button--container'>
            <button className='resume--button'><a href={KiernanResume} download>Download Resume</a></button>
          </div>
        </div>
      )
    }, {
      key: '2',
      title: 'Tech',
      content: (
        <div>

        <p><span className="strong">Frontend</span>: React, React Router, HTML/CSS, Sass, ES6 JavaScript, Leaflet.js</p>
        <p><span className="strong">Backend</span>: Node.js, Express, RESTful APIs, PostgreSQL</p>
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
        <h4>Here's what I'm into:</h4>
        <ul>
          <li>Rock Climbing: DEFINITELY my biggest hobby. When not climbing indoors, I climb in Connecticut and New Hampshire. You can check out some of my climbing ticks and to-dos on <a href="https://www.mountainproject.com/user/200928904/john-kiernan">Mountain Project</a></li>
          <li>Homebrewing/craft beer: I've been homebrewing for five years. My current fascination is European-style sour beers (here's <a href="https://www.beeradvocate.com/beer/profile/641/1745/">one of my favorites</a>). Currently I have an oude bruin in the fermenter that should be ready in... oh maybe another year or so?</li>
          <li>Longboarding: I picked up a couple of boards this past summer and have been cruising around on my local bike path ever since. No tricks or bombing downhill just yet, just tootling around.</li>
          <li>Travel: Sadly more of a pre-Covid hobby -- I managed to get to Germany, Spain and Italy in the last couple of years. I would love to get out to Japan and Australia/New Zealand sometime in the next few years.</li>
          <li>Watery adventures: Sailing, snorkeling ans scuba diving 🐠🌊⛵️</li>
        </ul>
        </div>
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