const controller = {};

controller.checkUser = async (req, res) => {
    res.redirect('/company/addCompany');
}

module.exports = controller;
//export default controller;