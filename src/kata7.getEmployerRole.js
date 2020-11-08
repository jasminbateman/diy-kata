const getEmployerRole = (employeeName, employees) => {
    let jobRole;
    jobRole = employees.find(element => element.name === employeeName);

    return jobRole.role;
};

module.exports = getEmployerRole;
