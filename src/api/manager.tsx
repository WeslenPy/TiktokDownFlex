


class ManagerAPI{

    userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.85 Safari/537.36"

    constId = "__UNIVERSAL_DATA_FOR_REHYDRATION__"
    dataKey = "webapp.video-detail"

    async get(url:string){

        let result = await fetch(url,{
                                        method:"GET",
                                        headers:{"User-Agent":this.userAgent}
                                    
                                    })

        const data= await result.text()
                                 
        return data

    }


    findURL(html:string){
        // let data_result = src["__DEFAULT_SCOPE__"][this.dataKey]
        // let url = data_result["itemInfo"]["itemStruct"]["video"]["playAddr"]

        // return url
    }

}

export default ManagerAPI;