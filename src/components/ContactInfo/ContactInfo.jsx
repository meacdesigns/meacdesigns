import constants from "../../constants/common";
import ContactCard from "../ContactCard/ContactCard";
import { Heading2 } from "../Heading/Heading";
import { Tagline2 } from "../Tagline/Tagline";

const labels = {
  heading: "Let's Get In Touch",
  tagline:
    "Contact our expert team and schedule a meeting at your suitable timing",
  contact_cart_for_call: "Discuss on Phone",
};

const ContactInfo = () => {
  return (
    <div id="ContactInfo">
      <div className="container mb-5 lg:mb-10">
        <div className="pb-5 lg:pb-10">
          <Heading2 className="lg:text-center" text={labels.heading} />
          <Tagline2 text={labels.tagline} />
        </div>
        <div className="contactcards flex flex-col lg:flex-row">
          {constants.CONTACT_INFO.map(({ title, items, type }, index) => {
            return (
              <div
                key={type}
                className={`flex-1 shadow-contactcard mb-7 lg:mb-0 ${
                  index !== 2 ? "lg:mr-7" : ""
                }`}
              >
                <ContactCard title={title} items={items} type={type} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
