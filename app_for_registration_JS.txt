// global variables 
// input 
const form = document.getElementById('userInput');
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const deleteUserBtn = document.querySelector('#deleteUsers');
// user output List 

const userList = document.querySelector('#userList');
const searchUser = document.querySelector('#searchUser');
loadEventListners();
function loadEventListners(){
    // Load Users from local storage 
    // Add user event 
    form.addEventListener('submit',addUser);
    // delete user event 
    // delete all user event 
    // filter users event 
}


// add user
function addUser(e){
    // prevent default behaviour of the form 
    e.preventDefault(); // this does not reload page
    // condition usr storage 
    if(firstName.value===''|| lastName.value ===''){
        alert('Insert FirstName and LastName');
    }else if(password.value ===''){
        alert('Insert Password!');
    }else if(email.value===''){
        alert('Add Email!');
    }else{
        alert('User Successfully added!!');
        // create list item element 
        const li = document.createElement('li');
        // add a clss to the li 
        li.className = 'collection-item avatar';
        li.setAttribute('id','new-user');
        // console.log(li);
        // create text content 
        const userIcon = document.createElement('i');
        userIcon.className = 'medium material-icons circle green';

        userIcon.innerHTML = 'account_circle';

        li.appendChild(userIcon);
        
        // user infor 
        const userInfo = document.createElement('ul');
        // add class to ul 
        userInfo.className = 'user-info';
        li.appendChild(userInfo);

        // user id 
        const userId = document.createElement('li');
        // addclass
        userId.className = 'user-id';
        // add text to li(user-id)
        userId.innerHTML = 'User Id';
        // append li (user id) element to li element 
        userInfo.appendChild(userId);
// add full name
        const userFullName = document.createElement('li');

        
         
        let fullName = `${firstName.value} ${lastName.value}`;

        userFullName.appendChild(document.createTextNode(`${fullName}`));
        userInfo.appendChild(userFullName);
        
        
        // add emial to userInfo

        const userEMail = document.createElement('li');

        
         
        // userEMail = `${firstName.value} ${email.value}`;

        userEMail.appendChild(document.createTextNode(`${email.value}`));


        userInfo.appendChild(userEMail);
        
        //delete icon 

        // create icon 

        // create a new link element 
        const link = document.createElement('a');

        link.className = 'secondary-content btn-floating btn-small waves-effect waves-light red delete-user';

        link.innerHTML= '<i class="material-icons">remove</i>';

        // append the link item to the li 

        li.appendChild(link);
        
        
        
        console.log(li);

        userList.appendChild(li);



    }
}
