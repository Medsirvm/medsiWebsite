import React, { useEffect, useState } from 'react';
import ReactEcharts from 'echarts-for-react';

export default function EChartsTest({
  paymentsList
}) {

  const [payment, setPayment] = useState([])

  useEffect(() => { 
    const colors = paymentsList.map((item) => {
      const { estado: type } = item; 
      if (type === 'pagado') return "#0ACC97";
      if (type === 'pendiente') return "#00263C";
      if (type === 'retrazado') return "#DB1B1B";
      return "#FFF";
    }); 
    setPayment(colors);
  }, [paymentsList])


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
          { value: 25, name: '1/4', itemStyle: { color: payment[0], borderColor: "#FFF", borderWidth: 2, borderRadius: 6 } },
          { value: 25, name: '2/4', itemStyle: { color: payment[1], borderColor: "#FFF", borderWidth: 2, borderRadius: 6 } },
          { value: 25, name: '3/4', itemStyle: { color: payment[2], borderColor: "#FFF", borderWidth: 2, borderRadius: 6 } },
          { value: 25, name: '4/4', itemStyle: { color: payment[3], borderColor: "#FFF", borderWidth: 2, borderRadius: 6 } },
        ]
      }
    ]
  }

  return (
    <ReactEcharts option={option} />
  )
}
