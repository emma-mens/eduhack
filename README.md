# OuiChat
Image if you were trying to learn French but can only use a few French words. Current applications to help you learn will mostly accept user input in French (target language). This can make it frustrating to users who only know some words - still in the process of learning. OuiChat is a language platform that takes a user's input and responds in a selected language. A user can ask a question in a mix of English and the target language. The application is meant to respond in the target language with it's English translation and also gives the original sentence in the target language.


Follow the [walk-through](https://developers.facebook.com/docs/messenger-platform/quickstart) to learn about how to setup a messenger bot that echo's a sender's message.

Setup a google translate for making API calls.

You can then run two servers: 
`node app.js`
`python chatbot-rnn/chatbot.py`

Through the facebook messenger, you can send instant messages to the test page. The application uses your input to request a response from the chatbot and utilizes google translate along the way.
