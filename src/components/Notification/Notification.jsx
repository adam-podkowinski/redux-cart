import classes from "./Notification.module.scss";

function Notification() {
  return (
    <div className={classes.notification}>
      <div>Error</div>
      <div className={classes.bar} />
    </div>
  );
}

export default Notification;
