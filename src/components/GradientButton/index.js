export default function GradientButton({
  children,
  handleClick = () => { },
  simulator = true
}) {
  return simulator ? (
    <button className="gradientButton" type="button" onClick={(e) => { handleClick(e) }}>
      <span>
        {children}
      </span>
    </button>
  ) : null;
}