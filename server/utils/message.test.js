var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Diego';
    var latitude = 1;
    var longitude = 2;
    var url = 'https://www.google.com/maps?q=1,2';
    var locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(typeof locationMessage.createdAt).toBe('number');
    expect(locationMessage).toMatchObject({from, url});
  });
});
