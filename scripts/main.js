import { bizList } from "./BusinessData.js";
import { nyList } from "./BusinessData.js"
import { agentList} from "./BusinessData.js"
import { searchList } from "./BusinessData.js"

bizList()

nyList()

agentList()

document.querySelector("#companySearch").addEventListener("keypress", searchList())