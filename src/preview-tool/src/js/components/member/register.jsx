'use strict';

import Charts from 'modules/echarts/charts';
import {Button, DatePicker, Table} from 'antd';
const RangePicker = DatePicker.RangePicker;
const ButtonGroup = Button.Group;

const DATE_FORMAT = 'YYYY-MM-DD';
const CYCLE_LAST30 = 'last30';
const CYCLE_LAST7 = 'last7';
const CYCLE_DAY = 'day';
const CYCLE_WEEK = 'week';
const CYCLE_MONTH = 'month';

function nDayAge(n) {
  return moment().subtract(n, 'days').format(DATE_FORMAT);
}

function getToday() {
  return moment().format(DATE_FORMAT);
}

const TODAY = getToday();

const View = React.createClass({
  displayName: 'View',
  getInitialState() {
    return {
      chartData: {},
      chartBegin: nDayAge(60),
      chartEnd: TODAY,
      tableData: [],
      // table_begin: nDayAge(60),
      // table_end: TODAY,
      cycle: CYCLE_DAY
    };
  },
  componentDidMount() {
    this.getData(this.state.chartBegin, this.state.chartEnd, CYCLE_DAY, data => {
      this.setState({
        chartData: this.handleChartData(data),
        tableData: this.handleTableData(data)
      });
    });
  },
  getData(begin_date, end_date, cycle, cb = () => {}) {
    webapi.member.getRegister({
      begin_date,
      end_date,
      cycle
    }).then(res => {
      if (res.code === 0) {
        cb(res.data);
      }
    });
  },
  getChartData(begin, end, cycle) {
    let _cycle = cycle;
    if (cycle === CYCLE_LAST30 || cycle === CYCLE_LAST7) {
      _cycle = CYCLE_DAY;
    }
    this.getData(begin, end, _cycle, data => {
      this.setState({
        chartData: this.handleChartData(data),
        chartBegin: begin,
        chartEnd: end,
        cycle
      });
    });
  },
  onRangeChange(value) {
    let begin = moment(value[0]);
    let end = moment(value[1]);
    let diff = end.diff(begin, 'days');
    let cycle = this.state.cycle;
    if ((diff < 7 && cycle === CYCLE_WEEK) || (diff < 30 && cycle === CYCLE_MONTH)) {
      cycle = CYCLE_DAY;
    }
    begin = begin.format(DATE_FORMAT);
    end = end.format(DATE_FORMAT);
    this.getChartData(begin, end, cycle);
  },
  onBtnClick(cycle) {
    let begin = this.state.chartBegin;
    let end = this.state.chartEnd;
    if (cycle === CYCLE_LAST30) {
      begin = nDayAge(30);
    }
    if (cycle === CYCLE_LAST7) {
      begin = nDayAge(7);
    }
    this.getChartData(begin, end, cycle);
  },
  handleChartData(data) {
    const xData = [];
    const yData = [];
    const total = [];
    for (let key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        xData.push(key);
        yData.push(data[key].value);
        total.push(data[key].total);
      }
    }
    return {xData, yData, total};
  },
  handleTableData(data) {
    const _data = [];
    for (let key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        _data.push({
          date: key,
          value: data[key].value,
          total: data[key].total
        });
      }
    }
    return _data.reverse();
  },
  onTableChange(value) {
    const begin = moment(value[0]).format(DATE_FORMAT);
    const end = moment(value[1]).format(DATE_FORMAT);
    this.getData(begin, end, CYCLE_DAY, data => {
      this.setState({
        tableData: this.handleTableData(data)
      });
    });
  },
  render() {
    const xData = this.state.chartData.xData || [];
    const yData = this.state.chartData.yData || [];
    const chartOption = {
      title: {
        text: '统计图表'
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: xData
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '人数',
          type: 'line',
          areaStyle: {
            normal: {}
          },
          data: yData
        }
      ]
    };

    const columns = [
      {
        title: '日期',
        dataIndex: 'date'
      }, {
        title: '注册量',
        dataIndex: 'value'
      }, {
        title: '总注册量',
        dataIndex: 'total'
      }
    ];
    const tableData = this.state.tableData;
    const pagination = {
      total: tableData.length,
      current: 1,
      showSizeChanger: true
    };
    const daysDiff = moment(this.state.chartEnd).diff(this.state.chartBegin, 'days');
    return (
      <div>
        <div>
          <RangePicker
            onChange={this.onRangeChange}
            style={{width: 184}}
            value={[this.state.chartBegin, this.state.chartEnd]}
          />
          <ButtonGroup className="u-ml-30">
            <Button disabled={this.state.cycle === CYCLE_LAST30} onClick={this.onBtnClick.bind(null, CYCLE_LAST30)} type="ghost">{'最近30天'}</Button>
            <Button disabled={this.state.cycle === CYCLE_LAST7} onClick={this.onBtnClick.bind(null, CYCLE_LAST7)} type="ghost">{'最近7天'}</Button>
            <Button disabled={this.state.cycle === CYCLE_DAY} onClick={this.onBtnClick.bind(null, CYCLE_DAY)} type="ghost">{'按日'}</Button>
            <Button disabled={this.state.cycle === CYCLE_WEEK || daysDiff < 7} onClick={this.onBtnClick.bind(null, CYCLE_WEEK)} type="ghost">{'按周'}</Button>
            <Button disabled={this.state.cycle === CYCLE_MONTH || daysDiff < 30} onClick={this.onBtnClick.bind(null, CYCLE_MONTH)} type="ghost">{'按月'}</Button>
          </ButtonGroup>
        </div>
        <Charts option={chartOption}/>
        <div className="u-mt-20" style={{maxWidth: '800px'}}>
          <RangePicker
            defaultValue={[nDayAge(60), TODAY]}
            onChange={this.onTableChange}
            style={{width: 184}}
          />
          <Table
            className="u-mt-20"
            columns={columns}
            dataSource={tableData}
            pagination={pagination}
            rowKey={record => record.date}
          />
        </div>
      </div>
    );
  }
});

export default View;
