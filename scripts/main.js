import { bizList, nyList, agentList } from "./BusinessData.js";
import { SearchProductHTML } from "./Businesslist.js"
import { busArray } from "./business.js"

bizList()

nyList()

agentList()


document.querySelector("#companySearch").addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.keyCode === 13) {
            let biz=busArray()
            let searchTerm = document.getElementById("companySearch").value.toLowerCase()
            let result = biz.find((i) => i.companyName.toLowerCase().includes(searchTerm))
            return document.querySelector(".foundCompanies").innerHTML = SearchProductHTML(result)
        }
        
    })
