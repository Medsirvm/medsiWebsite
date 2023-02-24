export default function LineBreak({
  space = "1"
}) {
  return (
    <hr style={{
      minHeight: space + "rem",
      maxHeight: space + "rem",
      background: "transparent",
      border: "none",
    }} />
  )
}