interface Demo{
    fname:string;
    lname:string;
    list:Array<number>;
    ispresent?: Function;
}

class Person implements Demo{
    fname: 'chethan';
    lname: 'nagaraju';
    list: [1,2,3,5];
        
    }

    