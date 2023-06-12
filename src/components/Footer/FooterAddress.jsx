import constants from "../../constants/common";

const { CONTACT_INFO } = constants;
const phoneData = CONTACT_INFO.filter(({ type }) => type === "PHONE")[0].items;
const emailData = CONTACT_INFO.filter(({ type }) => type === "EMAIL")[0].items;
const addressData = CONTACT_INFO.filter(({ type }) => type === "LOCATION")[0]
  .items;

const titleClass =
  "font-semibold border-b-2 border-borderColor mb-4 pb-3 inline-block";

const FooterAddress = () => {
  return (
    <div className="address-section">
      <div className="address pb-5">
        <h4 className={titleClass}>Address</h4>
        <ul>
          {addressData.map(({ display }) => {
            return <li key={display}>{display}</li>;
          })}
        </ul>
      </div>
      <div className="phone pb-5">
        <h4 className={titleClass}>Phone</h4>
        <ul>
          {phoneData.map(({ action, display }) => {
            return (
              <li key={action}>
                <a className="hover:text-primary" href={action}>
                  {display}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="email">
        <h4 className={titleClass}>Email</h4>
        <ul>
          {emailData.map(({ action, display }) => {
            return (
              <li key={action}>
                <a className="hover:text-primary" href={action}>
                  {display}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FooterAddress;
