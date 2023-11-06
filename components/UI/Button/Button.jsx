import styles from "./Button.module.css";

const Button = ({
  id = null,
  children,
  width,
  height,
  onClick,
  style,
  disabled = false,
  variant = "primary",
  size = "xl",
  icon,
}) => {

  const variants = {
    primary: styles.primary,
    primary_outline: styles.primary_outline,
    secondary: styles.secondary,
    secondary_outline: styles.secondary_outline,
    white: styles.white,
    ghost: styles.ghost,
    light: styles.light,
  };

  const sizes = {
    xl: styles.xl,
    l: styles.l,
    md: styles.md,
    sm: styles.sm,
  };

  const newWidth = width ? `${width}px` : "100%";
  const newHeight = height ? `${height}px` : "100%";
  const customSize =
    width || height ? { width: newWidth, height: newHeight } : {};

  return (
    <button
      id={id}
      onClick={disabled ? null : onClick}
      className={`
        ${styles.button} 
        ${variants[variant]} 
        ${disabled ? styles.disabled : ""} 
        ${sizes[size]}
      `}
      style={{ ...customSize, ...style }}
    >
      {children}

      {icon && icon}
    </button>
  );
};

export default Button;
