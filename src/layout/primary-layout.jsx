import ContactFloatingButton from "../components/ContactFloatingButton/ContactFloatingButton";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

const withPrimaryLayout = (WrappedComponent) => {
  const ComponentWithAppContext = (props) => {
    return (
      <div>
        <Nav />
        <WrappedComponent {...props} />
        <Footer />
        <ContactFloatingButton />
      </div>
    );
  };

  return ComponentWithAppContext;
};

export default withPrimaryLayout;
