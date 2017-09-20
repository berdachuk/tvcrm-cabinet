export class DocInfo {

    public docId:number;
    public docName:string;
    public docUrl:string;
    public docDate:Date;

    constructor(docId?:number, docName?:string, docUrl?:string, docDate?:Date) {
        this.docId = docId;
        this.docName = docName;
        this.docUrl = docUrl;
        this.docDate = docDate;
    }

}
