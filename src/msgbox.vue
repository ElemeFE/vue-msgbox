<template>
  <div class="msgbox-wrapper">
    <div class="msgbox" v-if="rendered" v-show="visible" transition="pop-bounce">
      <div class="msgbox-header" v-if="title !== ''">
        <div class="msgbox-title">{{ title }}</div>
        <!--<div class="msgbox-close d-icon icon-close" @click="handleAction('close')"></div>-->
      </div>
      <div class="msgbox-content" v-if="message !== ''">
        <div class="msgbox-status d-icon {{ type ? 'icon-' + type : '' }}"></div>
        <div class="msgbox-message"><p>{{ message }}</p></div>
        <div class="msgbox-input" v-show="showInput">
          <input type="text" v-model="inputValue" :placeholder="inputPlaceholder" />
          <div class="msgbox-errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{editorErrorMessage}}</div>
        </div>
      </div>
      <div class="msgbox-btns" :class="{ 'msgbox-btns-reverse': confirmButtonPosition === 'left' }">
        <button class="{{ cancelButtonClasses }}" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</button>
        <button class="{{ confirmButtonClasses }}" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</button>
      </div>
    </div>
  </div>
</template>

<style>
  .msgbox {
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    background-color: #fff;
    width: 85%;
    border-radius: 3px;
    font-size: 16px;
    -webkit-user-select: none;
    overflow: hidden;
  }

  .msgbox-header{
    padding: 15px 20px 5px 10px;
    border-bottom: 1px solid #ddd;
  }

  .msgbox-content {
    padding: 10px 20px;
    min-height: 36px;
    position: relative;
    border-bottom: 1px solid #ddd;
  }

  .msgbox-close {
    display: inline-block;
    position: absolute;
    top: 14px;
    right: 15px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    line-height: 20px;
    text-align: center;
  }

  .msgbox-input > input {
    border: 1px solid #dedede;
    border-radius: 5px;
    padding: 4px 5px;
    width: 100%;
  }

  .msgbox-errormsg {
    color: red;
    font-size: 12px;
    min-height: 16px;
  }

  .msgbox-title {
    padding-left: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
  }

  .msgbox-status {
    float: left;
    width: 36px;
    height: 36px;
    font-size: 36px !important;
  }

  .msgbox-status.icon-success {
    color: #94c852;
  }

  .msgbox-status.icon-warning {
    color: #ff9c00;
  }

  .msgbox-status.icon-error {
    color: #ff4248;
  }

  .msgbox-message {
    color: #333;
    font-size: 16px;
    line-height: 36px;
    margin-left: 36px;
    margin-right: 36px;
    text-align: center;
  }

  .msgbox-btns {
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
  }

  .msgbox-btn {
    display: block;
    background-color: #fff;
    border: 0;
    flex: 1;
    margin: 0;
    border-radius: 0;
  }
  .msgbox-btn:active {
    background-color: #3492e9;
    color: #fff;
  }

  .msgbox-confirm {
    width: 50%;
  }

  .msgbox-cancel {
    width: 50%;
    border-right: 1px solid #ddd;
  }

  .msgbox-confirm-highlight,
  .msgbox-cancel-highlight {
    font-weight: 800;
  }

  .msgbox-btns-reverse {
    -webkit-box-direction: reverse;
  }

  .msgbox-btns-reverse .msgbox-confirm {
    border-right: 1px solid #ddd;
  }

  .msgbox-btns-reverse .msgbox-cancel {
    border-right: 0;
  }

  .pop-bounce-enter {
    -webkit-animation: pop-bounce-in .3s cubic-bezier(0.3, 0, 0, 1.5);
    animation: pop-bounce-in .3s cubic-bezier(0.3, 0, 0, 1.5);
  }

  .pop-bounce-leave {
    -webkit-animation: pop-bounce-out .2s cubic-bezier(0.895, 0.03, 0.685, 0.22);
    animation: pop-bounce-out .2s cubic-bezier(0.895, 0.03, 0.685, 0.22);
  }

  @-webkit-keyframes pop-bounce-in {
    0% {
      -webkit-transform: translate3d(-50%, -50%, 0) scale(0.8);
      transform: translate3d(-50%, -50%, 0) scale(0.8);
    }
    100% {
      -webkit-transform: translate3d(-50%, -50%, 0) scale(1);
      transform: translate3d(-50%, -50%, 0) scale(1);
    }
  }

  @keyframes pop-bounce-in {
    0% {
      -webkit-transform: translate3d(-50%, -50%, 0) scale(0.8);
      transform: translate3d(-50%, -50%, 0) scale(0.8);
    }
    100% {
      -webkit-transform: translate3d(-50%, -50%, 0) scale(1);
      transform: translate3d(-50%, -50%, 0) scale(1);
    }
  }

  @-webkit-keyframes pop-bounce-out {
    0% {
      -webkit-transform: translate3d(-50%, -50%, 0) scale(1);
      transform: translate3d(-50%, -50%, 0) scale(1);
    }
    100% {
      -webkit-transform: translate3d(-50%, -50%, 0) scale(0.7);
      transform: translate3d(-50%, -50%, 0) scale(0.7);
    }
  }

  @keyframes pop-bounce-out {
    0% {
      -webkit-transform: translate3d(-50%, -50%, 0) scale(1);
      transform: translate3d(-50%, -50%, 0) scale(1);
    }
    100% {
      -webkit-transform: translate3d(-50%, -50%, 0) scale(0.7);
      transform: translate3d(-50%, -50%, 0) scale(0.7);
    }
  }
</style>
<style src="vue-popup/lib/popup.css"></style>

<script type="text/ecmascript-6" lang="babel">
  var CONFIRM_TEXT = '确定';
  var CANCEL_TEXT = '取消';

  import Popup from 'vue-popup';

  export default {
    mixins: [ Popup ],

    props: {
      modal: {
        default: true
      },
      closeOnPressEscape: {
        default: true
      }
    },

    computed: {
      confirmButtonClasses() {
        var classes = 'msgbox-btn msgbox-confirm ' + this.confirmButtonClass;
        if (this.confirmButtonHighlight) {
          classes += ' msgbox-confirm-highlight';
        }
        return classes;
      },
      cancelButtonClasses() {
        var classes = 'msgbox-btn msgbox-cancel ' + this.cancelButtonClass;
        if (this.cancelButtonHighlight) {
          classes += ' msgbox-cancel-highlight';
        }
        return classes;
      }
    },

    methods: {
      handleAction(action) {
        if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
          return;
        }
        var callback = this.callback;
        this.visible = false;
        callback(action);
      },

      validate() {
        if (this.$type === 'prompt') {
          var inputPattern = this.inputPattern;
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
            return false;
          }
          var inputValidator = this.inputValidator;
          if (typeof inputValidator === 'function') {
            var validateResult = inputValidator(this.inputValue);
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
              return false;
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult;
              return false;
            }
          }
        }
        this.editorErrorMessage = '';
        return true;
      }
    },

    watch: {
      inputValue() {
        if (this.$type === 'prompt') {
          this.validate();
        }
      }
    },

    data() {
      return {
        title: '',
        message: '',
        type: '',
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmButton: true,
        showCancelButton: false,
        confirmButtonText: CONFIRM_TEXT,
        cancelButtonText: CANCEL_TEXT,
        confirmButtonPosition: 'right',
        confirmButtonHighlight: false,
        confirmButtonClass: '',
        confirmButtonDisabled: false,
        cancelButtonClass: '',
        cancelButtonHighlight: false,

        editorErrorMessage: null,
        callback: null
      };
    }
  }
</script>
