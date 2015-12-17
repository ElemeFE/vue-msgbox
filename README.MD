# Overview

vue-msgbox is a message box (like Sweet Alert) for vue.js.

# Usage

```JavaScript
import MessageBox from 'vue-msgbox';
```

Basic use:

```JavaScript
MessageBox("Good job!", "You clicked the button!", "success");// title, message, type
```

Use callback:

```JavaScript
MessageBox({
  title: 'I'm a title',
  message: 'I'm a message',
  type: 'success',
  showCancelButton: true
}, function(action) {
  console.log('callback:', action);
  MessageBox('Clicked: ' + action);
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
| cancelButtonText | The text of cancel button. |
| confirmButtonClass | Extra className of confirm button. |
| cancelButtonClass | Extra className of cancel button. |

# License
MIT
