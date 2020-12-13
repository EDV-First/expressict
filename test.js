// function girlFriend(sum, variable) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             resolve(sum - variable)
//         }, 3000)
            
//     })
// }

// let sum = 500
// const watchMovie = 150;
// const eat = 200;
// const cf = 50; 
// girlFriend(sum, watchMovie)
// .then(function(value) {
//     console.log(value)
//     sum = value
// })
// .then(function() {
//     return girlFriend(sum, eat).then(value => {
//         console.log(value)
//         sum = value 
//     })
// })
// .then(function() {
//     return girlFriend(sum, cf).then(value => console.log(value))
// })

// async function picnic() {
//     const rs1 = await girlFriend(sum, watchMovie)
//     console.log(rs1)
//     const rs2 = await girlFriend(rs1, eat)
//     console.log(rs2)
//     const rs3 = await girlFriend(rs2, cf)
//     console.log(rs3)
// }

// picnic()