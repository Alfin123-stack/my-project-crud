import PropTypes from "prop-types";

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
    {icon}
    <span>{value || label}</span>
  </div>
);

InfoItem.propTypes = {
  icon: PropTypes.node.isRequired, 
  label: PropTypes.string,
  value: PropTypes.string.isRequired, 
};

export default InfoItem;
