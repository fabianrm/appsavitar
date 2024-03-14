import { ReqCustomer, Type } from "./ResponseCustomer";

export class CCustomer {
    static customerJSon(obj: ReqCustomer) {
        return new CCustomer(
            obj.id,
            obj.type,
            obj.document_number,
            obj.name,
            obj.address,
            obj.reference,
            obj.city,
            obj.latitude,
            obj.longitude,
            obj.phone_number,
            obj.email,
            obj.status
        );
    }

    constructor(
        public id: number,
        public type: Type,
        public document_number: string,
        public name: string,
        public address: string,
        public reference: string,
        public city: string,
        public latitude: string,
        public longitude: string,
        public phone_number: string,
        public email: string,
        public status: number,
    ) {
        
    }
}