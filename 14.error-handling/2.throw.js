try {
    throw "Error occured"
} catch (ex) {
    console.log(ex)
}

try {
    throw {
        number: 101,
        message: 'Duplicate records'
    }
} catch(ex) {
    console.log(ex)
}