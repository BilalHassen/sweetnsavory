import "./Button.scss";
function Button({
  children,
  className = "",
  variant,
  size,
  identity,
  ...props
}) {
  console.log("props:", props.selectedValue);

  console.log(props.selectedValue === identity);

  const classes = `btn btn--${
    props.selectedValue !== identity ? "inactive" : variant
  } btn--${size} ${className}`.trim();
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
