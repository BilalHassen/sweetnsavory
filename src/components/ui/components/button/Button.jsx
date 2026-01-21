import "./Button.scss";
function Button({
  children,
  className = "",
  variant = "primary",
  size = "reg",
  identity,
  selectedValue,
  type = "button",
  ...props
}) {
  // Backward-compatible "toggle button" behavior (used in Menu):
  // When `selectedValue` + `identity` are provided, automatically switch to the
  // inactive style if this button is not the currently selected value.
  const resolvedVariant =
    selectedValue !== undefined && identity !== undefined && selectedValue !== identity
      ? "inactive"
      : variant;

  const classes = `btn btn--${resolvedVariant} btn--${size} ${className}`.trim();
  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
