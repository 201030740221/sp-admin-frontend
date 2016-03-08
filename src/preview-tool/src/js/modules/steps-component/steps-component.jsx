var Steps = antd.Steps;
var Step = Steps.Step;

var myComponent = React.createClass({
  getInitialState() {
      return {
          stepsData: this.props.stepsData,
          current: this.props.current
        };
    },
  componentDidMount: function () {

    },
  componentWillReceiveProps: function (nextProps) {
      this.setState({
          stepsData: nextProps.stepsData,
          current: nextProps.current
        });
    },
  render: function ()  {

      let stepsData = this.state.stepsData;
      let current = this.state.current;

      let steps = stepsData.map(function (s, i) {
          return (
                    <Step key={i} title={s.title} description={s.description} />
                );
        });

      return (
                <Steps current={current}>{steps}</Steps>
            );
    }

});

module.exports = myComponent;
