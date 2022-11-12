const read = require('readline-sync')
const fs = require('fs')

while (true) {
    console.log("1. Add User");
    console.log("2. Update User");
    console.log("3. Delete User");
    console.log("4. Search User");
    console.log("5. Exit");

    let option = read.question('Please select an option: ');
    switch (option) {
        case "1":
            addUser();
            break;
        case "2":
            updateUser();
            break;
        case "3":
            console.log("Delete User Selected");
            deleteUser();

            break;
        case "4":
            console.log("Search User Selected");
            searchUser();
            break;
        case "5":
            process.exit(0);
            break;
        default:
            console.log("Invalid option");
    }
}

function updateUser() {
    let userName = read.question('Enter the username: ');
    var fileName = getFileName(userName);

    var userText = fs.readFileSync(fileName, 'utf8');
    var user = JSON.parse(userText);

    console.log("Enter the details or leave it blank");
    let name = read.question("Name: ");
    let email = read.question("Email: ");
    let phone = read.question("Phone no 1: ");
    let phone2 = read.question("Phone no 2: ");

    user.name = name == "" ? user.name : name;
    user.email = email == "" ? user.email : email;
    user.phone = phone == "" ? user.phone2 : phone;
    user.phone2 = phone2 == "" ? user.phone2 : phone2;

    fs.writeFileSync(fileName, JSON.stringify(user));
    console.log("User updated successfully 👍");
}

function addUser() {
    console.log("Add User Selected");
    var user = {
        name: null,
        username: null,
        email: null,
        phone: null,
        phone2: null
    };
    user.name = read.question("Name: ");
    user.username = read.question("Username: ")
        .toLowerCase();
    user.email = read.question("Email: ");
    user.phone = read.question("Phone: ");
    user.phone2 = read.question("Phone2:");


    let fileName = getFileName(user.username);
    var json = JSON.stringify(user);
    fs.writeFileSync(fileName, json);
}


function getFileName(username) {
    return `data/${username}.json`;
}

function deleteUser() {
    var username = read.question("Enter the username");
    var filename = getFilename(username);
    fs.unlinkSync(filename);
    console.log("user has been deleted")
}

function searchUser() {
    console.log("enter the username to be searched")
        var emailUsername=read.question("Search by email or username: ");
        var files = fs.readdirSync("data");
        files.forEach(e=>{
        var filedata=JSON.parse(fs.readFileSync("data/"+e,'utf8'));
        if (filedata.email==-emailUsername){
        console.log(filedata);
        }
        else if (filedata.username==emailUsername){
            console.log(filedata);
        }
        })
    }
