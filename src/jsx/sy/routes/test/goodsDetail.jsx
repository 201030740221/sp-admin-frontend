/** @jsx React.DOM */
/*商品详情测试*/
var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var GoodsDetail = require('../../widgets/goodsDetail/goodsDetail.jsx');



var Body = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("goodsDetailStore")],
    getStateFromFlux: function() {
        return flux.store("goodsDetailStore").getState();
    },
    handleClick:function(){
        console.log(this.state);
    },
    render: function() {

        var data = {
            sku_id : 1,
            template_id: 1,
            detail_data: '{\"title\":{\"format\":\"text\",\"value\":\"\\u9ed8\\u8ba4\\u6807\\u9898\"},\"description\":{\"format\":\"text\",\"value\":\"\\u9ed8\\u8ba4\\u63cf\\u8ff0\"},\"info\":{\"format\":\"text\",\"value\":[{\"title\":\"\\u8d28\\u91cf\",\"content\":\"12kg\"},{\"title\":\"\\u4f53\\u79ef\",\"content\":\"12m\"},{\"title\":\"\\u989c\\u8272\",\"content\":\"red\"}]},\"extend\":{\"format\":\"text\",\"value\":[{\"title\":\"title1\",\"content\":\"content1\"},{\"title\":\"title2\",\"content\":\"content2\"},{\"title\":\"title3\",\"content\":\"content3\"}]},\"main_picture\":{\"format\":\"single_picture\",\"value\":[{\"id\":123,\"url\":\"http:\\\/\\\/7viii7.com2.z0.glb.qiniucdn.com\\\/2015\\\/02\\\/06\\\/a6715146_pic_detail01.jpg\"}]},\"detail_picture\":{\"format\":\"multi_picture\",\"value\":[{\"id\":123,\"url\":\"http:\\\/\\\/7viii7.com2.z0.glb.qiniucdn.com\\\/2015\\\/02\\\/06\\\/a6715146_pic_detail01.jpg\"},{\"id\":123,\"url\":\"http:\\\/\\\/7viii7.com2.z0.glb.qiniucdn.com\\\/2015\\\/02\\\/06\\\/a6715146_pic_detail01.jpg\"}]}}'
        }
        return (
            <Container id='body'>

                <Button xs outlined style={{marginBottom: 5}} bsStyle='default' onClick={this.handleClick}>看state</Button>{' '}

                <GoodsDetail data={data}></GoodsDetail>
            </Container>
        );
    }
});

var BootstrapTables = React.createClass({
    mixins: [SidebarMixin],
    render: function() {
        var classes = classSet({
            'container-open': this.state.open
        });
        return (
            <Container id='container' className={classes}>
                <Sidebar />
                <Header />
                <Body flux = {flux} >
                    <Footer />
                </Body>
            </Container>
        );
    }
});

module.exports = BootstrapTables;
