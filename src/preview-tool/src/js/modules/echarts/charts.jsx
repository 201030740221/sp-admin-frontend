'use strict';

function _extend(target, source) {
  Object.getOwnPropertyNames(source).forEach(function (propKey) {
    const desc = Object.getOwnPropertyDescriptor(source, propKey);
    Object.defineProperty(target, propKey, desc);
  });
  return target;
}

export default class Charts extends React.Component {
  displayName: 'Charts'

  componentDidMount() {
    const canva = this.refs.canva;
    this.chart = echarts.init(canva);
    this.setChart(this.props);
  }

  componentWillReceiveProps(props) {
    this.setChart(props);
  }

  setChart(props) {
    let option = _extend({}, props.settings);
    option = _extend(option, props.option);
    this.chart.setOption(option);
  }

  render() {
    return (
      <div ref="canva" style={this.props.style}></div>
    );
  }
}

Charts.defaultProps = {
  style: {
    width: '100%',
    height: '400px'
  },
  settings: {
    tooltip: {
      trigger: 'axis'
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      show: true,
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    }
  }
};
