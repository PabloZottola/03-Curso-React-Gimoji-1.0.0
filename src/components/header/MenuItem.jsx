import React from "react";
import PropTypes from "prop-types";

const MenuItem = ({ itemData }) => {
  return (
    <nav>
      <ul className="flex gap-3">
        {itemData.map((item) => (
          <li key={item.id}>
            <a
              href="#"
              className="relative inline-block px-4 py-2 font-medium group"
              aria-current="page"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuItem;

MenuItem.defaultProps = {
  itemData: [
    { id: 1, name: "Link-1" },
    { id: 2, name: "Link-2" },
    { id: 3, name: "Link-3" },
    { id: 4, name: "Link-4" },
  ],
};

MenuItem.propTypes = {
  itemData: PropTypes.array,
};
