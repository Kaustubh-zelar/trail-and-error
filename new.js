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



fetch('https://example.com/api/endpoint', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-token-here'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
