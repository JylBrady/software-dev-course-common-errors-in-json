
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",      //missing comma -  added missing comma - JSON requires commas between key/value pairs
  "checkOutDate": "2024-05-20",
  "guests": [
    {
     "name": "Alice Johnson",  // missing quotes - added quotes around key - JSON requires quotations around key names
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,               //value of undefined - changed to null - undefined is not a valid value in JSON
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]   // trailing comma after "parking" - removed trailing comma - trailing commas are not accepted in JSON
  }
}



// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
general knowledge of JSON syntax and Linter to verify

2️⃣ How did you confirm that your corrected JSON file was valid?
JSONLint

3️⃣ Which errors were the most difficult to spot? Why?

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
   VS code highlighting (and also the auto-input of closing punctuation) is very helpful in a JSON file.   I couldn't figure out how to leave this as JSON and also include my responses as comments within the code.

   JSONLint was easy to use and pointed out issues.
*/
