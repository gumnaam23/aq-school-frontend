// src/data/courseDetails.js
import dedent from 'dedent';

const courseDetails = {
    javascript: {
      title: "JavaScript Essentials",
      description: "Learn JS fundamentals including DOM, functions, async/await, and more.",
      topics: [
        {
          name: "Variables and Data Types",
          content: dedent(`
      JavaScript mein aap alag-alag tarah ke variables declare kar sakte ho. 
      
      1. **let**: Jab aapko koi variable declare karna ho jisko aap baad mein change karna chahte ho, tab aap **let** use karte ho. Isse aap value ko update kar sakte ho.  
      2. **const**: Agar aapko koi variable declare karna hai jisko ek baar value assign karne ke baad change nahi karna ho, to **const** use karte ho. Yani ki, const se declare kiye gaye variables ka value fix hota hai.  
      3. **var**: **var** purani JavaScript ki syntax hai. Aaj kal **let** aur **const** ka use zyada hota hai kyunki **var** ki scoping aur behavior modern JS mein issues create kar sakte hain.
      
      **Common Data Types:**
      
      - **String**: Ye text ko represent karta hai. Jaise: \`"Hello World"\`  
      - **Number**: Ye numbers ko represent karta hai, chahe woh integer ho ya decimal. Jaise: \`10\`, \`3.14\`  
      - **Boolean**: Ye sirf do values rakh sakta hai - \`true\` ya \`false\`. Ye logical operations mein kaam aata hai.  
      - **Object**: Ye ek collection hota hai key-value pairs ka. Aap real-world objects ko represent kar sakte ho jaise ek person ya product.  
      - **Array**: Ye ek ordered list hoti hai values ki, jisme aap multiple elements store kar sakte ho.
          `),
          example: `let name = "John";  // String - Naam ek text value hai.
      const age = 25;     // Number - Umar ka value number hai.
      let isActive = true;  // Boolean - Agar koi active hai to true, nahi to false.
      const person = { name: "Alice", age: 30 }; // Object - Person ka data key-value pair mein store hota hai.
      let colors = ["red", "blue", "green"]; // Array - Colors ki ek ordered list hai.`
        },
        {
          name: "Operators",
          content: dedent( `
      JavaScript mein operators ka use calculation, comparison, ya logic apply karne ke liye hota hai.
      
      **Types of Operators:**
      
      1. **Arithmetic Operators**: Ye basic mathematical operations ko perform karte hain. Jaise: \`+\`, \`-\`, \`*\`, \`/\`, \`\%\`  
      2. **Assignment Operators**: Ye variables ko values assign karne ke liye use hota hai. Jaise: \`=\`, \`+=\`, \`-=\`  
      3. **Comparison Operators**: Ye do values ko compare karte hain aur result mein \`true\` ya \`false\` return karte hain. Jaise: \`==\`, \`===\`, \`!=\`, \`>\`, \`<\`  
      4. **Logical Operators**: Ye logical operations ko perform karte hain jaise AND, OR, NOT. Jaise: \`&&\`, \`||\`, \`!\`  
      5. **Ternary Operator**: Ek shorthand way hai if-else condition ko likhne ka. Syntax hota hai: \`condition ? value1 : value2\`  
          `),
          example: `let a = 10, b = 5;
      let sum = a + b; // Arithmetic operator: Addition
      let isEqual = a === b; // Comparison operator: Strict equality check
      let result = a > b ? "A is greater" : "B is greater"; // Ternary operator`
        },
        {
          name: "Control Flow",
          content: dedent( `
      Control Flow ka matlab hai code ka order, yani kis tarah se code execute hoga. Aap conditions ke base pe decide karte ho ki kaunsa code run hoga.
      
      **Keywords used in Control Flow:**
      
      - **if / else**: Agar condition true hai to kuch kaam karo, agar false ho to kuch aur karo.
      - **switch**: Ye ek alternative hai multiple if conditions ka, jab multiple values ko check karna ho.
      - **for / while / do-while loops**: Ye aapko repetitive tasks perform karne mein madad karte hain. In loops ka use aap kisi task ko baar-baar perform karne ke liye karte hain jab tak condition true rahe.
      
          `),
          example: `let age = 18;
      if (age >= 18) {
        console.log("Eligible to vote"); // If age is greater than or equal to 18
      } else {
        console.log("Not eligible"); // Else condition if age is less than 18
      }`
        },
        {
          name: "Functions",
          content: dedent( `
      Functions ek reusable block of code hote hain jo kisi task ko perform karte hain. JavaScript mein 3 tareeke se functions define kiye ja sakte hain:
      
      - **Function Declaration**: Aap function ko directly declare karte ho aur call karte ho.
      - **Function Expression**: Function ko variable mein store karke use kiya jaata hai.
      - **Arrow Function**: ES6 ka feature, ye shorthand notation hai functions likhne ka.
      
      Functions ka fayda ye hai ki aap same code ko baar-baar likhne ke bajaye ek function bana sakte ho aur usse call kar sakte ho.
      
          `),
          example: `function greet(name) {
        return "Hello " + name; // Function declaration
      }
      const sayHi = (name) => "Hi " + name; // Arrow function`
        },
        {
          name: "Scope and Closures",
          content: dedent( `
      **Scope** ka matlab hai ki ek variable kis jagah se accessible hai. JavaScript mein do types ke scope hote hain:
      
      - **Global Scope**: Variable global scope mein accessible hota hai, yani har jagah se access kiya ja sakta hai.
      - **Local Scope**: Function ke andar declare kiya gaya variable sirf us function ke andar hi accessible hota hai.
      
      **Closures** ka matlab hai ki ek function apne outer function ke variables ko "yaad" rakhta hai, chahe outer function already execute ho chuka ho.
      
          `),
          example: `function outer() {
        let name = "John"; // Outer function variable
        return function inner() {
          console.log(name); // Inner function accessing outer function's variable
        }
      }
      const fn = outer();
      fn(); // John - inner function will still have access to outer's variable`
        },
        {
          name: "Objects and Arrays",
          content: dedent( `
      JavaScript mein **Objects** aur **Arrays** kaafi important hote hain.
      
      - **Object**: Ye key-value pairs ka collection hota hai. Aap objects ka use real-world items ko represent karne ke liye karte ho, jaise ek person, product ya car.
      - **Array**: Ye ek ordered collection hota hai jisme similar types ke elements store hote hain. Arrays index-based hote hain, yani pehla element index 0 pe hota hai.
      
          `),
          example: `const person = { name: "Alice", age: 25 }; // Object with name and age
      let fruits = ["apple", "banana"]; // Array of fruits
      console.log(person.name); // Accessing object property
      console.log(fruits[0]); // Accessing array element`
        },
        {
          name: "Asynchronous JavaScript",
          content: dedent(`
      Asynchronous JavaScript ka matlab hai ki aapka code background mein execute ho raha hota hai bina main thread ko block kiye. Ye useful hai jab aapko kuch time-consuming tasks, jaise API calls, delay, ya timers perform karne hote hain.
      
      **Tools for Asynchronous JS:**
      
      - **setTimeout**: Ye ek timer set karta hai jo ek function ko specific time ke baad execute karta hai.
      - **Promises**: Ye ek object hai jo ek async operation ko represent karta hai aur eventually result dega.
      - **async/await**: Ye modern way hai asynchronous code likhne ka, jisme code ko synchronous manner mein likha ja sakta hai.
      
          `),
          example: `async function loadData() {
        const res = await fetch("/api/data"); // Awaiting data fetching
        const data = await res.json();
        console.log(data); // Logging the fetched data
      }`
        },
        {
          name: "DOM Manipulation",
          content: dedent(`
      DOM ka matlab hai Document Object Model, jo HTML page ko JavaScript se control karne ki ability deta hai. 
      
      Aap DOM ke through elements ko select kar sakte ho, unka content modify kar sakte ho, ya naye elements create kar sakte ho.
      
          `),
          example: `const heading = document.getElementById("title");
      heading.innerText = "Hello JavaScript"; // Modifying the text of an element
      
      const btn = document.createElement("button");
      btn.textContent = "Click Me";
      document.body.appendChild(btn); // Appending the button to the body`
        },
        {
          name: "ES6+ Features",
          content: dedent(`
      ES6+ mein naye features aaye jo code ko concise aur readable banane mein madad karte hain.
      
      **Features:**
      
      - **Arrow Functions**: Shorthand way to define functions.
      - **let/const**: New variable declaration keywords.
      - **Template Strings**: String interpolation for easy string concatenation.
      - **Destructuring**: Assign values from arrays or objects directly to variables.
      - **Spread/Rest**: Spread operator to unpack values and Rest operator to collect them.
      
          `),
          example: `const user = { name: "Ravi", age: 22 };
      const { name } = user; // Object destructuring
      
      const greet = (n) => \`Hello \${n}\`; // Arrow function with template literals`
        },
        {
          name: "Error Handling and Debugging",
          content: dedent(`
      JavaScript mein errors ko handle karna zaroori hai taaki app crash na ho. 
      
      **Error Handling Tools:**
      
      - **try...catch**: Error handling mechanism to catch runtime errors.
      - **console.log()**: Used for debugging and logging messages.
      - **debugger**: Allows you to set breakpoints in code to debug it step by step.
      
          `),
          example: `try {
        let result = x + 1; // Trying to perform an operation
      } catch (error) {
        console.log("Error:", error.message); // Catching and logging the error message
      }`
        },
        {
          name: "JavaScript Best Practices",
          content: dedent(`
      Agar aap efficient aur maintainable code likhna chahte ho, toh kuch best practices follow karna zaroori hai:
      
      - **Use const** jab aapko variable ko change nahi karna ho.
      - **Always use ===** for strict equality check.
      - **Write small reusable functions** jo ek kaam karen.
      - **Handle errors properly** taaki app crash na ho.
      - **Add comments** jahan zarurat ho.
      
          `),
          example: `const name = "Amit";
      
      function greet(user) {
        if (!user) return "Guest"; // If no user, return "Guest"
        return \`Hello, \${user}\`; // Otherwise, greet the user
      }
      
      console.log(greet(name)); // Output: "Hello, Amit"`
        }
      ]
      
      
    },
    // Other courses like 'python' can be added here in a similar structure
  };
  
  export default courseDetails;
  