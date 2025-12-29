import "./Button.scss";

function Button({
  children,
  className = "",
  variant,
  size,
  type = "button",
  ...props
}) {
  const classes = [
    "btn",
    variant ? `btn--${variant}` : "",
    size ? `btn--${size}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
