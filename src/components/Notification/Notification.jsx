import classes from './Notification.module.scss';

const Notification = () => {
  return (
    <div className={classes.notification}>
      <div>Notification: Error</div>
      <div className={classes.bar}/>
    </div>
  )
}

export default Notification;
