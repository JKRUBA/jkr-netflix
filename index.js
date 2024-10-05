const loginBox = document.getElementById('login');
const contentBox = document.getElementById('head1');
function loginTabFun()
{
    event.preventDefault();
    loginBox.style.visibility="visible";
    contentBox.style.visibility="hidden";
  
}

function log() {
    var user = document.getElementById("typeEmailX").value;
    var pass = document.getElementById("typePasswordX").value;
    if(user == "Netflix" && pass == "netflixadmin123") {
        event.preventDefault();
        window.location.assign("homepage.html")
        return false;
    } else {
        alert("password is incorrect");
        return false;
        }
    }
    const cardContainer = document.getElementById('cardContainer');
    const scrollLBtn = document.getElementById('scrollLeft');
    const scrollRBtn = document.getElementById('scrollRight');
    
    const scrollAmt = 900; // Adjust scroll amount as needed
    
    scrollLBtn.addEventListener('click', () => {
        cardContainer.scrollBy({
            left: -scrollAmt,
            behavior: 'smooth'
        });
    });
    
    scrollRBtn.addEventListener('click', () => {
        cardContainer.scrollBy({
            left: scrollAmt,
            behavior: 'smooth'
        });
    });
     
