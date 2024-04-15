/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// createEmployeeRecord function
function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
}

// createEmployeeRecords function
function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
}

// createTimeInEvent function
function createTimeInEvent(dateTime) {
    const [date, hour] = dateTime.split(' ');
    this.timeInEvents.push({
        type: 'TimeIn',
        date,
        hour: parseInt(hour),
    });
    return this;
}

// createTimeOutEvent function
function createTimeOutEvent(dateTime) {
    const [date, hour] = dateTime.split(' ');
    this.timeOutEvents.push({
        type: 'TimeOut',
        date,
        hour: parseInt(hour),
    });
    return this;
}

// hoursWorkedOnDate function
function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
}

// wagesEarnedOnDate function
function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

// findEmployeeByFirstName function
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}

// calculatePayroll function
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employee) => totalPayroll + allWagesFor.call(employee), 0);
}

// Export all the functions
module.exports = {
    allWagesFor,
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    findEmployeeByFirstName,
    calculatePayroll,
};

