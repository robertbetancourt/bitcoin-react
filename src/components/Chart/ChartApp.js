import React, { Component } from "react";
import Chart from "react-apexcharts";
class ChartApp extends Component {
  constructor(props) {
    super(props);
console.log(props, 'me llegaron lol');

    this.state = {
      options: {
        chart: {
          background: '#f0f0f0',
          animations: {
              enabled: true,
              easing: 'easeinout',
              speed: 800,
              animateGradually: {
                  enabled: true,
                  delay: 200
              },
              dynamicAnimation: {
                  enabled: true,
                  speed: 330
              }
          },
      },
        xaxis: {
          categories: ['Ask Price', 'High Price', 'Last Price', 'Offer', 'Low Price', 'Promedio']
        }
      },
      series: [
        {
          name: "series-1",
          data: [props.data.ask, props.data.high, props.data.last, props.data.bid, props.data.low, props.data.averages.day]
        }
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ChartApp;