import "./Button.scss";
function Button({ children, className, variant, size }) {
  console.log(className);
  const classes = `btn btn--${variant} btn--${size}`
  return <button className={classes}>{children}</button>;
}

export default Button;
