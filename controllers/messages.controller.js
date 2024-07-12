function getMessages(req, res) {
    res.send('<ul><li>How are You doing today</li></ul>');
}
function postMessages(req, res) {
    console.log('Updating Server..');
}

module.exports = {
    getMessages,
    postMessages,
}