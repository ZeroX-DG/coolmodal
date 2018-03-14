# Coolmodal
*A cool, elegant modal creator for lazy developers*

## About
This library will help creating beautiful modals that can also have form on it.

## Basic usage

First download this library using the command:

```
npm install coolmodal
```
Or download the coolmodal.min.js file in the release section:<br>
https://github.com/ZeroX-DG/coolmodal/releases/
<br>
And include it in your html file using script tag
```html
<script src='path/to/coolmodal.min.js'></script>
```
Then you can require and call `coolmodal` like this
```js
const coolmodal = require('coolmodal');
coolmodal({title: 'Hey'});
```

Or if you're including `coolmodal` using `script` tag, then you can just call `coolmodal` function like this:
```js
coolmodal({title: 'Hey'});
```
The result:
<p align="center">
  <img src='https://media.giphy.com/media/BoOYvIaX6DzIRKoTDI/giphy.gif'>
</p>

## Use with form

To use with form, you can add a `content` option to specify the form content. Also, there is the `button` option where you can add button to your modal with 4 different types: success, danger, warning, info and 2 different actions: submit and dismiss. When the button action is submit, the `onSubmit` event will be called and the value in the form will be sent to the event callback.

You can specify the callback using the second parameter which is an object containing functions with the name matched the event name. 

```js
coolmodal({
  title: 'This is a form',
  content: [
    {tag: 'label', text: 'Name:'},
    {tag: 'input', name: 'name', placeholder: 'enter name...'}
  ],
  button: [
    {
      content: 'Show my name', 
      action: coolmodal.BUTTON_SUBMIT
    },
    {
      content: 'Dont show !', 
      action: coolmodal.BUTTON_DISMISS, 
      type: coolmodal.BUTTON_DANGER
    }
  ]
},{
  onSubmit(values) {
    console.log(values);
  }
});
```

And the result:


## Contact
Facebook: https://fb.com/ZeroXCEH<br>
Twitter: https://twitter.com/ZeroX_Hung<br>
Email: viethungax@gmail.com