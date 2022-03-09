import { structure } from "./Businesslist.js";
import { busArray } from "./business.js";
import { nyArr } from "./business.js";
import { agentsArr } from "./business.js";
import { agentHTML } from "./Businesslist.js";
import { SearchProductHTML } from "./Businesslist.js";
import { searchMatcher } from "./business.js";

const render= document.querySelector(".render")

const nyRender=document.querySelector(".findState")

const agentRender=document.querySelector(".agents")

const companySearchResultArticle=document.querySelector(".foundCompanies")

export const bizList= ()=>{
    const biz=busArray()
    
    biz.forEach(
        (i)=>render.innerHTML+=structure(i)
    )
}


export const nyList= ()=> {
    const biz=nyArr()

    biz.forEach(
        (i)=>nyRender.innerHTML+=structure(i)
    )
}

export const agentList= ()=>{
    const biz= agentsArr

    biz.forEach(
        (i)=> agentRender.innerHTML+=agentHTML(i)
    )
}

export const searchList= ()=>{
    
    let biz=searchMatcher()
    
   return companySearchResultArticle.innerHTML=SearchProductHTML(biz)
        
}