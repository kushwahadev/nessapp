import PropTypes from "prop-types";
Card.propTypes = {
  imageUrl: PropTypes.string.isRequired, // Add prop-types validation
  title: PropTypes.string.isRequired, // Add prop-types validation
  content: PropTypes.string, // Add prop-types validation
  className: PropTypes.string, // Add prop-types validation
};
function Card({ title, content = "", imageUrl, className = `` }) {
  return (
    <div className={`p-2 `}>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-54 object-cover p-2 hover:opacity-70 "
      />

      <div className="px-2">
        <h2 className={` mb-2 ${className}`}>{title}</h2>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}

export default Card;
