import ui from './index.module.css';

export default function DonutChart() {

  const { circularProgress, circularProgressCircle, segment } = ui;
  return (
    <div className={circularProgress}>
      <div className={circularProgressCircle}>
        <div className={segment}></div>
        <div className={segment}></div>
        <div className={segment}></div>
        <div className={segment}></div>
        <div className={segment}></div>
        <div className={segment}></div>
        <div className={segment}></div>
        <div className={segment}></div>
        <div className={segment}></div>
        <div className={segment}></div>
        <div className={segment}></div>
        <div className={segment}></div>
      </div>
    </div>
  )
}