var reg =  require('../src/iregexp');
var assert = require('assert');
assert(reg.email.test('colin66@github.com'), 'email test');
assert(reg.ipv4.test('255.255.255.255'), 'ipv4 test');
assert(reg.chineseCharacter.test('你好hello'), 'chineseCharacter test');
assert(reg.username.test('Colin6618'), 'username test');
assert(reg.cssHexColor.test('#ffffff'), 'cssHexColor test');
console.log('Test passed');
