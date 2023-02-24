export default function Parraf({
  size,
  type = "unset",
  top = 0,
  bottom = 0,
  color = "#000",
  children
}) {

  const styles = {
    fontFamily: `Urbanist${type}`,
    fontStyle: "normal",
    lineHeight: "1.25",
    color,
    fontSize: `${size}px`,
    marginTop: `${top}rem`,
    marginBottom: `${bottom}rem`
  }


  return (
    <p style={styles}>
      {children}
    </p>
  )
}