function next() {
    var x = ["file:///Users/amirshami/Desktop/EECS448/eecs_448_lab03/Exercise2/pic1.jpg", 
            "file:///Users/amirshami/Desktop/EECS448/eecs_448_lab03/Exercise2/pic2.jpg", 
            "file:///Users/amirshami/Desktop/EECS448/eecs_448_lab03/Exercise2/pic3.jpg", 
            "file:///Users/amirshami/Desktop/EECS448/eecs_448_lab03/Exercise2/pic4.jpg", 
            "file:///Users/amirshami/Desktop/EECS448/eecs_448_lab03/Exercise2/pic5.jpg"];

    var y = document.getElementById("myCat").src;

    for(let i = 0; i < x.length; i++)
    {
        if(y == x[i])
        {
            if(i == 4)
            {
                y = x[0];
                document.getElementById("myCat").src = x[0];
                return;
            }
            y = x[i+1];
            document.getElementById("myCat").src = x[i+1];
            return
        }
    }
}

function previous() {
    var x = ["file:///Users/amirshami/Desktop/EECS448/eecs_448_lab03/Exercise2/pic1.jpg", 
            "file:///Users/amirshami/Desktop/EECS448/eecs_448_lab03/Exercise2/pic2.jpg", 
            "file:///Users/amirshami/Desktop/EECS448/eecs_448_lab03/Exercise2/pic3.jpg", 
            "file:///Users/amirshami/Desktop/EECS448/eecs_448_lab03/Exercise2/pic4.jpg", 
            "file:///Users/amirshami/Desktop/EECS448/eecs_448_lab03/Exercise2/pic5.jpg"];

    var y = document.getElementById("myCat").src;

    for(let i = 0; i < x.length; i++)
    {
        if(y == x[i])
        {
            if(i == 0)
            {
                y = x[4];
                document.getElementById("myCat").src = x[4];
                return;
            }
            y = x[i-1];
            document.getElementById("myCat").src = x[i-1];
            return
        }
    }
}