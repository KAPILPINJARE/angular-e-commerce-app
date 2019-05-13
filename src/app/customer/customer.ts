

export class Address {
    public addressLine1: string;
    public state: string;
    public city: string;
    public postalCode: number;
}

export class Customer {
    public name: string;
    public emailId: string;
    public password: string;
    public contact: number;
    public gender: string;
    public address: Address;
}