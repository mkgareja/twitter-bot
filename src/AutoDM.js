const T = require("./Twit.js");
const my_user_name = require("../config").userName;
const timeout = 1000 * 60 * 5; // timeout to send the message 5 min

const AutoDM = () => {
  const stream = T.stream('site');
  console.log("Start Sending Auto Direct Message 🚀🚀🚀");
  stream.on("tweet", SendMessage);
};

const SendMessage = user => {
  console.log("Start Sending Auto Direct Message 🚀🚀🚀");
  // const msg = eventMsg.direct_message.text;
  //   const screenName = eventMsg.direct_message.sender.screen_name;
  //   const msgID = eventMsg.direct_message.id_str;

  //   if (screenName === 'MyBotExample') {
  //       return callbackHandler(msgID);
  //   }else if (msg.search['Hi','Hello'] !== -1 ) {
  //       return T.post('direct_messages/new', { 
  //           screen_name: screenName,
  //           text: 'Hey, what can I do for you?'} , function () {
  //           callbackHandler(msgID);
  //       });
  //   }
  //   else if (msg.search['Apple','Red'] !== -1 ) {
  //       return T.post('direct_messages/new', { 
  //           screen_name: screenName,
  //           text: 'Love it!'} , function () {
  //           callbackHandler(msgID);
  //       });
  //   }
  //   else {
  //       return T.post('direct_messages/new', {
  //           screen_name: screenName,
  //           text: "I don't know "
  //       }, function() {
  //           callbackHandler(msgID);
  //       });
  //   }
};

module.exports = AutoDM;
