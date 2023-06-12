const Heading1 = ({ text }) => {
  return <h1>{text}</h1>;
};

const Heading2 = ({ text, className }) => {
  return (
    <h2
      className={`text-3xl lg:text-4xl font-semibold text-heading2 ${className}`}
    >
      {text}
    </h2>
  );
};

const Heading3 = ({ text }) => {
  return <h3 className="text-heading3 text-xl font-semibold ">{text}</h3>;
};

export { Heading1, Heading2, Heading3 };
