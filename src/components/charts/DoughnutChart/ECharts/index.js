import ReactEcharts from 'echarts-for-react';

export default function EChartsTest() {

  let option = {

    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '0%',
      left: 'center'
    },
    series: [
      {
        name: 'Quincena',
        type: 'pie',
        radius: ['35%', '70%'],
        avoidLabelOverlap: false,
        labelLine: {
          show: false
        },
        data: [
          { value: 25, name: '1/4' },
          { value: 25, name: '2/4' },
          { value: 25, name: '3/4' },
          { value: 25, name: '4/4' }
        ]
      }
    ]
  }

  return (
    <ReactEcharts option={option} />
  )
}