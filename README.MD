# Overview

vue-msgbox is a message box (like Sweet Alert) for vue.js.

# Install

Get source from npm.

```bash
$ npm install vue-msgbox --save
```

Supported UMD library and individual CSS file.

```bash
./lib/
├── vue-msgbox.js
└── vue-msgbox.css
./src/
├── index.js
└── msgbox.vue
```

```JavaScript
// For ES6 module
import MessageBox from 'vue-msgbox';

// For commonJS
const MessageBox = require('vue-msgbox').default;

// For global variable, import from script label, then
const MessageBox = VueMsgbox.default;

// Import from src code for debugging or self building
import MessageBox from 'vue-msgbox/src';
```

And import CSS file: 
```javascript
require('vue-msgbox/lib/vue-msgbox.css');
```

# Usage

## Basic usage

```JavaScript
MessageBox("Good job!", "You clicked the button!", "success");// title, message, type
```

Or pass an object as options, and second parameter as callback:

```JavaScript
MessageBox({
  title: 'I\'m a title',
  message: 'I\'m a message',
  type: 'success',
  showCancelButton: true
}, function(action) {
  console.log('callback:', action);
  MessageBox('Clicked: ' + action);
});
```

## Promise based usage

### Basic usage

```JavaScript
MessageBox({
  title: 'I\'m a title',
  message: 'I\'m a message',
  type: 'success',
  showCancelButton: true
}).then(function(action) {
  console.log('callback:', action);
  MessageBox('Clicked: ' + action);
});
```

### alert

```JavaScript
MessageBox.alert(message, title, options);
```

```JavaScript
MessageBox.alert('message').then(function(action) {
  ...
});
```

### confirm

If user press cancel button, then this promise will be rejected.

```JavaScript
MessageBox.confirm(message, title, options);
```

```JavaScript
MessageBox.confirm('message').then(function(action) {
  ...
});
```

### prompt

If user press cancel button, then this promise will be rejected.

```JavaScript
MessageBox.prompt(message, title, options);
```

```JavaScript
MessageBox.prompt('message').then(function(value, action) {
  ...
});
```

# Options

| Option | Description |
| ----- | ----- |
| title | The title of MessageBox. |
| message | The content of MessageBox. |
| type | The status type of MessageBox: success, warning, error |
| showConfirmButton | Boolean(default true) visible of confirm button. |
| showCancelButton | Boolean(default false) visible of cancel button. |
| confirmButtonText | The text of confirm button. |
| confirmButtonPosition | (Default:right) The position of confirm button, default is right. |
| confirmButtonHighlight | (Default:false) Highlight confirm button if confirmButtonHighlight is true. |
| cancelButtonText | The text of cancel button. |
| cancelButtonHighlight | (Default:false) Highlight cancel button if cancelButtonHighlight is true. |
| confirmButtonClass | Extra className of confirm button. |
| cancelButtonClass | Extra className of cancel button. |
| showInput | Boolean(default false) visible of input. |
| inputValue | value of input. |
| inputPlaceholder | placeholder of input. |
| inputPattern | Regexp(default null). validation pattern of input. |
| inputValidator | validate function of input, if validator return a string, MessageBox will use it as inputErrorMessage. |
| inputErrorMessage | error message when inputPattern test inputValue failed. |

# Develop

Coding with watching and hot-reload.

```bash
$ npm run dev
```

Develop on real remote device.

```bash
$ npm run remote-dev {{ YOUR IP ADDRESS }}
```

# License
MIT
