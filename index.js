const fs = require('fs')

module.exports = async (options) => {
    const file = options.file
    if (!file) throw Error('File needs to be specified')
    const content = await fs.promises.readFile(file, 'utf8').catch(e => {
        console.log(e)
    })
    
    const lines = content.split(options.endingLineSeperator || "\r\n")
    const columns = lines.map(element => {
        return element.split(options.delimeter || ';')
    });

    let headers = null;
    if(options.hasHeaders){
        headers = columns[0] 
        columns.splice(0,1)
    }
    return {
        getAllColumns() {
            return columns
        },
        getColumn(col,isNumerical) {
            let idx = 0;
            if(typeof col==='number') idx=col
            else if(options.hasHeaders) idx = headers.findIndex((c)=>c.trim().toLowerCase()===col.toLowerCase())
            else  idx = columns[0].findIndex((c)=>c.trim().toLowerCase()===col.toLowerCase())

            return columns.map(c=>isNumerical?parseFloat(c[idx]):c[idx])
        },
        getHeaders(){
            return headers;
        },
        getStats(){
            return {
                lines : columns.length,
                columns: columns[0].length
            }
        },
        getJson(){
            /**
             * This function converts csv to JSON Object
             */
            const obj = {}
            console.log(columns)
            columns.forEach((col,idx) => {
                col.forEach((c,jdx)=>{
                    console.log(headers[jdx],col[jdx])
                    obj[idx]=headers[jdx]=col[jdx]
                })
                
            });
            return obj
        }
    }
}
