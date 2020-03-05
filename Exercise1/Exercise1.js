function validate() {
	var word = {word1:document.querySelector("#word1"), word2:document.querySelector("#word2")};
	let x1 = word1.value;
    let x2 = word2.value;

    if(x1.length < 8)
    {
        alert("Your password must by 8 characters or longer");
        return;
    }

    else if(x1 == x2)
    {
        alert("Your passwords match.");
        return
    }

    else
    {
        alert("Your passwords do not match.");
        return;
    }

}

function showPass() {
    var x = document.getElementById("word1");
    if(x.type ==="password")
        x.type = "text";
    else
        x.type = "password";


}