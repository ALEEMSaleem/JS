
// object is a collection of key value pairs

student ={                         // object have a name and a value
     name : "Hammad",
     accountID : 12345,
     accountEmail : "hc@hc.com",
     collage : "st.pettersburg collage",
     
};
console.log(student);   // print the object
student.collage = "rutgers collage",  // change the value of collage
console.log(student.collage);

student.accountID = student.accountID.toString(); // convert accountID to string
console.log(student.accountID);
console.log(typeof(student.accountID));

console.log(student); // print the object

student.accountID = Number(student.accountID); // convert name to number
console.log(student.accountID);
console.log(typeof(student.accountID));

console.log(student); // print the object

