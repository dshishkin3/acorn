import React, { FC } from "react";

import Close from "../../components/ui/close/Close";
import Heading from "../../components/ui/heading/Heading";

import { employees } from "./data";

import "../../../public/styles/about.css";

const About: FC = () => {
  return (
    <div className="about">
      <div className="about__header">
        <Heading>About</Heading>
        <Close />
      </div>

      {/* expertise */}
      <div className="about__expertise">
        <div className="about__expertise-text">
          <p className="about-title">
            Expertise in Marketing Technologies in Branding and Visual
            Communications development
          </p>
          <p className="about-subtitle">
            Amet minim mollit non deserunt ullamco est s it aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="about__expertise-image">
          <img src="./images/about/expertise.png" alt="expertise_image" />
        </div>
      </div>

      {/* solutions */}
      <div className="about__solutions">
        <div className="about__solutions-text">
          <p className="about-title">
            Expertise in Marketing Technologies in Branding and Visual
            Communications development
          </p>
          <p className="about-subtitle">
            Amet minim mollit non deserunt ullamco est s it aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>

      {/* we are the...  ** NEED FIX CLASSNAME */}
      <div className="about__weAreThe">
        <div className="about__weAreThe-text">
          <p className="about-title">We are the most in..</p>
          <p className="about-subtitle">
            Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam consequ
          </p>
        </div>
      </div>

      {/* team */}
      <div className="about__team">
        <p className="about-title">The Acorn's team</p>
        <div className="about__team_cards">
          {employees.map((employee) => (
            <div className="about__team_cards-card" key={employee.id}>
              <img src={employee.image} alt="profileImage" />
              <p className="about__team_cards-card-name">{employee.name}</p>
              <p className="about__team_cards-card-position">
                {employee.position}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* marTech */}
      <div className="about__marTech">
        <div className="about__about__marTech-text">
          <p className="about-title">How MarTech Help Us Build Brands</p>
          <p className="about-subtitle">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.
            <br />
            <br />
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint.
            <br />
            <br />
            Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            <br />
            <br />
            Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.
            <br />
            <br />
            MarTech (Marketing Technologies) is a close combination of
            marketing, technology and management. Of course, these “three
            whales” in business have intersected before, but it is today that
            technology has become so firmly established in life that it is they
            who set the tone for the work of marketing, sales departments and a
            new type of managerial thinking.
          </p>
        </div>
        <div className="about__about__marTech-image">
          <img src="./images/about/marTech.png" alt="marTechImage" />
        </div>
      </div>

      {/* methodologies */}
      <div className="about__methodologies">
        <div className="about__about__methodologies-text">
          <p className="about-title">Corporate set of methodologies</p>
          <p className="about-subtitle">
            Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam consequ
          </p>
        </div>
      </div>

      {/* reviews */}
      <div className="about__reviews">
        <p className="about-title">Customer reviews</p>
      </div>

      {/* partners */}
      <div className="about__partners">
        <p className="about-title">Partners</p>
      </div>

      {/* where are we */}
      <div className="about__where">
        <div className="about__about__where-text">
          <p className="about-title">Where are we</p>
          <p className="about-subtitle">We are Barnaulians</p>
        </div>
      </div>
    </div>
  );
};

export default About;
