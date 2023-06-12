import constants from "../../constants/common";
import ContactUsHeaderImage from "./asstes/bg-01.jpeg";

const ContactUsHeader = () => {
  return (
    <div className="mb-10">
      <div
        style={{
          backgroundImage: `url(${ContactUsHeaderImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "400px",
        }}
      />
      {/* <img src={ContactUsHeaderImage} alt={constants.ALT_DEFULT} /> */}
    </div>
  );
};

export default ContactUsHeader;
