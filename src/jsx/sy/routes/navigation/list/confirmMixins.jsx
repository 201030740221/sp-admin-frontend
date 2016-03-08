/** @jsx React.DOM */
var mixins = {
    confirm: function(title, text, ok){
        var _ok = function(){
            ModalManager.remove();
            if(ok){
                ok();
            }
        };
        ModalManager.create(
            <Modal>
                <ModalHeader>
                    <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
                    <h4 className='modal-title'>{title}</h4>
                </ModalHeader>
                <ModalBody>
                    {text}
                </ModalBody>
                <ModalFooter>
                    <Button outlined bsStyle='default' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>Close</Button>
                    <Button outlined bsStyle='primary' onClick={_ok} onTouchEnd={_ok}>OK</Button>
                </ModalFooter>
            </Modal>
        );
    },
};
module.exports = mixins;
