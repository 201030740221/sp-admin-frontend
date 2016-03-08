/** @jsx React.DOM */


var Template = React.createClass({
    iframeBox: [],
    getInitialState: function () {
        return {
            data:[]
        }
    },
    openNewWindow: function(sku){
        window.open(frontHost + '/goods?sid='+sku);
    },
    return: function(){
        history.go(-1);
    },
    render: function () {
        var classes = React.addons.classSet({
            'pt20': true
        });
        var sku_sn= this.props.sku_sn;
        console.log(sku_sn);
        var iframeBox;
        if ( !this.iframeBox.length) {
            iframeBox = (function () {
                return (
                    <iframe className="barframe" frameBorder="0" src={frontHost + '/goods?sid='+sku_sn}></iframe>
                )
            })();
        }
        return (
            <div className={classes}>
                <Row className="mt20">
                    <Col sm={12} style={{position:"relative",textAlign:"center"}}>
                        <Row>
                            <Well style={{width:"95%",marginLeft:"auto",marginRight:"auto",textAlign:"left"}}>
                                请选择操作:
                                <Button bsStyle='pink' style={{marginLeft:20}}>刷新</Button>
                                <Button bsStyle='info' style={{marginLeft:20}} onClick={this.openNewWindow.bind(null,sku_sn)}>新窗口预览</Button>
                                <Button bsStyle='info' style={{marginLeft:20}} onClick={this.return}>返回修改</Button>
                            </Well>
                        </Row>
                        <Row className="mt20">
                            {iframeBox}
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
});

module.exports = Template;