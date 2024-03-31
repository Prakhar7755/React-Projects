Certainly! The **Date object** in JavaScript provides several methods for handling dates and times. Let's explore some of the important ones:

1. **`new Date()`**: The constructor creates a date object with the current date and time.

   - Example:
     ```javascript
     const currentDate = new Date();
     ```

2. **`getFullYear()`**: Returns the year as a four-digit number (yyyy).

   - Example:
     ```javascript
     const d = new Date("2021-03-25");
     const year = d.getFullYear(); // 2021
     ```

3. **`getMonth()`**: Returns the month as a number (0-11). January is month number 0, February is 1, and so on.

   - Example:
     ```javascript
     const d = new Date("2021-03-25");
     const month = d.getMonth(); // 2 (March)
     ```

4. **`getDate()`**: Returns the day of the month as a number (1-31).

   - Example:
     ```javascript
     const d = new Date("2021-03-25");
     const day = d.getDate(); // 25
     ```

5. **`getHours()`**: Returns the hours of the day as a number (0-23).

   - Example:
     ```javascript
     const d = new Date("2021-03-25");
     const hours = d.getHours(); // 0 (midnight)
     ```

6. **`getMinutes()`**: Returns the minutes of the hour as a number (0-59).

   - Example:
     ```javascript
     const d = new Date("2021-03-25");
     const minutes = d.getMinutes(); // 0
     ```

7. **`getSeconds()`**: Returns the seconds of the minute as a number (0-59).

   - Example:
     ```javascript
     const d = new Date("2021-03-25");
     const seconds = d.getSeconds(); // 0
     ```

8. **`getMilliseconds()`**: Returns the milliseconds of the second as a number (0-999).

   - Example:
     ```javascript
     const d = new Date("2021-03-25");
     const milliseconds = d.getMilliseconds(); // 0
     ```

9. **`getTime()`**: Returns the time in milliseconds since January 1, 1970 (Unix timestamp).
   - Example:
     ```javascript
     const d = new Date("2021-03-25");
     const timestamp = d.getTime(); // 1616630400000
     ```

Remember that these methods return information from existing date objects, and the time in a date object is **not** the same as the current time. Also, avoid using the deprecated method `getYear()`¹².
