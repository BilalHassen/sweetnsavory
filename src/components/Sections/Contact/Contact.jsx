import React from "react";
import "./Contact.scss";
import SectionHeader from "@/components/ui/components/SectionHeader/SectionHeader";
import { contactData, storeHoursData } from "@/components/Sections/Contact/ContactData";
import InfoCard from "@/components/ui/components/InfoCard/InfoCard";
import CardStructure from "@/components/ui/components/CardStructure/CardStructure";
import {  FaMapMarkerAlt, } from "react-icons/fa";
// Use one consistent alias style for UI components
import Button from "@/components/ui/components/button/Button";
function Contact() {
  return (
    <section id="contact" className="contact">
        <div className="contact__wrapper">
      <SectionHeader
        eyebrow={"Contact"}
        title={"Get in Touch"}
        description={
          "Questions, catering, or custom orders? Reach out and we’ll get back to you as soon as possible."
        }
      />
      <ul className="contact__list">
        {contactData.map((item) => (
          <li key={item.id} className="contact__listItem">
            <InfoCard>
              <CardStructure Icon={item.Icon} title={item.title} info={item.info} />
            </InfoCard>
          </li>
        ))}

      </ul>
      </div>

      <div className="contact__lrgWrapper">
      <div className="contact__hours">
    
          <div className="contact__hoursCard">
            <div className="contact__hoursHeader">
              <span className="contact__hoursIcon" aria-hidden="true">
                <storeHoursData.Icon />
              </span>
              <h3 className="contact__hoursTitle">{storeHoursData.title}</h3>
            </div>

            <ul className="contact__hoursList">
              {storeHoursData.hours.map((row) => (
                <li key={row.id} className="contact__hoursRow">
                  <span className="contact__hoursDay">{row.day}</span>
                  <span className="contact__hoursTime">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
        
      </div>

      <div className="contact__card contact__card--map">
        <div className="contact__mapCard">
          <span className="contact__mapIcon" aria-hidden="true">
            <FaMapMarkerAlt />
          </span>
          <h3 className="contact__mapTitle">Find Us on the Map</h3>
          <Button variant={"outline-orange-alt"} size={"reg"}>Get Directions</Button>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Contact;
