## Coolmodal API

##### Table of content:

- [function: coolmodal(option, event)](#function-coolmodal)
  - [options](#options)
    * [title](#option-title)
    * [title_html](#option-titlehtml)
    * [content](#option-content)
      * [label](#tag-label)
      * [input](#tag-input)
      * [select](#tag-select)
    * [content_html](#option-contenthtml)
    * [button](#option-button)
  - [events](#events)
    * [onDismiss()](#event-dismiss)
    * [onSubmit(data)](#event-submit)

## Function coolmodal
This is function is where all the magic happens. This function takes 2 arguments (option and event).

## Options
The options parameter which is a normal javascript object which allows you to specify the details for the modal. In this parameter, there're some few keys that you need to notice.

- `options` <[Object]>
  - `title` <[string]>
  - `title_html` <[string]>
  - `content` <[string] | [Array]<[Object]>>
  - `content_html` <[string]>
  - `button` <[Array]<[Object]>>


### Option: `title`
In this option, you can specify the title for the modal which will be rendered in plain text. If you want to render your own customized html title, then check out the option: [title_html](#option-title-html)

### Option: `title_html`
This option will help render your html code to the modal title. All you have to do is pass in this option a string of html code.

### Option: `content`
This option will determine how the modal content should look like. If you pass in this option a string, that specific string will be rendered in the modal, however, instead of passing the string, you can pass an array of objects to create a form to display on the modal.

Each object represent a tag. Here is list of supported tags and examples:

#### tag: `label`
**WARNING: This tag will be removed in the next release, use the label option instead** <br>
To create a label, the object structure that you can use is:
```
{
  tag: 'label',
  text: <string> (text to display)
}
```

Example:
```js
coolmodal({
  title: 'Subcribe to my website',
  content: [
    {
      tag: 'label',
      text: 'Email:'
    }
  ]
})
```

#### tag: `input`
To create an input tag, you can specify the object with the structure like this

```
{
  tag: 'input',
  id: <string> (input's id),
  name: <string> (input's name, use for event callback),
  type: <string> (input's type, example: password, email...),
  placeholder: <string> (input's placeholder),
  label: <string> (label for input, a replacement for the label tag)
}
```
Example:
```js
coolmodal({
  title: 'Subcribe to my website',
  content: [
    {
      tag: 'input',
      name: 'email',
      placeholder: 'Enter your email...',
      type: 'email',
      label: 'Email:'
    }
  ]
})
```

#### tag: `select`
To create a dropdown select tag, you can use this option to add it to the form. The structure of this option is:
```
{
  tag: 'select',
  name: <string> (select's name, use for event callback),
  label: <string> (label for input, a replacement for the label tag),
  options: <Array> (This property contains a list of object that indicate the options will be rendered in the select)
}
```

The structure for each object in the `options` property of the `select` tag:

```
{
  label: <string> (Label of the option),
  value: <string> (Value of the option)
}
```

Example:

```js
coolmodal({
  title: 'Select your browser',
  content: [
    {
      tag: 'select',
      name: 'browser',
      label: 'Browser:',
      options: [
        {label: 'Chrome', value: 1},
        {label: 'Opera', value: 2},
        {label: 'Firefox', value: 3}
      ]
    }
  ]
})
```

### Option: `content_html`
Just like the option `title_html`, this option allows you to create a modal content using your own html code.

### Option: `button`
Using this option, you can specify buttons for the modal. This option's value must be an array of objects and each objects must have the following structure:
```
{
  content: <string> (text content of button),
  action: <string> (action of button, read the events section for more details),
  type: <string> (type of button)
}
```

**Notice that there are default constants for the option action and type:**

- action
  * coolmodal.BUTTON_SUBMIT
  * coolmodal.BUTTON_DISMISS
- type
  * coolmodal.BUTTON_DANGER
  * coolmodal.BUTTON_SUCCESS
  * coolmodal.BUTTON_WARNING
  * coolmodal.BUTTON_INFO

Example for the button option:
```js
let button = [
  {
    content: 'Cancel',
    action: coolmodal.BUTTON_DISMISS, 
    type: coolmodal.BUTTON_WARNING
  },
  {
    // default action is coolmodal.BUTTON_SUBMIT
    // default type is coolmodal.BUTTON_INFO
    content: 'OK'
  }
];
```

## Events
The event parameter is where you can specify your callback when a certain action is triggered.

### Event: `onDismiss`
The callback for this event is invoked right after the modal is dismissed or in other words, when the button with the action property set to `coolmodal.BUTTON_DISMISS` is clicked.

Example for `onDismiss`:
```js
let event =  {
  onDismiss: () => {
    console.log("Dismissed");
  }
}

// Or for short

let event = {
  onDismiss() {
    console.log("Dismissed !");
  }
}
```
The complete example:

```js
let event = {
  onDismiss() {
    console.log("Dismissed !");
  }
}

coolmodal({title: 'This is a modal'}, event);
```

### Event: `onSubmit`

Similar to `onDismiss`, this event's callback is called after the button with the action property equals to `coolmodal.BUTTON_SUBMIT`. After the modal is dismissed, the callback function is called with a object passed to it. The content of the object is the value of the form that you specify in the content with the key equals to the name of the input and its value is equals to the input value.

Example:

```js
let event = {
  onSubmit(data) {
    console.log(data);
  }
}

let content = {
  title: 'Sign up', 
  content: [
    {tag: 'label', text: 'Name:'},
    {tag: 'input', name: 'name', placeholder: 'enter name...'},
    {tag: 'label', text: 'Password:'},
    {tag: 'input', name: 'pass', type: 'password', placeholder: 'enter pass...'},
  ],
  button: [
    {content: 'sign up', action: coolmodal.BUTTON_SUBMIT},
    {content: 'cancel', action: coolmodal.BUTTON_DISMISS, type: coolmodal.BUTTON_DANGER}
  ]
}

coolmodal(content, event);

// The output will be
/*
{
  name: <string> (the value of the input with the name = name)
  pass: <string> (the value of the input with the name = pass)
}
*/
```
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type "Boolean"
[function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "String"