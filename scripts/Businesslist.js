export  const structure= (objFunc) =>{
    return `
    <section class="biz">
            <h4 class="bizName">${objFunc.companyName}</h4>
            <h6 class="bizStreet">${objFunc.addressFullStreet}</h6>
            <h6 class="bizCityStateZip">${objFunc.addressCity}, ${objFunc.addressStateCode} ${objFunc.addressZipCode}</h6>
        </section> 
    `
}


export const agentHTML= (obj) => {
    return `
    <section class="agents">
    <h4 class="fullName">${obj.fullName}</h4>
    <h6 class="company">${obj.company}</h6>
    <h6 class="number">${obj.number}</h6>
    `
}

export const SearchProductHTML= (obj) => {
    return `
    <h4 class="companySearchProduct">${obj.companyName}</h4>
    <section class="streetAddressSearchProduct">${obj.addressFullStreet}</section>
    <section class="addressSearchProduct">${obj.addressCity}, ${obj.addressStateCode} ${obj.addressZipCode}</section>
    `
}