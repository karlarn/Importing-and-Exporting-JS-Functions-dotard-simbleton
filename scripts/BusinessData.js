import { structure, agentHTML } from "./Businesslist.js";
import { nyArr, busArray, agentsArr } from "./business.js";


const render= document.querySelector(".render")

const nyRender=document.querySelector(".findState")

const agentRender=document.querySelector(".agents")


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
