const Tagline1 = ({ text }) => {
  return <div>{text}</div>;
};

const Tagline2 = ({ text, className }) => {
  return (
    <div className={`text-tagling2 font-normal lg:text-center ${className}`}>
      {text}
    </div>
  );
};

const Tagline3 = ({ text }) => {
  return <div>{text}</div>;
};

export { Tagline1, Tagline2, Tagline3 };
