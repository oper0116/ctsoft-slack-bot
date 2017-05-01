var weatherAPIUrl = "http://apis.skplanetx.com/weather/";
var logger = require('../util/logger');
var slackBot = require('../util/slack-bot');
var request = require('request');
var param = {
  version: 1,
  lat: "37.465564",
  lon: "127.127086"
}


var getWeather = function(){
  var url = "http://apis.skplanetx.com/weather/current/hourly";
  var params = "version=1&lat="+geolocation.lat+"&lon="+geolocation.lon;
  console.log("this : ", this);
}

getWeather.prototype.currentWeather = function(){
  this.url = this.url + "forecast/3hours?" + params
  console.log("this.url : ", this.url);
}

function getCurrentWeather(){
  // jQuery.ajax({
  //   url: "http://apis.skplanetx.com/weather/current/hourly",
  //   data: params,
  //   success: function(data){
  //     console.log("data : ", data);
  //   }
  // })
  var url = "http://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=4113162000";
  request({
      method: 'GET',
      // // har: {
      //   headers:
      //     {
      //       "Accept": "application/json",
      //       "Accept-Encoding": "gzip, deflate, sdch"
      //     },
      //
      // // },
      uri: url,
      // params: param

    })
    .on('response', function(error, response, body){
      console.log("url : ", url);
      console.log("response : ", response);
      console.log("body : ", body);
      // console.log("error : ", error);
    });

}

function msg(){

}




module.exports = {
  botCmd: function(){
    // var key = Math.floor(Math.random() * msg_list.length);
    // var opt = {
    //   username: "날씨봇"
    // };
    // slackBot.sendMessage(opt, function(resultStatus){
    //   if(resultStatus === Number(200)){
    //     logger.debug("[GO OFFICE BOT - SUCCESS]");
    //     // res.send("[SEND MSG SUCCESS]");
    //   }else{
    //     logger.debug("[GO OFFICE BOT - FAIL]");
    //     // res.send("[SEND MSG FAIL]");
    //   }
    // });

    getCurrentWeather();
  }
};
