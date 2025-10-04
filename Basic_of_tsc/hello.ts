
// ✅ Total “core” types in TS
// If we count main standalone types:
// string number boolean bigint symbol null undefined void never object any unknown

// 1️⃣ Primitive types
let str: string = "Kamrul";
let num: number = 20;
let bool: boolean = true;
let bigIntVal: bigint = 9007199254740991n;
let sym: symbol = Symbol("id");
let nul: null = null;
let undef: undefined = undefined;

// 2️⃣ Special function-related types
function voidFunc(): void {
    console.log("This function returns nothing (void)");
}

function neverFunc(): never {
    throw new Error("This function never returns");
}

// 3️⃣ Object types
let obj: object = { name: "Kamrul", age: 20 };
let arr: number[] = [1, 2, 3];
let tuple: [string, number] = ["Age", 20];
let func: () => string = () => "I am a function";

// 4️⃣ Utility / special TS types
let anyVal: any = "I can be anything";
let unknownVal: unknown = 123;
enum Color { Red, Green, Blue }
type UnionType = string | number;
type IntersectionType = { a: string } & { b: number };

// 5️⃣ Composite types (just examples)
interface Person {
    name: string;
    age: number;
}
class User {
    constructor(public name: string, public age: number) {}
}

// ===== Display all =====
console.log("===== PRIMITIVE TYPES =====");
console.log({ str, num, bool, bigIntVal, sym, nul, undef });

console.log("===== SPECIAL FUNCTION TYPES =====");
voidFunc();
// neverFunc(); // comment out, will throw

console.log("===== OBJECT TYPES =====");
console.log({ obj, arr, tuple, func });

console.log("===== UTILITY / SPECIAL TYPES =====");
console.log({ anyVal, unknownVal, Color});

console.log("===== COMPOSITE TYPES =====");
const person: Person = { name: "Kamrul", age: 20 };
const user = new User("Kamrul", 20);
console.log({ person, user });

























// =====================================
// 1, String type variable of TypeScript
// =======================================


// import {fixedLenghtArray} from "./fixedLenghtArray";

let firstName:string = "Kamrul";
let midName : string = "Hasan";
let lastName :string = "Ring";
let fullName :string = `My Full Name is  ${firstName} ${midName} ${lastName}`
console.log("String type variable of TypeScript")
console.log(fullName)

// =====================================
// 1. Number type variable of TypeScript
// =====================================

let age:number = 30;
let price :number = 560;
let tempreature :number = 33.9;
let salary :number = 60000;
let binary :number= 10011001;
let octalNumber :number= 0o155;
let haxdecimalNumber :number = 0xff;
console.log("Number type variable of TypeScript")
console.log({age, price, tempreature, salary, binary, octalNumber, haxdecimalNumber})

// =====================================
// 1. Boolean type variable of TypeScript
// =====================================

let isActive :boolean = true;
let isPermission :boolean = false;
let isChecked :boolean = isActive && isPermission;
let isGreater :boolean = 10 > 20 ;
let isSmaller : boolean = 10 < 20 ;
let isMatched : boolean =  isSmaller === isGreater ;
let isNotMatched : boolean = isSmaller !== isGreater ;
console.log( "===============BOOLEAN type variable of TypeScript======");
console.log( {isActive, isPermission, isChecked, isGreater, isSmaller, isMatched, isNotMatched})


// ============================================================
// 1. any  type variable of TypeScript
// =============================================================

let anyType :any = {name :"malr", age:20 ,admin:true, salary:20000};

console.log("============== any type variable of TypeScript ==========")
console.log(anyType);


// ============================================================
// 1. unknown type
// =============================================================

let x : unknown = { name: "kamrul" , age:20 , admin:false, user:true }
console.log("unknown type Object is -------->>",x )


// ============================================================
// 1. VOID type
// =============================================================


let voidType :void = undefined ;
console.log("VOID type value is --->>>", voidType)


// ============================================================
// 1. Array  type
// =============================================================

let arrayString : string[] = ["kamrul", "hasan", "ring"]
console.log("Array type value is --->>>", arrayString)
let araayNumber: number[] = [1,2,3,4,5,6,7,8,9,10]
console.log("Array type value is --->>>", araayNumber)
let arrayBoolean :boolean[] = [true, false , false , true, true ,]
console.log("Array type value is --->>>", arrayBoolean)
let arayOfAll : (string | number | boolean | void | unknown | null | undefined | object | symbol | bigint | any | never)[] = ["kamrul", 20 , true , undefined , null ,]
console.log("Array type value is --->>>", arayOfAll)
let arrayAny : any[] = ["kamrul", 20 , true , undefined , null ,]
console.log("Array type value is --->>>", arrayAny)

let names :Array<string | number> = ["kamrul", "hasan", "ring"]
let names1 :(string | number)[] = ["kamrul", "hasan", "ring"]
console.log("Array type value is --->>>", names, names1)


// TUPLES (Fixed-length arrays)

let userDetails:[string, number, boolean] = ["Kamrul", 22 , false]
let rgbColor :[number, number, number] = [255,155, 255]
let httpResponse :[number, string] = [200, "OK"]
// Destructuring Tuple -------
let [name, myAge, admin] = userDetails;
let [red, green , blue] = rgbColor;
let [statusCode, message] = httpResponse
console.log([{userDetails, rgbColor, httpResponse}])
console.log({userDetails, rgbColor, httpResponse})
console.log([userDetails, rgbColor, httpResponse])
console.log("Destructuring Tuple is --->>>", name, myAge, admin)
console.log("Destructuring Tuple is --->>>", red, green, blue)
console.log("Destructuring Tuple is --->>>", statusCode, message)





// ==========================================
// 10. ENUMS (Named constants)
// ==========================================


enum Direction{
    up= "UP",
    down= "DOWN",
    left= "LEFT",
    right = "RIGHT"
}


enum statusCodeEnum {
    success= 200,
    notFound= 404,
    badRequest= 400,
    serverError= 500
}
enum colorEnum {
    red,
    green ,
    blue
}

let move :Direction = Direction.up
let moveLeft :Direction = Direction.left
let moveRight :Direction = Direction.right

let successCode :statusCodeEnum = statusCodeEnum.success
let notFoundCode :statusCodeEnum = statusCodeEnum.notFound
let badRequestCode :statusCodeEnum = statusCodeEnum.badRequest
let serverErrorCode :statusCodeEnum = statusCodeEnum.serverError
let color1 :colorEnum = colorEnum.red
let color2 :colorEnum = colorEnum.green
let color3 :colorEnum = colorEnum.blue

console.log({
        direction:{move, moveLeft, moveRight},
        statusCode:{successCode, notFoundCode, badRequestCode, serverErrorCode},
        color:{color1, color2, color3}
})