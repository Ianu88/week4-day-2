const os = require (`os`);
const fs = require (`fs`);
let userDetails = os.userInfo().username;
fs.appendFile(`oh-hi.txt`, `hello ${userDetails}`, (err) => {
    if (err){
        console.log(`oops`)
    }
})