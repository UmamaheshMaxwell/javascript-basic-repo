/*
    ! Error Handling
*/
try {
    // Code that may throw error
} catch (ex) {
    // code to be executed if an error occurs
} finally {
    // code to be executed regardless of an error occurs or not
}

// try {
//     var output = getMessage("Hello", "Uma")
// } catch (ex) {
//     console.log(ex)
// } finally {
//     console.log(`this will get executed always`)
// }

try {
    var output = "Hello"
} catch (ex) {
    console.log(ex)
} finally {
    console.log(`this will get executed always`)
}