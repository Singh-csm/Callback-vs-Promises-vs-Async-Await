//callback
getUser(function(err,user){
    getProfile(user,function(err,profile){
        getAccount(profile,function(err,account){
            getReport(account,function(err,report){
                sendStatistics(report,function(error){
                    // code
                })
            })
        })
    })
})
