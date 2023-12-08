import styles from "./styles.module.scss";
import classNames from "classnames";

export default function Button({
  children,
  margin,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  padding,
  paddingLeft,
  paddingRight,
  paddingBottom,
  paddingTop,
  style,
  ...props
}) {
  const classes = classNames({
    [styles.button]: true,
    [styles.small]: props.size === "small",
    [styles.large]: props.size === "large",
    [styles.info]: props.type === "info",
    [styles.danger]: props.type === "danger",
    [styles.warning]: props.type === "warning",
    [styles.success]: props.type === "success",
    [styles.outline]: props.type === "outline",
    [styles.outlineInfo]: props.type === "outlineInfo",
    [styles.outlineDanger]: props.type === "outlineDanger",
    [styles.outlineWarning]: props.type === "outlineWarning",
    [styles.outlineSuccess]: props.type === "outlineSuccess",
  });

  const allStyle = {
    ...(margin && { margin }),
    ...(marginTop && { marginTop: marginTop }),
    ...(marginBottom && { marginBottom: marginBottom }),
    ...(marginLeft && { marginLeft: marginLeft }),
    ...(marginRight && { marginRight: marginRight }),
    ...(padding && { padding }),
    ...(paddingTop && { paddingTop: paddingTop }),
    ...(paddingBottom && { paddingBottom: paddingBottom }),
    ...(paddingLeft && { paddingLeft: paddingLeft }),
    ...(paddingRight && { paddingRight: paddingRight }),
    ...(style && style),
  };

  return (
    <button {...props} className={classes} style={allStyle}>
      {children}
    </button>
  );
}
