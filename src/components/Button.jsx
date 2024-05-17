import PropTypes from "prop-types";

const Button = ({ title, margin }) => {
  return (
    <button
      className={`${margin} bg-vivid text-lg md:text-xl font-poppins font-bold rounded-2xl py-3 text-white px-5 md:px-8`}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  margin: PropTypes.string,
};

export default Button;
