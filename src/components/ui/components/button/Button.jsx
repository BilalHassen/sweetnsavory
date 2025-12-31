import "./Button.scss";
function Button({ children, className, variant, size }) {
  const classes = `btn btn--${variant} btn--${size}`
  return <button className={classes}>{children}</button>;
}

export default Button;
