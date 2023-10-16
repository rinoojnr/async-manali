
function buyaCar(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('buy a car')
        },10000)
    })
}
   
function letsGo(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('lets go')
        },1000)
    })
    
}

function setBag(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('bag set')
        },2000)
    })
}

function gotoMountain(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej('mountain is closed')
        },2000)
    })
}


async function makeMytrip(){
    try{
        const car = await buyaCar();
    console.log(car)

    const bag = await setBag();
    console.log(bag)

    const go = await letsGo();
    console.log(go)

    const mountain = await gotoMountain();
    console.log(mountain)
    }catch(error){
        console.log(error)
    }
}

makeMytrip()