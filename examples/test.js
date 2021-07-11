const lib = require("../index")
const scriptdb = new lib.memori("./script.json")
var key = "your_key"
var data = "your data"
scriptdb.setValue(key, data)
console.log(`success set key ${key} and Data ${data}`)
var getvalue = scriptdb.getValue(key)
console.log(`check key ${key} result ${getvalue}`)
var dlt = scriptdb.delete(key)
if (dlt) {
    console.log(`berhasil menghapus key ${key}`)
} else {
    console.log("data tidak berhasil di haus kemungkinan belum ada")
}
var getValues = scriptdb.getValues()
console.log(getValues)