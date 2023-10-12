const mongoose = require('mongoose')
const uri = "mongodb+srv://thaiqt0002:thaiqt0002@cluster0.tjxojos.mongodb.net/test?retryWrites=true&w=majority"
const User = require('./models/user')


mongoose.connect(uri)

.then(() => {
    console.log('Connect to mongodb')
})
.catch((err) => {
    console.log(err)
})

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve,ms));
}
const main = async() => {
    await sleep(10000);

    

    const newUser = new User({
        email: 'gmail@gmail.com',
        phoneNumber: '0908704123'
    })

    await newUser.save()

}

    

main()

function myFunction() {
    var chooseResult = document.getElementsByName('a');
    if (chooseResult[0].checked == 1) {console.log('ngon vcl');} else console.log('nhu cct', chooseResult);
}