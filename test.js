const user1 = {
    username: "qwerty",
    price: "400"
}

const user2 = {
    username: "zwerty",
    price: "900"
}

function objcall(anyobj){
    return `${anyobj.username} this is username and ${anyobj.price} this is price`
}

console.log(objcall(user2))