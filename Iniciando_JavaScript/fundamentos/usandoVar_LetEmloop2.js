
//usando var no for

const funcs = []

for (var i = 0; i  < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

console.log("-----")

//usando let no for

const funcs1 = []

for (let i = 0; i  < 10; i++){
    funcs1.push(function() {
        console.log(i)
    })
}

funcs1[2]()
funcs1[8]()