// ************ This File all code co



// ==========================================
// 1. STRING TYPE
// ==========================================
let userName: string = "Kamrul Hasan";
let greeting: string = `Hello, ${userName}!`; // Template literal
let company: string = 'Google';
let quote: string = "TypeScript is awesome!";

console.log("=== STRING EXAMPLES ===");
console.log("userName:", userName);
console.log("greeting:", greeting);
console.log("company:", company);
console.log("quote:", quote);

// ==========================================
// 2. NUMBER TYPE
// ==========================================
let age: number = 29;
let temperature: number = -5.5;
let salary: number = 50000.75;
let binary: number = 0b1010; // Binary
let octal: number = 0o744;   // Octal
let hexadecimal: number = 0xf00d; // Hex

console.log("\n=== NUMBER EXAMPLES ===");
console.log("age:", age);
console.log("temperature:", temperature);
console.log("salary:", salary);
console.log("binary (0b1010):", binary);
console.log("octal (0o744):", octal);
console.log("hexadecimal (0xf00d):", hexadecimal);

// ==========================================
// 3. BOOLEAN TYPE
// ==========================================
let isActive: boolean = true;
let hasPermission: boolean = false;
let isGreater: boolean = 10 > 5;
let isEmpty: boolean = userName.length === 0;

console.log("\n=== BOOLEAN EXAMPLES ===");
console.log("isActive:", isActive);
console.log("hasPermission:", hasPermission);
console.log("isGreater (10 > 5):", isGreater);
console.log("isEmpty:", isEmpty);

// ==========================================
// 4. ANY TYPE (Avoid in production)
// ==========================================
let dynamicValue: any = "I can be anything";
dynamicValue = 42;
dynamicValue = true;
dynamicValue = { name: "John" };
dynamicValue = [1, 2, 3];

console.log("\n=== ANY EXAMPLES ===");
console.log("dynamicValue:", dynamicValue);

// ==========================================
// 5. UNKNOWN TYPE (Type-safe alternative to any)
// ==========================================
let uncertainValue: unknown = "Hello World";
// uncertainValue.toUpperCase(); // ❌ Error - need type checking

if (typeof uncertainValue === "string") {
    console.log("uncertainValue (as string):", uncertainValue.toUpperCase());
}

uncertainValue = 100;
if (typeof uncertainValue === "number") {
    console.log("uncertainValue (as number):", uncertainValue * 2);
}

// ==========================================
// 6. VOID TYPE (No return value)
// ==========================================
function logMessage(message: string): void {
    console.log(`LOG: ${message}`);
}

function noReturn(): void {
    // This function doesn't return anything
    console.log("This function returns void");
}

let unusable: void = undefined; // Only undefined can be assigned to void

console.log("\n=== VOID EXAMPLES ===");
logMessage("Testing void function");
noReturn();

// ==========================================
// 7. NEVER TYPE (Values that never occur)
// ==========================================
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // This function never returns
    }
}

function fail(): never {
    return throwError("Something failed!");
}

// let neverVariable: never; // Cannot be assigned any value

console.log("\n=== NEVER EXAMPLES ===");
// throwError("This will throw an error"); // Uncomment to see never in action

// ==========================================
// 8. ARRAYS
// ==========================================
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];
let mixed: (string | number)[] = ["Apple", 123, "Banana", 456];

// Array methods
numbers.push(6);
names = names.map(name => name.toUpperCase());

console.log("\n=== ARRAY EXAMPLES ===");
console.log("numbers:", numbers);
console.log("names:", names);
console.log("mixed:", mixed);
console.log("numbers length:", numbers.length);

// ==========================================
// 9. TUPLES (Fixed-length arrays)
// ==========================================
let person: [string, number, boolean] = ["Kamrul", 29, true];
let rgbColor: [number, number, number] = [255, 0, 128];
let httpResponse: [number, string] = [200, "OK"];

// Destructuring tuples
let [name, ageValue, isEmployed] = person;
let [red, green, blue] = rgbColor;

console.log("\n=== TUPLE EXAMPLES ===");
console.log("person:", person);
console.log("rgbColor:", rgbColor);
console.log("httpResponse:", httpResponse);
console.log("Destructured - name:", name, "age:", ageValue, "employed:", isEmployed);

// ==========================================
// 10. ENUMS (Named constants)
// ==========================================
enum Direction {
    Up = "UP",
    Down = "DOWN", 
    Left = "LEFT",
    Right = "RIGHT"
}

enum StatusCode {
    Success = 200,
    BadRequest = 400,
    NotFound = 404,
    ServerError = 500
}

enum Color {
    Red,    // 0
    Green,  // 1
    Blue    // 2
}

let move: Direction = Direction.Up;
let responseStatus: StatusCode = StatusCode.Success;
let favoriteColor: Color = Color.Blue;

console.log("\n=== ENUM EXAMPLES ===");
console.log("move:", move);
console.log("responseStatus:", responseStatus);
console.log("favoriteColor:", favoriteColor);
console.log("Color[2]:", Color[2]); // Reverse mapping

// ==========================================
// 11. NULL & UNDEFINED
// ==========================================
let emptyValue: null = null;
let notAssigned: undefined = undefined;
let maybeString: string | null = null;
let optionalNumber: number | undefined = undefined;

console.log("\n=== NULL & UNDEFINED EXAMPLES ===");
console.log("emptyValue:", emptyValue);
console.log("notAssigned:", notAssigned);
console.log("maybeString:", maybeString);
console.log("optionalNumber:", optionalNumber);

// ==========================================
// 12. OBJECT TYPE
// ==========================================
let user: { name: string; age: number; email?: string } = {
    name: "Kamrul",
    age: 29
};

let car: object = {
    brand: "Toyota",
    model: "Camry",
    year: 2023
};

console.log("\n=== OBJECT EXAMPLES ===");
console.log("user:", user);
console.log("car:", car);

// ==========================================
// 13. TYPE ALIASES (Custom types)
// ==========================================
type Point = {
    x: number;
    y: number;
};

type ID = string | number;

let position: Point = { x: 10, y: 20 };
let userId: ID = "ABC123";
let productId: ID = 456;

console.log("\n=== TYPE ALIAS EXAMPLES ===");
console.log("position:", position);
console.log("userId:", userId);
console.log("productId:", productId);

// ==========================================
// 14. UNION TYPES
// ==========================================
let identifier: string | number = "user123";
identifier = 12345;

let flexibleArray: (string | number | boolean)[] = ["text", 42, true];

console.log("\n=== UNION TYPE EXAMPLES ===");
console.log("identifier:", identifier);
console.log("flexibleArray:", flexibleArray);

// ==========================================
// 15. TYPE ASSERTIONS
// ==========================================
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
let anotherLength: number = (<string>someValue).length;

console.log("\n=== TYPE ASSERTION EXAMPLES ===");
console.log("strLength:", strLength);
console.log("anotherLength:", anotherLength);

// ==========================================
// SUMMARY OUTPUT
// ==========================================
console.log("\n" + "=".repeat(50));
console.log("🎉 TYPE PRACTICE SUMMARY");
console.log("=".repeat(50));
console.log(`✅ Strings: ${userName}, ${greeting}`);
console.log(`✅ Numbers: ${age}, ${salary}, ${binary}`);
console.log(`✅ Booleans: ${isActive}, ${hasPermission}`);
console.log(`✅ Arrays: [${numbers}]`);
console.log(`✅ Tuples: [${person}]`);
console.log(`✅ Enums: ${move}, ${StatusCode.Success}`);
console.log(`✅ Any: ${dynamicValue}`);
console.log(`✅ Unknown: ${uncertainValue}`);
console.log(`✅ Void: ${unusable}`);
console.log(`✅ Never: (functions that never return)`);
console.log("=".repeat(50));