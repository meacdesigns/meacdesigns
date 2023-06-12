import GoogleMap from "../components/GoogleMap/GoogleMap";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";
import withPrimaryLayout from "../layout/primary-layout";
import ContactUsHeader from "../components/ContactUsHeader/ContactUsHeader";

const Contact = () => {
  return (
    <div id="contact">
      <ContactUsHeader />
      <ContactInfo />
      <ContactUsForm />
      <GoogleMap />
    </div>
  );
};

const PLContact = withPrimaryLayout(Contact);

export default PLContact;
