function roll(){var e=document.getElementById("dice").value,t=document.getElementById("sides").value,d=document.getElementById("posNeg").value,l=0,n=document.getElementById("d20"),u="Roll "+e+"d"+t+" [",m=0;for(j=e;j>0;j--){var o=Math.floor(Math.random()*t)+1;m+=o,u+=o,u+=1==j?"]\n"+m:"",l=document.getElementById("mod").value,"+"==d?(m+=1*l,u+=" + "):"-"==d&&(m-=1*l,u+=" - ")}n.value=m,u+=l+" = "+m+"\n";var a=document.getElementById("results");a.value=u+a.value}function reset(){document.getElementById("sides").value=20,document.getElementById("mod"),document.getElementById("dice").value=1,document.getElementById("d20").value="",document.getElementById("results").value=""}function clearResults(){document.getElementById("results").value="",document.getElementById("d20").value=""}