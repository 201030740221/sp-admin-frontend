/** @jsx React.DOM */
/*
* remiel
* 2015.10.23
* 可代替之前的confirmModal
* {
 *   title: ''
 *   text: ''
 *   ok: func
 *   cancel: func
 *   showOk: true
 *   showCancel: true
 *
* }
* */
var mixins = {
    confirm: function(param){
        var data = $.extend({
                title: '标题',
                text: '确定?',
                ok: function(){

                },
                cancel: function(){

                },
                showOk: true,
                showCancel: true,
                lg: false
            }, param);
        var _ok = function(){
            var ret = data.ok();
            if(ret !== false){
                ModalManager.remove();
            }
        };
        var _cancel = function(){
            var ret = data.cancel();
            if(ret !== false){
                ModalManager.remove();
            }
        };
        var title = data.title || '';
        var text = data.text || '';
        var okBtn = "";
        var cancelBtn = "";
        if(data.showOk == true){
            okBtn =
                <Button outlined bsStyle='primary' onClick={_ok} onTouchEnd={_ok}>OK</Button>
        }
        if(data.showCancel == true){
            cancelBtn =
                <Button outlined bsStyle='default' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>Close</Button>
        }
        ModalManager.create(
            <Modal lg={data.lg}>
                <ModalHeader>
                    <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
                    <h4 className='modal-title'>{title}</h4>
                </ModalHeader>
                <ModalBody>
                    {text}
                </ModalBody>
                <ModalFooter>
                    {cancelBtn}
                    {okBtn}
                </ModalFooter>
            </Modal>
        );
    },
};
module.exports = mixins;
