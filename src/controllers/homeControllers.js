
const getHomePage = (req, res) => {
    res.send('Hello Testing');
}

const getTest = (req, res) => {
    res.send('Testing 1');
}

const getImage = (req, res) => {
    res.render('sample.ejs')
}


module.exports = {
    getHomePage, getTest, getImage
}