export default class UtilService {
    static getValueByProperty(property: string | undefined, object: any | undefined): any{
        if (object === undefined || object === null){
            return undefined;
        }
        if (typeof object === 'object'){
            if(property){
                return object[property];
            }else{
                return object[Object.keys(object)[0]];
            }
        }
        return object;
    }
}
