const controller = {};

controller.addCompany = async (req, res) => {
    res.sendFile(path.join(__dirname + '/create-company.html'));
}

export default controller;