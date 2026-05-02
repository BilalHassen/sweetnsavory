import "./Button.scss";

function Button({
  children,
  className = "",
  variant = "primary",
  size = "",
  fullWidth = false,
  identity,
  selectedValue,
  type = "button",
  as,
  href,
  ...props
}) {
  const resolvedVariant =
    selectedValue !== undefined && identity !== undefined && selectedValue !== identity
      ? "inactive"
      : variant;

  const classes = [
    "btn",
    `btn--${resolvedVariant}`,
    size && `btn--${size}`,
    fullWidth && "btn--full",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const Component = as ?? (href ? "a" : "button");

  return (
    <Component
      type={Component === "button" ? type : undefined}
      href={Component === "a" ? href : undefined}
      className={classes}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
