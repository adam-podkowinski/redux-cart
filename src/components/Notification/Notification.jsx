import PropTypes from "prop-types";
import classes from "./Notification.module.scss";

function Notification({ status, message }) {
  let statusClass = classes.success;
  if (status === "pending") statusClass = null;
  if (status === "error") statusClass = classes.error;
  const notificationClass = `${classes.notification} ${statusClass}`;

  return (
    <div key={status} className={notificationClass}>
      <p>{message}</p>
      <div className={classes.bar} />
    </div>
  );
}

Notification.propTypes = {
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Notification;
