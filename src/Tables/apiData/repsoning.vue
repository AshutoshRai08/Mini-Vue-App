
    <template>
        <div>
            Hekllo

        </div>
        <ul id="list">
            <li v-for="(value, key, index) of user">
              {{ index }}. {{ key }}: {{ value }}
            </li>
          </ul>
          
         
    </template>


    <script setup lang="ts">
 var vm = new Vue({
            el: '#list',
            data: {
              user: {
                firstName: 'Mike',
                lastName: 'Woz',
                age: 30
              }
            }
          })
    // class SimilulateAutoCompleteIssue {
        

    

    //     constructor() {

    

    //         this.addressInput = "";

    

    //         this.arrayOfPromises = [];

    

    //         this.Max=0;
            

    

    //         this.addressAutoCompleteResults = {

    

    //             "1": ["10000 Main st", "10001 Willow ln", "10002 abc ln"],

    

    //             "12": ["12000 Cross st", "12001 River ln", "12002 pqr ln"],

    

    //             "123": ["12300 lender st", "12301 Happy ln", "12302 xyz ln"],

    

    //             "1234": ["12340 Seller st", "12341 Dev ln", "12342 def ln"],

    

    //             "12345": ["12345 Buyer st", "12345 Test ln", "12345 rst ln"]

    

    //         };

    

    //         for (let keyPressed = 1; keyPressed <= 5; ++keyPressed) {

    

    //             this.addressInput += keyPressed;

    

    //             let p = new Promise((res, rej) => {

    

    //                 console.log("User request sent: ", this.addressInput);

    

    //                 let randomTimeout = Math.round(Math.random() * 200);

    

    //                 setTimeout(res, randomTimeout, [this.addressInput]);
    //                 // console.log(randomTimeout,res,this.addressInput);
                    

    //                     // debugger

    //             });

    

    //             this.arrayOfPromises.push(p);

    

    //         }
    //     //   console.log(this.arrayOfPromises);
            

    

    //     }

    

    //     processPromises() {

    

    //         let self = this

    

    //         this.arrayOfPromises.reduce((max, curr, index) => {

    

    //            curr.then((params) => {
    //               console.log("Received response for", params[0],this.randomTimeout);
    //             //   console.log(params[0],params[1],this.addressInput,this.Max,params[0].length);
    //               if(params[0].length>this.Max){
    //               this.Max=params[0].length
    //               console.log("Displayed", this.addressAutoCompleteResults[params[0]]);}
    //            });  

    

    //         },this.arrayOfPromises["1"]);

    

    //     }
    // }

    // const fireAutoCompleteCalls = new SimilulateAutoCompleteIssue();

    // fireAutoCompleteCalls.processPromises();
    // const promises: Promise<number>[] = [
    //   Promise.resolve(1),
    //   Promise.resolve(2),
    //   Promise.resolve(3),
    // ];

    // Promise.all(promises)
    //   .then((results) => {
    //     console.log("All promises resolved:", results);
    //   })
    //   .catch((error) => console.error("Error:", error));

    // function fetchUserData(userId: number): Promise<{ name: string }> {
    // return new Promise((resolve, reject) => {
    //     if (userId === 1) {
    //     resolve({ name: "John" });
    //     } else {
    //     reject(new Error("User not found"));
    //     }
    // });
    // }

    // fetchUserData(1)
    // .then((user) => console.log(`Hello, ${user.name}!`))
    // .catch((error) => console.error("Error:", error));


//     function fetchUserPosts(userId: number): Promise<string[]> {
//   // Simulate fetching user posts
//   return Promise.resolve([`Post 1 by user ${userId}`, `Post 2 by user ${userId}`]);
// }

// fetchUserData(1)
//   .then((user) => fetchUserPosts(1))
//   .then((posts) => {
//     console.log(`User posts: ${posts.join(", ")}`);
//   })
//   .catch((error) => console.error("Error:", error));

interface User {
  id: number;
  name: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function fetchUserData(userId: number): Promise<User> {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error fetching user data for user ${userId}`);
      }console.log("logging data");
      return response.json();
      
      
    });
}

function fetchUserPosts(userId: number): Promise<Post[]> {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error fetching posts for user ${userId}`);
      }
      return response.json();
    });
}

// Usage
fetchUserData(2)
  .then((user) => {
    console.log(`User: ${user.name},${user.id}`);
    return fetchUserPosts(user.id);
  })
  .then((posts) => {
    console.log(`User's Posts:`);
    posts.forEach((post) => {
      console.log(`- ${post.title}`);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

  
  const promises: Promise<number>[] = [
  new Promise((resolve) => setTimeout(() => resolve(1), 500)),
  new Promise((resolve) => setTimeout(() => resolve(2), 500)),
];

Promise.race(promises)
  .then((result) => {
    console.log("First promise resolved:", result);
  })
  .catch((error) => console.error("Error:", error));

</script>