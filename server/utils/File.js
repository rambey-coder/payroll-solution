export class File{
    constructor(file){
        this.file = file
    }

    validExtensions = ["png", "svg", "jpeg", "gif", "jpg"]

    isValidFile(){
        return this.file != null && this.file != undefined
    }

    isInvalidSize(){
        console.log(this.file.size > 250000)
        return this.file.size > 250000
    }

    isInvalidType(){
        var regexAll = /[^\\]*\.(\w+)$/;
        var match = this.file.filename.match(regexAll)
        const ext = match[1]
        console.log(ext)
        return !this.validExtensions.includes(ext)
    }
}