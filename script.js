const reviews = [
    { id: 1,
     name: "susan smith",
     job: "web developer",
     img: 
     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
     text: 
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, iste pariatur officiis exercitationem laudantium possimus excepturi, odit aut iure a autem nulla non. Consequuntur architecto sapiente maiores recusandae doloremque totam?",
   }, 
    { id: 2,
     name: "john mayer",
     job: "web designer",
     img: 
     "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
     text: 
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, iste pariatur officiis exercitationem laudantium possimus excepturi, odit aut iure a autem nulla non. Consequuntur architecto sapiente maiores recusandae doloremque totam?",
   }, 
   { id: 3,
     name: "david hahn",
     job: "product designer",
     img: 
     "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
     text: 
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, iste pariatur officiis exercitationem laudantium possimus excepturi, odit aut iure a autem nulla non. Consequuntur architecto sapiente maiores recusandae doloremque totam?",
   }, 
   { id: 4,
     name: "gayle hower",
     job: "social media manager",
     img: 
     "https://images.unsplash.com/photo-1594270410221-e6a33cbc6fb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
     text: 
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, iste pariatur officiis exercitationem laudantium possimus excepturi, odit aut iure a autem nulla non. Consequuntur architecto sapiente maiores recusandae doloremque totam?",
   } 
   ]
   
   // Select Items
   const img = document.querySelector('.img');
   const author = document.querySelector('#author');
   const job = document.querySelector('#job');
   const info = document.querySelector('#info');
   
   const prevBtn = document.querySelector('.prev');
   const nextBtn = document.querySelector('.next');
   
   //set starting item
   let currentItem = 0;
   
   // load initial item
   window.addEventListener('DOMContentLoaded', function() {
     showPerson();
   });
   
   // show person based on item
   
   function showPerson(person) {
     const item = reviews[currentItem];
     img.src = item.img
     author.textContent = item.name;
     job.textContent = item.job;
     info.textContent = item.text;
   }
   
   // show next person
   nextBtn.addEventListener('click', function() {
     currentItem++;
     if(currentItem > reviews.length -1) {
       currentItem = 0;
     }
     showPerson();
   })
   
   //show prev person
   
   prevBtn.addEventListener('click', function() {
     currentItem--;
     if(currentItem < 0) {
       currentItem = reviews.length -1;
     }
     showPerson();
   })