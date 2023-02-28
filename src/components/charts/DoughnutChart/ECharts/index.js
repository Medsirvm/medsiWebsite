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
          { value: 25, name: '1/4', itemStyle: { color: "#00263C", borderColor: "#FFF", borderWidth: 2, borderRadius: 6 } },
          { value: 25, name: '2/4', itemStyle: { color: "#00263C", borderColor: "#FFF", borderWidth: 2, borderRadius: 6 } },
          { value: 25, name: '3/4', itemStyle: { color: "#00263C", borderColor: "#FFF", borderWidth: 2, borderRadius: 6 } },
          { value: 25, name: '4/4', itemStyle: { color: "#00263C", borderColor: "#FFF", borderWidth: 2, borderRadius: 6 } },
        ]
      }
    ]
  }

  return (
    <ReactEcharts option={option} />
  )
}