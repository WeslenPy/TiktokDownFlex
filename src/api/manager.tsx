


class ManagerAPI{

    userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.85 Safari/537.36"

    constId = "__UNIVERSAL_DATA_FOR_REHYDRATION__"
    dataKey = "webapp.video-detail"

    regexURL = /"playAddr":\s*"([^"]*)"/;

    async get(url:string){

        let result = await fetch(url,{
                                        method:"GET",
                                        headers:{"User-Agent":this.userAgent}
                                    
                                    })

        const data= await result.text()
                                 
        return data

    }

    formatURL(url:string){
        return url.replace(/\\u([\dA-F]{4})/gi, (match, grp) => String.fromCharCode(parseInt(grp, 16)));
    }


    findURL(html:string){
        let result = html.match(this.regexURL)

        if (result){return this.formatURL(result[0].replace(`"playAddr":`,""))}


        return ""
    }

}

export default ManagerAPI;