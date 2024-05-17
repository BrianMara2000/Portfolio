import PropTypes from "prop-types";

const Cards = ({ name, description, tags, image }) => {
  return (
    <div className="card w-full h-[500px] rounded-3xl bg-white ">
      <div className="image-content relative flex flex-col px-2 py-4 items-center gap-y-1">
        <span className="overlay absolute h-full w-full bg-vivid left-0 top-0 rounded-t-3xl rounded-bl-3xl before:content-[' '] before:absolute before:h-10 before:w-10 before:bg-vivid before:right-0 before:-bottom-10 after:content-[' '] after:absolute after:h-10 after:w-10 after:right-0 after:-bottom-10 after:rounded-tl-none after:rounded-tr-3xl after:rounded-b-none after:bg-white"></span>
        <div className="card-iamge relative h-[150px] w-[250px] border-2 rounded-xl bg-white">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover rounded-xl border-4 border-[#4070f4] "
          />
        </div>
      </div>
      <div className="card-content flex flex-col px-3 py-4 items-center">
        <h2 className="title text-lg font-medium text-[#333] ">{name}</h2>
        <p className="description text-sm text-[#707070] text-center">
          {description}
        </p>

        <button className="border-none text-base text-white py-2 px-4 bg-vivid rounded-md m-4 hover:bg-[#265df2] cursor-pointer transition-all duration-300 ">
          View More
        </button>
      </div>
    </div>
  );
};

Cards.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
};

export default Cards;
