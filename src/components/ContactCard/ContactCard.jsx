import { Heading3 } from "../Heading/Heading";

const ContactCard = ({ title, items, type }) => {
  const icon = {
    PHONE: "fa-mobile-alt",
    LOCATION: "fa-map-marker-alt",
    EMAIL: "fa-envelope",
  };
  return (
    <div className="contact-box px-5 py-5 lg:py-10 text-center flex justify-center items-center flex-col">
      <i className={`fas text-primary text-2xl lg:text-4xl mb-6 ${icon[type]}`}></i>
      <div className="mb-4">
        <Heading3 text={title}></Heading3>
      </div>
      <ul className="list-unstyled mb-0">
        {items.map(({ display, action }) => {
          return action === null ? (
            <li key={display}>{display}</li>
          ) : (
            <li key={display}>
              <a className="hover:text-primary" href={action}>{display}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactCard;
