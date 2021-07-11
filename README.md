<p align = "center" >
    <img src="https://github.com/azkadev/azkadev/blob/main/pp.png?raw=true" width="350" height="350" />
</p >

<p align="center">
    <a href="https://github.com/azkadev"><img title="Author" src="https://img.shields.io/badge/AUTHOR-AZKADEV-orange.svg?style=for-the-badge&logo=github"></a>
</p>

<p align="center"> 
<a href="https://www.buymeacoffee.com/" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
</p>

<p align="center">
<a href="https://t.me/azkadev"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Ft.me%2F%40azkadev&count_bg=%234AA803&title_bg=%231C1C1C&icon=telegram.svg&icon_color=%23FFFFFF&title=Telegram&edge_flat=false"/></a>
<a href="https://tiktok.com/@azkadev"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fwww.tiktok.com%2F%40azkadev&count_bg=%234AA803&title_bg=%231C1C1C&icon=tiktok.svg&icon_color=%23FFFFFF&title=Tiktok&edge_flat=false"/></a>
<a href="https://github.com/azkadev"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2F%40azkadev&count_bg=%232300CB&title_bg=%23663838&icon=github.svg&icon_color=%23FFFFFF&title=Github&edge_flat=false"/></a>
<a href="https://instagram.com/azkadev"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Finstagram.com%2F%40azkadev&count_bg=%237C62F6&title_bg=%23663838&icon=instagram.svg&icon_color=%23FFFFFF&title=Instagram&edge_flat=false"/></a>
 <a href="https://www.youtube.com/channel/UC74N8oC9ow7PK-G8XfWVbcA"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Finstagram.com%2Fazkadev&count_bg=%237C62F6&title_bg=%23EB0000&icon=youtube.svg&icon_color=%23FFFFFF&title=Youtube&edge_flat=false"/></a> 
</p>

---

## ❄Content-Library
- 📰 0% Ads
- 💸 0% Tracker
- 📃 0% Logging

## ❄Docs 


1. **Full sample** 

```jsconst lib = require("@guidb/scriptdb")
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
console.log(getValues)```
