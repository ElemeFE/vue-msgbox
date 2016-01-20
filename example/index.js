// /* global VueMsgbox */
// const MessageBox = VueMsgbox.default;

// For develop
import MessageBox from '../src';

// title, message, type
// MessageBox('Good job!', 'You openned the demo page!', 'success');

document.querySelector('[showbase]').addEventListener('click', () => {
  MessageBox({
    title: 'I\'m a title',
    message: 'I\'m a message',
    type: 'success',
    showCancelButton: true
  }, function(action) {
    console.log('callback:', action);
    MessageBox.alert('Clicked: ' + action);
  });
});

document.querySelector('[showpromisebase]').addEventListener('click', () => {
  MessageBox({
    title: 'I\'m a title',
    message: 'I\'m a message',
    type: 'success',
    showCancelButton: true
  }).then(function(action) {
    console.log('callback:', action);
    MessageBox.alert('Clicked: ' + action);
  });
});

document.querySelector('[showalert]').addEventListener('click', () => {
  MessageBox.alert('EXTERMINATE! EXTERMINATE!', 'Dalek say', {});
});

document.querySelector('[showconfirm]').addEventListener('click', () => {
  MessageBox.confirm('Hey! K9! Choose one.')
  .then(function() {
    MessageBox.alert('GOOD DOG!');
  })
  .catch(() => {
    MessageBox.alert('BAAAD DOG!!');
  });
});

document.querySelector('[showprompt]').addEventListener('click', () => {
  MessageBox.prompt('Input your name: ', '', {
    inputPlaceholder: '2-12 words',
    inputValue: 'name',
    inputPattern: /^.{2,12}$/,
    inputErrorMessage: 'Wrong! Wrong! DELETE! DELETE!'
  })
  .then(function(value, action) {
    console.log(value);
    console.log(action);
    return;
  });
});

document.querySelector('[showprompt2]').addEventListener('click', () => {
  MessageBox.prompt('Input your name: ', '', {
      inputPlaceholder: '2-12 words',
      inputValue: 'name',
      confirmButtonPosition: 'left',
      inputValidator(value) {
        if (value.length < 2 || value.length > 12) {
          return 'length should be 2-12'
        }
      }
    })
    .then(function(value, action) {
      console.log(value);
      console.log(action);
      return;
    });
});
