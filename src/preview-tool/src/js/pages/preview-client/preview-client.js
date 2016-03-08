'use strict';

$(function () {
  let editBtn =
    '<a class="btn btn-primary btn-edit-data preview-edit-btns" style="display: none;" href="#">编辑模块</a>';
  $('body').append(editBtn);

  // 编辑按钮
  let previewEditBtns = $('.preview-edit-btns');
  // 当前编辑内容
  let currentData = {};
  let frameParent = window.parent;

  // 高亮编辑区
  $('[data-ad-page]').on('mouseenter', function () {
    let ownWidth = $(this).width();
    let width = $(window).width();
    let scrollTop = $(this).scrollTop();
    let offset = $(this).offset();
    let _top = parseInt($(this).data('ad-top')) || 0;
    let _right = parseInt($(this).data('ad-right')) || 0;
    previewEditBtns.css({
      position: 'absolute',
      top: offset.top + scrollTop + _top,
      right: (width - offset.left - ownWidth) + _right
    }).show();
    currentData = $(this).data();
    return currentData;
  });
  $('.btn-edit-data').on('click', function () {
    frameParent.postMessage({
      code: 0,
      msg: '',
      type: 'ad-edit',
      data: {
        page: currentData.adPage,
        modul: currentData.adModule,
        moduleId: currentData.adModuleId,
        category: currentData.adModuleCategory || null
      }
    }, '*');
    return false;
  });

  // 监听通讯
  window.addEventListener('message', function (e) {
    if (e.source !== window.parent) {
      return;
    }
    let data = e.data;
    if (data.code === 10) {
      window.location.reload();
    }
  });
});
