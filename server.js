const app = require("./app"); 
  
 //Handling Uncaught Exception 
 process.on("uncaught Exception", (err) => { 
   console.log(`Error ${err.message}`); 
   console.log(`Shuting down the server becuase of UnCaught Expression`); 
   process.exit(1); 
 }); 
  
 // const port = process.env.PORT 
 // is liye humne dot net istmaal kia hia aur port ka path dia tha usko 
  
 port =  4000; 
  
 // is main hum ne path (PORT) dia hai but path hum nee config.env main diya hai 
 const server = app.listen(port, () => { 
   console.log(`server is now working on on : ${port}`); 
 }); 
  
 //Unhandled promise rejection for ex: (if the server is crash becuase of the string that is added to connect databse) 
 process.on("unhandledRejection", (err) => { 
   console.log("Error", err.message); 
   console.log("Shutting down the server"); 
   server.close(() => { 
     process.exit(1); 
   }); 
 });