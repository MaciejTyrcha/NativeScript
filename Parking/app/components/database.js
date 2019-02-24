export default class Database {
    constructor() {
        this.data = [],
        this.place = [{
            name: "A1",
            busy: false
        },
        {
            name: "A2",
            busy: false
        },
        {
            name: "A3",
            busy: false
        },
        {
            name: "A4",
            busy: false
        },
        {
            name: "A5",
            busy: false
        },
        {
            name: "A6",
            busy: false
        },
        ]
    }
    register(userName, userSurname, userLogin, userPassword) {
        let user = {
            name: userName,
            surname: userSurname,
            login: userLogin,
            password: userPassword
        }
        this.data.push(user)
    }
    allUsers() {
        return this.data.map(e => e.name).join(" ");
    }
}