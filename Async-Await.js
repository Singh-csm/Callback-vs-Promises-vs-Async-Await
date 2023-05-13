//Async-Await


async function sendAsync(){
    let user = await getUser(1)
    let profile = await getProfile(user)
    let account = await getAccount(profile)
    let report = await getReport(account)
    let send = sendStatistics(report)
    console.log(send)
}
