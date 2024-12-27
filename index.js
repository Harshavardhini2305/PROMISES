// normal function to Asynchronous by adding setTimeout function
//we gave different time soo it will execute in different times
// To perform line wise we use callback

function walkDog(callback) {
    setTimeout(() => {
        console.log("You walk like a Dog");
        callback(); // Ensure the callback is invoked
    }, 3000);

} 

function cleanKitchen(callback) {
    setTimeout(() => {
        console.log("You clean the Kitchen");
        callback(); // Ensure the callback is invoked
    }, 2500);
}

function takeOutTrash(callback) {
    setTimeout(() => {
        console.log("You take out the trash");
        callback(); // Ensure the callback is invoked
    }, 500);
}

// Chaining the tasks using callback
// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("You finished all the chores");
//         });
//     });
// });




// use promises instead of callback hell
// we dont need callback


function walkDog() {
   

    return new Promise((reslove , reject) => {
        setTimeout(() => {
            

            const dogwalked = true;

            if(dogwalked){
                reslove("You walk like a Dog");
            }else{
                reject("you didnt walk the dog")
            }
        }, 3000);

    });
}

function cleanKitchen() {
   

    return new Promise((reslove , reject) => {

        setTimeout(() => {

            const kitchenCleaned = true;

            if(kitchenCleaned){
                reslove("You clean the Kitchen");
            }
            else{
                reject("you didnt clean the kitchen");
            }
          
        }, 2500);


    });
}

function takeOutTrash() {
    
    return new Promise((reslove , reject) => {
        setTimeout(() => {


            const trashTakenOut  = true;

            if(trashTakenOut){
                reslove("You take out the trash");

            }else{
                reject("you didnt take the trash");
            }
            
        }, 500);


    });

}

// use method chaining

walkDog()
    .then(value => {
        console.log(value);
        return cleanKitchen();
    })
    .then(value => {
        console.log(value);
        return takeOutTrash();
    })
    .then(value => {
        console.log(value);
        console.log("You finished all the chores");
    })
    .catch(error => console.error(error));



