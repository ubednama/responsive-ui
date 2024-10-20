import { useState, useEffect } from "react";
import Toggle from "./Components/Toggle";
import DateDropdown from "./Components/DateDropdown";
import StrategyCard from "./Components/StrategyCard";
import NoStrategies from "./Components/NoStrategy";
import { dateArray, strategyArray, views } from "./utils/constant";
import { formatDate } from "./utils/utils";
import PropTypes from "prop-types";

export default function App() {
  const [selectedView, setSelectedView] = useState("Bullish");
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);
  const [strategies, setStrategies] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
  const selectedStrategies =
    strategyArray.find((item) => item.View === selectedView)?.Value[
      selectedDate
    ] || [];
  const strategyCounts = selectedStrategies.reduce((acc, strategy) => {
    acc[strategy] = (acc[strategy] || 0) + 1;
    return acc;
  }, {});
  setStrategies(
    Object.entries(strategyCounts).map(([name, count]) => ({ name, count }))
  );
}, [selectedView, selectedDate]);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsDropdownOpen(false);
  };

  return (
    <div className="max-w-sm mx-auto">
      <div className="w-full container mx-auto pt-4">
        <Toggle views={views} onSelectView={setSelectedView} />
        <DateDropdown
          selectedDate={selectedDate}
          toggleDropdown={toggleDropdown}
          isDropdownOpen={isDropdownOpen}
          handleDateSelect={handleDateSelect}
          dateArray={dateArray}
          className="mt-4 mb-4 space-y-4"
        />
        <div className="space-y-4">
          {strategies.length > 0 ? (
            strategies.map(({ name, count }) => (
              <StrategyCard key={name} name={name} count={count} />
            ))
          ) : (
            <NoStrategies date={formatDate(selectedDate)} />
          )}
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  views: PropTypes.arrayOf(PropTypes.string).isRequired,
  dateArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  strategyArray: PropTypes.arrayOf(
    PropTypes.shape({
      View: PropTypes.string.isRequired,
      Value: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    })
  ).isRequired,
};
