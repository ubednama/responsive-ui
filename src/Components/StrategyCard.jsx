import PropTypes from "prop-types";

export default function StrategyCard({ name, count }) {
  return (
    <div className="flex items-center justify-between w-full max-w-sm px-4 py-3 bg-white border rounded-xl shadow-sm">
      <h3 className="text-base font-bold text-gray-900">{name}</h3>
      <div className="flex items-center font-semibold">
        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
        <p className="text-sm text-gray-500">
          {count} {count === 1 ? 'Strategy' : 'Strategies'}
        </p>
      </div>
    </div>
  )
}

StrategyCard.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
