import PropTypes from "prop-types";

export default function NoStrategies({ date }) {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm p-8 bg-white rounded-md" role="alert">
      <p className="text-base text-gray-600">There are no strategies for</p>
      <p className="mt-2 text-lg font-medium text-gray-900">{date}</p>
    </div>
  )
}


NoStrategies.propTypes = {
  date: PropTypes.string.isRequired,
};