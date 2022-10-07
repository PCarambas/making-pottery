// 1.Define function named buyClay. Need no prameters. Should return empty object.
/* 2.Define function named makePottery. Pass it the empty object buyClay produced, needs
single parameter to capture that value and use it*/





const buyClay = () => {
    const clayObject = {}

}


const makePottery = (clayObject) => {
    clayObject.shape = "Bowl"

    return clayObject
}
const potteryBowl = makePottery(buyClay)
console.log(potteryBowl)



const bisqueFire = (potteryBowl) => {
    potteryBowl.readyForGlazing = true

    return potteryBowl
}
const firedBowl = bisqueFire(potteryBowl)
console.log(firedBowl)



const glazedPottery = (potteryBowl) => {
    if (potteryBowl.bisqueFire = true) {
        return { glazing: "Midningt Blue" }

    } else {

        console.log('Make sure you bisque fire the pottery before you glaze it.')
    }

}
const glazedBowl = glazedPottery(potteryBowl)
console.log(glazedBowl)



const finalFiring = (potteryBowl, temp) => {
    if (temp > 1200) {
        potteryBowl.cracked = true

    } else { 
        
        (temp < 1200) 
        potteryBowl.cracked = false
    }
    return potteryBowl

}
const firedPottery = finalFiring(potteryBowl, 1400)
console.log(firedPottery)