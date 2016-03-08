/** @jsx React.DOM */

/**
 * @tofishes
 * 根据内容自适应宽度的仅有下划线的input组件
 * @example
 * <LineInput name="input-name" />
 * @note
 * 用该组件输入的内容，需要用该组件去展示，因为遇到输入空格会被浏览器自动转为&nbsp;实体
 */
var LineInput = React.createClass({
    getInitialState: function () {
        return {
            'value': this.props.value,
            'readonly': this.props.readonly
        }
    },
    // 父级更新传递新的值，这里可以接收
    componentWillReceiveProps: function (newProps) {
        newProps.value && this.setState({
            'value': newProps.value
        });
    },
    onblur: function (e) {
        this.onchange.apply(this, arguments);
        // var _input = e.target;
        // var value = _input.innerHTML.trim();
        // 暂时不去掉下划线
        // $(_input).toggleClass('underline-input-fill', !!value);

        // this.setState({
        //     'value': value
        // });
    },
    onfocus: function (e) {
        // 暂时不去掉下划线
        // var _input = e.target;
        // $(_input).removeClass('underline-input-fill');
    },
    onchange: function (e) {
        var _input = e.target;
        var value = _input.innerText.trim(); // innerText不会获取隐藏标签的文本，但会触发reflow; textContent(MDN)正好相反

        this.setState({
            'value': value
        });
    },
    render: function () {
        // 为了内容改变而宽度自适应，使用了contenteditable
        return (
            <span>
                <span className="underline-input" onInput={this.onchange} onFocus={this.onfocus} onBlur={this.onblur} contentEditable={!this.state.readonly} dangerouslySetInnerHTML={{__html: this.state.value}}></span>
                <input type="hidden" required={this.props.required} className={this.props.className} name={this.props.name} value={this.state.value}/>
            </span>
        )
    }
});

module.exports = LineInput;