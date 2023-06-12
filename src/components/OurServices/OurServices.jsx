const lables = {
  title: "Services",
};

const Services = [
  {
    display: "Floor Design",
    action: null,
  },
  {
    display: "Interior Design",
    action: null,
  },
  {
    display: "3D Elevation Design",
    action: null,
  },
  {
    display: "Structure Design",
    action: null,
  },
  {
    display: "Landscape Design",
    action: null,
  },
];

const OurServices = () => {
  return (
    <div className="OurServices">
      <h3
        className="footer-title font-semibold text-xl mb-4 pb-3 relative 
      after:absolute after:w-12 after:left-0 after:h-0.5 after::content-[''] after:bottom-0.5 after:bg-primary 
      before:absolute before:w-full before:left-0 before:h-0.5 before::content-[''] before:bottom-0.5 before:bg-borderColor"
      >
        {lables.title}
      </h3>
      <ul className="list-unstyled mb-0">
        {Services.map(({ display, action }) => {
          return action === null ? (
            <li className="border-b border-borderColor mb-4 pb-3" key={display}>
              {display}
            </li>
          ) : (
            <li key={display}>
              <a href={action}>{display}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurServices;
