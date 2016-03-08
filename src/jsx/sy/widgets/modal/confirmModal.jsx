/** @jsx React.DOM */

/**
 *  弹出层组件
 **/
var ModalMixins = {
    showModal: function (content, title, callback) {

        if(typeof title === "function"){
            callback = title;
            title = '操作提示';
        }

        var fn = function () {
            if(typeof callback === 'function' ){
                var ret = callback();
                if(typeof ret === 'object' && ret.willContinue === false){

                }else{
                    ModalManager.remove();
                }
            }else{
                ModalManager.remove();
            }
        };
        var appendContent = function(){
            console.log(content)
            if(typeof content === 'function'){
                return (
                    <content />
                )
            }else{
                return content;
            }
        };
        return (
            <Modal className={(content.props && typeof content.props.className != undefined) ? content.props.className : ""}>
                <ModalHeader>
                    <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
                    <h4 className='modal-title'>{title}</h4>
                </ModalHeader>
                <ModalBody>
                {appendContent()}
                </ModalBody>
                <ModalFooter>
                    <Button outlined bsStyle='success' onClick={fn} onTouchEnd={fn}>确定</Button>
                    <Button outlined bsStyle='danger' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>取消</Button>
                </ModalFooter>
            </Modal>
        );
    }
};

module.exports = ModalMixins;
