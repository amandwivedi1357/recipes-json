const signupBtn = document.querySelector(".signupBtn")
const loginBtn = document.querySelector(".LoginBtn")
const moveBtn = document.querySelector(".moveBtn")
const signup = document.querySelector(".signup")
const login = document.querySelector(".login")

loginBtn.addEventListener("click",()=>{
    moveBtn.classList.add("rightBtn")
    login.classList.add("loginForm")
    signup.classList.remove("signupForm")
    moveBtn.innerHTML="Login"
})
signupBtn.addEventListener("click",()=>{
    moveBtn.classList.remove("rightBtn")
    login.classList.remove("loginForm")
    signup.classList.add("signupForm")
    moveBtn.innerHTML="Signup"

})


function loginn(event) {
    event.preventDefault(); 
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    
    if (email === "eve.holt@reqres.in") {
      
      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => {
          if (response.ok) {
            
            window.location.href = "/homepage.html";
          } else {
           
            alert("Login failed");
          }
        })
        .catch((error) => {
          console.error(error);
          alert("An error occurred while logging in");
        });
    } else {
      
      fetch("http://localhost:3000/users?email=" + email)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0 && data[0].password === password) {
            
            alert("Login successful");
  
            localStorage.setItem("loggedIn",true)
            window.location.href = "/homepage.html";
          } else {
            localStorage.setItem("loggedIn",false)
            alert("Login failed");
          }
        })
        .catch((error) => {
          console.error(error);
          alert("An error occurred while logging in");
        });
    }
  }
  
 
  document.querySelector(".login").addEventListener("submit", login);
  

 async function Signupp(){
    
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("useremail").value
    const password = document.getElementById("userpassword").value


    const data_to_send = {
        username,email,password
    }
    let res = await fetch(`http://localhost:3000/users`,{
        method:"POST",
            body:JSON.stringify(data_to_send),
            headers:{
                "Content-Type":"application/json"
            }
        
    })
    let data = await res.json();
    console.log(data)

  }