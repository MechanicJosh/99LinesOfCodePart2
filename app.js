// two loops, one  nested in the other
// first loop picks the friend, second loop runs the song lines

let friends = ['Amber', 'Anthony', 'Liv', 'Slone', 'Mark'];

function songLoop(){
    for (let f of friends){
        friendName = f;
        let myFriend = document.createElement('div');
        document.body.appendChild(myFriend);
        myFriend.className = 'friend';
        let myFriendH3 = document.createElement('h3');
        myFriend.appendChild(myFriendH3);
        myFriendH3.textContent = f;
        console.log(f);{
            for(let i = 99; i > 0; i--){
                let p = document.createElement('p');
                myFriend.appendChild(p);
                p.textContent = i + " lines of code in the file, " + i +  " lines of code; " + friendName + " strikes one out, clears it all out, " + (i-1) + " lines of code in the file"
            } 
        }  
    }
}

let button = document.createElement('button');
button.className = 'button';
let buttonTextNode = document.createTextNode('sing!');
button.appendChild(buttonTextNode);
document.body.appendChild(button);

button.addEventListener('click', function(){
    console.log('button works');
    songLoop();
});