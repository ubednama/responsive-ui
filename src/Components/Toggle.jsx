import { useState } from "react";
import PropTypes from "prop-types";

export default function Toggle({ views, onSelectView }) {
  const [selectedView, setSelectedView] = useState(views[0]);

  const handleViewChange = (view) => {
    setSelectedView(view);
    onSelectView(view);
  };

  return (
    <div
      className="inline-flex rounded-xl bg-gray-100 p-1 w-full"
      role="tablist"
    >
      {views.map((view) => (
        <button
          key={view}
          className={`flex-1 px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-xl flex items-center justify-center ${
            selectedView === view
              ? "bg-blue-600 text-white"
              : "text-gray-500 hover:text-gray-900"
          }`}
          onClick={() => handleViewChange(view)}
          role="tab"
          aria-selected={selectedView === view}
        >
          {view}
        </button>
      ))}
    </div>
  );
}

Toggle.propTypes = {
  views: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectView: PropTypes.func.isRequired,
};