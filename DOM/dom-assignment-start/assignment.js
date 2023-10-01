//title manipulation done
title = document.querySelector('title')
title.text = "Hi there"
title.innerHTML = "New Title"


//h1 element manipulation
h1 = document.getElementsByTagName("h1")
h1[0].innerHTML = "Assignment - Solved!!!!!!!!!!!!!"

newH1 = document.querySelector("h1")
newH1.innerHTML = "Assignment - Solved!"


//background color
document.getElementById("task-1").style.backgroundColor = "black"