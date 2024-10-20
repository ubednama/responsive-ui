import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";
import { formatDate } from "../utils/utils";

const DateDropdown = ({
  selectedDate,
  toggleDropdown,
  isDropdownOpen,
  handleDateSelect,
  dateArray,
  className,
}) => {
  return (
    <div className={className}>
      <button
        className="flex items-center justify-between px-4 py-2 text-left bg-white border rounded-xl shadow-sm w-full font-semibold"
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
        aria-haspopup="listbox"
        aria-label={`Toggle dropdown for ${selectedDate}`} >
        <span>{formatDate(selectedDate)}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-200 text-blue-600 ${ isDropdownOpen ? "transform rotate-180" : "" }`} />
      </button>
      {isDropdownOpen && (
        <div className="flex justify-center bg-white rounded-xl w-full">
          <div className="w-[95%]">
            {dateArray.map((date) => (
              <button
                key={date}
                className="font-semibold block border rounded-xl mb-3 w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={() => handleDateSelect(date)}
              >
                {date}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

DateDropdown.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  isDropdownOpen: PropTypes.bool.isRequired,
  handleDateSelect: PropTypes.func.isRequired,
  dateArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default DateDropdown;