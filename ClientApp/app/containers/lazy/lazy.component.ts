import { Component } from '@angular/core';
import { PieChartComponent } from "../../../modules/commonUI/charts/pieChart.component";

@Component({
  selector: 'lazy-view',
  templateUrl: './lazy.page.html'
})
export class LazyComponent {
  options1;
  options2;
  options3;
  options4;
  options5;

  ngOnInit(): void {
    let myBlock = document.getElementById('myBlock');
    console.error(myBlock.offsetWidth + '/' + myBlock.offsetHeight);

    // simulate async data
    setTimeout(() => this.setOpt(), 3000);
    setTimeout(() => this.setOptWithMediaQuery(), 3000);
  }

  setOpt(): void {
    this.options1 = {
      title: {
        text: 'chart-title'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['A', 'B', 'C', 'D', 'E']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'A',
          type: 'line',
          stack: 'stack',
          areaStyle: { normal: {} },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'B',
          type: 'line',
          stack: 'stack',
          areaStyle: { normal: {} },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'C',
          type: 'line',
          stack: 'stack',
          areaStyle: { normal: {} },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'D',
          type: 'line',
          stack: 'stack',
          areaStyle: { normal: {} },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'E',
          type: 'line',
          stack: 'stack',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: { normal: {} },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
    this.options2 = {
      title: {
        text: 'chart-title 2'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['F', 'G', 'H', 'I', 'J']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['FF', 'GG', 'HH', 'II', 'JJ', 'KK', 'LL']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'F',
          type: 'line',
          stack: 'stack',
          areaStyle: { normal: {} },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'G',
          type: 'line',
          stack: 'stack',
          areaStyle: { normal: {} },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'H',
          type: 'line',
          stack: 'stack',
          areaStyle: { normal: {} },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'I',
          type: 'line',
          stack: 'stack',
          areaStyle: { normal: {} },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'J',
          type: 'line',
          stack: 'stack',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: { normal: {} },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
    this.options3 = {
      title: {
        text: 'chart-title 3'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['K', 'L', 'M', 'N', 'O']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['KK', 'LL', 'MM', 'NN', 'OO', 'PP', 'QQ']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'K',
          type: 'line',
          stack: 'stack',
          areaStyle: { normal: {} },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'L',
          type: 'line',
          stack: 'stack',
          areaStyle: { normal: {} },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'M',
          type: 'line',
          stack: 'stack',
          areaStyle: { normal: {} },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'N',
          type: 'line',
          stack: 'stack',
          areaStyle: { normal: {} },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'O',
          type: 'line',
          stack: 'stack',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: { normal: {} },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };

  }

  setOptWithMediaQuery(): void {
    this.options4 = {
      baseOption: {
        title: {
          text: '南丁格尔玫瑰图',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ['pie', 'funnel']
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [
          {
            name: '半径模式',
            type: 'pie',
            roseType: 'radius',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            lableLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [
              { value: 10, name: 'rose1' },
              { value: 5, name: 'rose2' },
              { value: 15, name: 'rose3' },
              { value: 25, name: 'rose4' },
              { value: 20, name: 'rose5' },
              { value: 35, name: 'rose6' },
              { value: 30, name: 'rose7' },
              { value: 40, name: 'rose8' }
            ]
          },
          {
            name: '面积模式',
            type: 'pie',
            roseType: 'area',
            data: [
              { value: 10, name: 'rose1' },
              { value: 5, name: 'rose2' },
              { value: 15, name: 'rose3' },
              { value: 25, name: 'rose4' },
              { value: 20, name: 'rose5' },
              { value: 35, name: 'rose6' },
              { value: 30, name: 'rose7' },
              { value: 40, name: 'rose8' }
            ]
          }
        ]
      },
      media: [
        {
          option: {
            legend: {
              right: 'center',
              bottom: 0,
              orient: 'horizontal'
            },
            series: [
              {
                radius: [20, '50%'],
                center: ['25%', '50%']
              },
              {
                radius: [30, '50%'],
                center: ['75%', '50%']
              }
            ]
          }
        },
        {
          query: {
            minAspectRatio: 1
          },
          option: {
            legend: {
              right: 'center',
              bottom: 0,
              orient: 'horizontal'
            },
            series: [
              {
                radius: [20, '50%'],
                center: ['25%', '50%']
              },
              {
                radius: [30, '50%'],
                center: ['75%', '50%']
              }
            ]
          }
        },
        {
          query: {
            maxAspectRatio: 1
          },
          option: {
            legend: {
              right: 'center',
              bottom: 0,
              orient: 'horizontal'
            },
            series: [
              {
                radius: [20, '50%'],
                center: ['50%', '30%']
              },
              {
                radius: [30, '50%'],
                center: ['50%', '70%']
              }
            ]
          }
        },
        {
          query: {
            maxWidth: 500
          },
          option: {
            legend: {
              right: 10,
              top: '15%',
              orient: 'vertical'
            },
            series: [
              {
                radius: [20, '50%'],
                center: ['50%', '30%']
              },
              {
                radius: [30, '50%'],
                center: ['50%', '75%']
              }
            ]
          }
        }
      ]
    };

    this.options5 = {
      baseOption: {
        title: {
          text: 'bla bla',
          subtext: 'bla bla bla bla',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ['pie', 'funnel']
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [
          {
            name: '半径模式',
            type: 'pie',
            roseType: 'radius',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            lableLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [
              { value: 10, name: 'rose1' },
              { value: 5, name: 'rose2' },
              { value: 15, name: 'rose3' },
              { value: 25, name: 'rose4' },
              { value: 20, name: 'rose5' },
              { value: 35, name: 'rose6' },
              { value: 30, name: 'rose7' },
              { value: 40, name: 'rose8' }
            ]
          },
          {
            name: '面积模式',
            type: 'pie',
            roseType: 'area',
            data: [
              { value: 10, name: 'rose1' },
              { value: 5, name: 'rose2' },
              { value: 15, name: 'rose3' },
              { value: 25, name: 'rose4' },
              { value: 20, name: 'rose5' },
              { value: 35, name: 'rose6' },
              { value: 30, name: 'rose7' },
              { value: 40, name: 'rose8' }
            ]
          }
        ]
      },
      media: [
        {
          option: {
            legend: {
              right: 'center',
              bottom: 0,
              orient: 'horizontal'
            },
            series: [
              {
                radius: [20, '50%'],
                center: ['25%', '50%']
              },
              {
                radius: [30, '50%'],
                center: ['75%', '50%']
              }
            ]
          }
        },
        {
          query: {
            minAspectRatio: 1
          },
          option: {
            legend: {
              right: 'center',
              bottom: 0,
              orient: 'horizontal'
            },
            series: [
              {
                radius: [20, '50%'],
                center: ['25%', '50%']
              },
              {
                radius: [30, '50%'],
                center: ['75%', '50%']
              }
            ]
          }
        },
        {
          query: {
            maxAspectRatio: 1
          },
          option: {
            legend: {
              right: 'center',
              bottom: 0,
              orient: 'horizontal'
            },
            series: [
              {
                radius: [20, '50%'],
                center: ['50%', '30%']
              },
              {
                radius: [30, '50%'],
                center: ['50%', '70%']
              }
            ]
          }
        },
        {
          query: {
            maxWidth: 500
          },
          option: {
            legend: {
              right: 10,
              top: '15%',
              orient: 'vertical'
            },
            series: [
              {
                radius: [20, '50%'],
                center: ['50%', '30%']
              },
              {
                radius: [30, '50%'],
                center: ['50%', '75%']
              }
            ]
          }
        }
      ]
    };

  }

  refreshChart(pie: PieChartComponent): void {
    setTimeout(() => pie.resizeChart(), 0);
  }
}
