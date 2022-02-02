import db from "./database.js"

export function createTable() {
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Data (title TEXT, contains TEXT, is_secure , date, type) ')
    })
}

export function encrypt(r) {
    var t = "";
    for (let i = 0; i < r.length; i++) i < r.length - 1 ? (t += r.charCodeAt(i) + 10, t += "-") : t += r.charCodeAt(i) + 10;
    return t
}

export const shuffle = r => r.sort((r, t) => .5 - Math.random());


export function decrypt(r) {
    var t = "",
        n = r.split("-");
    for (let i = 0; i < n.length; i++) t += String.fromCharCode(n[i] - 10);
    return t
}

export class Item {
    constructor(title = "", content = "", isSecured = false, date = new Date(), type = null) {
        this.title = title;
        this.content = content;
        this.addDate = date;
        this.type = type;
        this.isSecured = isSecured;
    }
    encrypt(r) {
        var t = "";
        for (i = 0; i < r.length; i++) i < r.length - 1 ? (t += r.charCodeAt(i) + 10, t += "-") : t += r.charCodeAt(i) + 10;
        return t
    }
    decrypt(r) {
        var t = "",
            n = r.split("-");
        for (i = 0; i < n.length; i++) t += String.fromCharCode(n[i] - 10);
        return t
    }
    add() {
        db.transaction(function (tx) {
            let _ = this
            tx.executeSql(`INSERT INTO Data VALUES ('${_.title}', '${_.content}', '${_.isSecured}', '${_.date}', '${_.type}')`)
        })
    }
}