module.exports = (function () {
  var email = new RegExp('^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$');
  var ipv4 = new RegExp('^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$');
  //Unicode encoding
  var chineseCharacter = new RegExp('[\u4E00-\u9FA5\uF900-\uFA2D]');
  var username = new RegExp('^[a-zA-Z][a-zA-Z0-9_]{4,15}$');
  var cssHexColor = new RegExp('^#?([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?$');
  return {
    email: email,
    ipv4: ipv4,
    chineseCharacter: chineseCharacter,
    username:username,
    cssHexColor: cssHexColor
  };
})();