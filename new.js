// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 300, "resolved");
//   });

//   const promise2 = 55;

//   const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "resolved");
//   });


//   Promise.all([promise1,promise2,promise3]) 
//    .then((values) => {
//     console.log(values);
//   })
//     .catch((err) => {
//     console.log(err);
//   });


// const pro1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("one"), 1000);
// });

// const pro2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("two"), 2000);
// });

// const pro3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("rejected"), 3000);
// });

// Promise.all([pro1, pro2, pro3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const SlowlyDone = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, "Done slowly");
//   }); 
  
//   const QuicklyDone = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "Done quickly");
//   }); 
  
//   const Rejection = new Promise((resolve, reject) => {
//     setTimeout(reject, 900, "Rejected"); 
//   });
  
//   Promise.any([SlowlyDone, QuicklyDone, Rejection])
//     .then((value) => {
//       console.log(value);

//     })
//     .catch((err) => {
//       console.log(err);
//     });


// function divide(a, b) {
//   try {
//       if (b === 0) {
//           throw new Error("Division by zero is not allowed.");
//       }
//       return a / b;
//   } catch (error) {
//       console.error("Error:", error.message);
//   } finally {
//       console.log("Division attempt finished.");
//   }
// }

// divide(10, 2);
// divide(10, 0);



// function outer(){
//    let user= "kaustubh";
//   //  console.log(b1);
   
//    function inner(){
//     console.log(user);
//     // let b1= hello;
//    }
//    function brother(){
//     let b1="hello";
//    }
//    inner();
// }
// outer();