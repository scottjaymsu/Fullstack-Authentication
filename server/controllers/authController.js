/* Handle incoming requests from clients and provide appropriate responses */

const test = (req, res) => {
    res.json('test is working');
}

module.exports = {
    test // Exporting the test function
};
