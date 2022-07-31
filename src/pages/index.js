import React from 'react';

import Layout from '../components/Layout';

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/new-york.jpg';
import pic4 from '../assets/images/agora-landingpage.png';
import pic5 from '../assets/images/real-estate.png';
import pic6 from '../assets/images/white-no_circle.png';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <img className='icon' src={pic6}/>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">About Me</h2>
            <p>
              I am a Software Engineer from Brooklyn, New York. I studied
              Computer Science at CUNY Hunter College. I enjoy working on web
              development projects that include websites and web applications
              as a full stack engineer.
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt="" />
          </a>
          <div className="content">
            <h2 className="major">My Skills</h2>
            <p>
              I have used various programming languages for my personal and work projects. These are some of my skills that I am able to use to bring products to life.
            </p>
						<div className="row">
							<div className="col-6 col-12-medium">
								<ul>
									<li>JAVASCRIPT</li>
                  <li>REACT</li>
									<li>HTML</li>
									<li>CSS</li>
								</ul>
							</div>
							<div className="col-6 col-12-medium">
								<ul>
									<li>C++</li>
									<li>PYTHON</li>
									<li>NODE</li>
                  <li>MONGODB</li>
								</ul>
							</div>
						</div>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper alt style3">
        <div className="inner">
          <div className="content">
            <h2 className="major">Experience</h2>
            <p>
              Before becomming a Software Engineer, I had earned my Redcross Lifeguarding
              and Water Safety Instructor certifications as I enjoy staying active on top of my love for coding.
            </p>
						<div className="table-wrapper">
							<table>
								<tbody>
									<tr>
										<td><b>Junior Engineer</b> | Nanov Display Inc.</td>
										<td></td>
										<td>Present</td>
									</tr>
									<tr>
                    <td><b>Technology Intern</b> | JP Morgan Chase and Co.</td>
										<td></td>
										<td>2019</td>
									</tr>
									<tr>
                    <td><b>Water Safety Instructor and Lifeguard</b> | 14th Street Y</td>
										<td></td>
										<td>2014 - 2019</td>
									</tr>
								</tbody>
							</table>
						</div>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Some of My Projects</h2>
          <p>
            You can view some of my projects that I have created below.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Agora</h3>
              <p>
                A web application for college students looking to utilize their
                old education resources and to create study groups.
              </p>
              <a href="/https://the-agora-project.herokuapp.com/" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Real Estate Website</h3>
              <p>
                A website for real estate company looking to assist in purchasing
                the perfect property.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="https://github.com/Kbarias" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
