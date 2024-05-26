import PropTypes from "prop-types";

const Cards = ({ name, description, tags, image }) => {
  return (
    <div className="card max-w-[400px] w-full flex flex-col h-[600px] ss:h-[500px] rounded-3xl bg-[#f1f1f1] shadow-lg border-2">
      <div className="image-content relative flex flex-col px-2 py-4 items-center gap-y-1">
        <span className="overlay absolute h-full w-full bg-[#9DB0EC] left-0 top-0 rounded-t-3xl rounded-bl-3xl before:content-[' '] before:absolute before:h-10 before:w-10 before:bg-[#9DB0EC] before:right-0 before:-bottom-10 after:content-[' '] after:absolute after:h-10 after:w-10 after:right-0 after:-bottom-10 after:rounded-tl-none after:rounded-tr-3xl after:rounded-b-none after:bg-[#f1f1f1]"></span>
        <div className="relative flex h-[150px] w-full ss:w-[80%] border-2 rounded-xl bg-white">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover rounded-xl border-4 border-[#4070f4]"
          />
        </div>
      </div>
      <div className="card-content relative flex flex-col w-full h-[400px] ss:h-[300px] px-3 py-4 items-center">
        <h2 className="title text-lg font-bold text-[#000080]">{name}</h2>
        <p className="description text-sm text-[#000080] text-center">
          {description}
        </p>
        <div className="tags absolute bottom-[70px] flex flex-wrap gap-2 justify-center mt-4">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="tag relative bg-vivid text-white text-xs font-semibold mr-2 px-5 py-2 rounded z-0"
            >
              {tag}
              <div
                className={`absolute top-0 bottom-0 left-0 w-[10px] rounded-tl rounded-bl ${getTagColor(
                  index
                )}`}
              ></div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 border-none flex flex-wrap justify-center items-center font-poppins font-semibold">
          <button className=" text-base text-white py-2 px-4 bg-vivid rounded-md hover:bg-[#AE87F1] cursor-pointer transition-all duration-300">
            Get Code
          </button>
          <button className=" text-base border-4 border-vivid text-[#000080] py-1 px-4 bg-[#f1f1f1] rounded-md m-4 hover:bg-vivid hover:border-gray-300 hover:text-[#f1f1f1] cursor-pointer transition-all duration-300">
            Live
            <span>
              <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const getTagColor = (index) => {
  const colors = [
    "bg-blue-500",
    "bg-red-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-orange-500",
  ];
  return colors[index % colors.length];
};

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
};

export default Cards;
