const fullName = "Ankita Patil";
//    012345 6 7891011

// 1. length → Returns string length.
const stringLength = fullName.length;
if (fullName.length > 0) {
  console.log("String length is greater than 0 ");
} else {
  console.log("String length is Not greater than 0 ");
}

// 2. toUpperCase() → Converts to uppercase.
console.log(fullName.toUpperCase(), " - String is in Upper Case");

// 3. toLowerCase() → Converts to lowercase.
console.log(fullName.toLowerCase(), " - String is in Lower Case");

// 4. trim() → Removes extra spaces.
const extraSpaceName = "   Ankita Patil     ";
console.log(extraSpaceName.trim(), "Remove extra space");

//Letter Start spaces remove
console.log(extraSpaceName.trimStart(), "Start space remove ");

//Letter End spaces remove
console.log(extraSpaceName.trimEnd(), "End space remove ");

// 5. charAt() → Returns character at index.
console.log(fullName.charAt(2), "Check cahractar on 2 index");

// 6. indexOf() → First occurrence of substring.
console.log(fullName.indexOf("t"), "Index of a char");
