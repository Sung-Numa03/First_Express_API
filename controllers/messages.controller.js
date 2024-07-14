const path = require('path');

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public','images', 'skimountain.jpg'))
    // res.send('<ul><li>How are You doing today</li></ul>');
}
function postMessages(req, res) {
    console.log('Updating Server..');
}

module.exports = {
    getMessages,
    postMessages,
}