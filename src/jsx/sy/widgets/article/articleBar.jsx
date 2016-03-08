/** @jsx React.DOM */
/**
 * 文章筛选
 */

var ArticleStore = require('../../modules/stores/common/getArticleStore.jsx');

var liteFlux = require('lite-flux');


var ArticleBar = React.createClass({
    getInitialState: function () {
        return {
            articleList: {}
        }
    },
    componentDidMount: function(){
        var _this = this;
        var request_data = {
            'page': 1
        };
        liteFlux.action("articleList").getArticleList(request_data,function(data){/*文章列表*/
            _this.setState({
                articleList: data
            })
        });
    },
    onChangeStatus: function(e){
        var value = e.target.value;
        this.props.callBackArticleId(value);
    },
    render: function(){
        var _this = this;
        var article = _this.state.articleList;
        var list = article.data || [];
        var source = _this.props.source || {};

        return (
            <Select id='article_id' value={source.article_id} onChange={this.onChangeStatus} className="wa fl mr0">
                <option value="-1">请选择文章</option>
                {
                    list.map(function (item, i) {
                        return (
                            <option key={i} value={item.id}>{item.title}</option>
                        )
                    })
                }
            </Select>
        )
    }
});

module.exports = ArticleBar;
