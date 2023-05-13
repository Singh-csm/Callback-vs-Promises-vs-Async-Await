//promise

getUser()
    .then(getProfile)
    .then(getAccount)
    .then(getReport)
    .then(sendStatistics)
    .then(function (success){
        console.log(success)
    })
    .catch(function (error){
        console.error(error)
    })
