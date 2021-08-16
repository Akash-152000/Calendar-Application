# Calendar-Application


### **STEP 1:**

Clone the repository  ```git clone https://github.com/Akash-152000/Calendar-Application ```


### **STEP 2:**

In here I have 2 folders 
```client``` and ```server ```

Step 2 is naviagating into client folder and installing the dependencies

```npm install ```

### **Step 3:**

Similar to step 2 to now navigate to server folder and ```npm install```

### **Step 4:**

In server\index.js
```
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "akash",
    database: "calendar",
});
```
Enter your mysql workbench's database password and database name

### **Step 5:**

Hard part is done, now navigate in client folder and ```npm start```


### **Step 6:**

similarly now navigate in server folder and ```npm run devStart```

# If you followed every step correctly, you could run the project, pay attention to step 4!!!
