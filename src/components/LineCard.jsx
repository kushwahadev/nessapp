import PropTypes from "prop-types";
LineCard.propTypes = {
  imageUrl: PropTypes.string.isRequired, // Add prop-types validation
  title: PropTypes.string.isRequired, // Add prop-types validation
  content: PropTypes.string, // Add prop-types validation
  className: PropTypes.string, // Add prop-types validation
  publishedAt: PropTypes.string, // Add prop-types validation
};

function LineCard({
  title,
  content,
  imageUrl,
  className = ``,
  publishedAt = "",
}) {
  return (
    <div className="max-w-2xl mx-auto p-2 ">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-28 p-2 w-40 object-cover hover:opacity-70"
            src={imageUrl}
            alt="image"
          />
        </div>
        <div className="p-2">
          <div
            className={`uppercase tracking-wide text-sm text-gray-900 font-bold ${className} `}
          >
            {title}
          </div>
          <p className="mt-2 text-slate-500">{content}</p>
          <span className=" text-sm font-light ">
            {new Date(publishedAt).toLocaleString("en-US", {
              timeZone: "Asia/Jakarta",
              dateStyle: "long",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default LineCard;
