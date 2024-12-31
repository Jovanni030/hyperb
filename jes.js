

var can = document.getElementById("cave");
let ctx = can.getContext("2d")
let canx = can.width;
let mix = canx/2;
let cany = can.height;
let miy = cany/2;

var mep = `0 
1 1 1 1 
2 2 2 2 2 2 2 2 
2 2 2 2 

3 7 3 3 3 3 3 3 3 3 
3 3 3 5 3 5 3 3 3 3 
3 6 3 3 3 3 3 7 

3 3 3 7 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 5 
3 3 5 3 3 5 3 3 3 3 
3 3 3 3 3 3 3 6 3 7 
7 3 3 3 3 3 3 3 3 3 
3 7 3 3 

0 4 4 4 4 4 7 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 5 4 4 4 5 4 4 4 5 4 4 5 4 4 
4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 6 4 4 4 4 7 6 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 7 4 4 4 4 4 

7 4 4 7 7 4 4 7 4 7 4 4 7 7 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 5 4 4 4 4 4 5 5 4 
4 5 4 4 4 5 5 5 4 4 5 4 4 4 5 5 5 5 4 4 
5 5 5 5 4 4 5 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 6 4 4 4 4 4 4 4 4 4 4 4 
4 4 6 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 7 7 4 4 7 4 7 4 4 7 7 4 4 

5 7 7 7 7 7 7 5 7 5 7 7 7 7 7 7 5 7 7 7 7 5 7 7 7 7 7 7 5 7 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 6 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 7 5 7 7 7 7 7 7 5 7 7 7 7 5 7 7 7 7 7 7 5 7 5 7 7 7 7 7 7 

5 5 5 5 5 7 7 5 7 5 7 7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 7 5 7 5 7 7 5 5 5 5 5 5 5 5 5 7 7 5 5 5 5 5 5 5 5 5 7 7 5 7 5 7 7 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 7 7 5 7 5 7 7 5 5 5 5 5 5 5 5 5 7 7 5 5 5 5 5 5 5 5 5 7 7 5 7 5 7 7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 7 5 7 5 7 7 5 5 5 5 

5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 `

var map = mep.split(/[\s\n]+/)


var plaes = []
for(ijk=0; ijk<7285; ijk++){
    plaes[ijk] = {
        iden: ijk,
        neibs: [],
        pre: null,
        conten: map[ijk],
        tip: null, 
        wali: 0,
        obect: nun
    }
    if(plaes[ijk].conten == 5 || plaes[ijk].conten == 6 || plaes[ijk].conten == 7){
        plaes[ijk].wali=1
    }
    if(ijk == 411){
        plaes[ijk].obect = kay;
    }
    if(ijk == 94 || ijk == 95 || ijk == 222){
        plaes[ijk].wali=0
    }
    //console.log(plaes[ijk])
}
plaes[100000] = {
    iden: 100000,
    neibs: [plaes[100000], plaes[100000], plaes[100000], plaes[100000]],
    pre: null,
    conten: 5,
    tip: null, 
    wali: 1,
    obect: nun
}

var lk = plaes[5]
lk.obect = lonk
lk.wali = 1

var boz = plaes[109]
boz.obect = pringe
boz.wali = 0

var naw;
var ur, 
    dowr, 
    lefr, 
    righr;


document.addEventListener('keydown', function(){
    if(event.code === 'ArrowUp'){
        up()
        upun()
    }else if(event.code === 'ArrowDown'){
        down()
        downun()
    }
    else if(event.code === 'ArrowLeft'){
        left()
        leftun()
    }
    else if(event.code === 'ArrowRight'){
        right()
        rightun()
    }

    if(event.code === 'KeyZ'){
        chuz()
    }
})




function lo(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canx, cany)
    ctx.fillStyle = "black";
    rend(plaes[0], plaes[3], 0);
    naw = plaes[0];

}


var chank = 1
var mob = true
function up(){

    if(mob==false){return}

    if(Math.random()>chank && ur.obect != pringe){
        atk(Math.floor(Math.random()*2))
        chank=1
        return
    }else{
        chank *= .995
    }

    if(ur.wali == 0){
        let pl = ur
        rend(ur, naw, 0);
        
    }else{
        //alert("nei")
    }
}
function down(){
    if(mob==false){return}
    if(Math.random()>chank && dowr.obect != pringe){
        atk(Math.floor(Math.random()*2))
        chank=1
        return
    }else{
        chank *= .995
    }

    if(dowr.wali == 0){
        let pl=dowr
        rend(dowr, naw, 2);
        
    }else{
        //alert("nei")
    }
}
function left(){
    if(mob==false){return}
    if(Math.random()>chank && lefr.obect != pringe){
        atk(Math.floor(Math.random()*2))
        chank=1
        return
    }else{
        chank *= .995
    }

    if(lefr.wali == 0){
        let pl=lefr
        rend(lefr, naw, 1);
        
    }else{
        //alert("nei")
    }
}
function right(){
    if(mob==false){return}
    if(Math.random()>chank && righr.obect != pringe){
        atk(Math.floor(Math.random()*2))
        chank=1
        return
    }else{
        chank *= .995
    }

    if(righr.wali == 0){
        let pl=righr
        rend(righr, naw, 3);
        
    }else{
        //alert("nei")
    }
}






var unos=[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var doses=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var treses=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var coatroses=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var fil=[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var fili=[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var tot = 4

function zer(){
    for(i=0; i<10; i++){
        for(p=0; p<unos[i]; p++){
            unos[i+1]+=1
            doses[i+1]+=2
            tot+=3
        }
        for(p=0; p<doses[i]; p++){
            doses[i+1]+=1
            treses[i+1]+=1
            tot+=2
        }
        for(p=0; p<treses[i]; p++){
            unos[i+1]+=1
            doses[i+1]+=1
            coatroses[i+1]+=0.5
            tot+=2.5
        }
        for(p=0; p<coatroses[i]; p++){
            doses[i+1]+=2
            2
        }
        fil[i+1]=unos[i+1]+doses[i+1]+treses[i+1]+coatroses[i+1]
        fili[i+1]=fili[i]+fil[i+1]

    }
    /*
    console.log(unos)
    console.log(doses)
    console.log(treses)
    console.log(coatroses)
  
    console.log(tot)
    */  console.log(fil)
    console.log(fili)
}


zer()




plaes[0].neibs = [plaes[3], plaes[4], plaes[1], plaes[2]]

plaes[1].tip = 0

plaes[2].tip = 0

plaes[3].tip = 0

plaes[4].tip = 0

plaes[1].neibs = [plaes[0], plaes[16], plaes[5], plaes[6]]
plaes[16].neibs[0] = plaes[1]
plaes[16].tip = 2
plaes[5].neibs[0] = plaes[1]
plaes[5].tip = 0
plaes[6].neibs[0] = plaes[1]
plaes[6].tip = 1

plaes[2].neibs = [plaes[0], plaes[7], plaes[8], plaes[9]]
plaes[7].neibs[0] = plaes[2]
plaes[7].tip = 2
plaes[8].neibs[0] = plaes[2]
plaes[8].tip = 0
plaes[9].neibs[0] = plaes[2]
plaes[9].tip = 1

plaes[3].neibs = [plaes[0], plaes[10], plaes[11], plaes[12]]
plaes[10].neibs[0] = plaes[3]
plaes[10].tip = 2
plaes[11].neibs[0] = plaes[3]
plaes[11].tip = 0
plaes[12].neibs[0] = plaes[3]
plaes[12].tip = 1

plaes[4].neibs = [plaes[0], plaes[13], plaes[14], plaes[15]]
plaes[13].neibs[0] = plaes[4]
plaes[13].tip = 2
plaes[14].neibs[0] = plaes[4]
plaes[14].tip = 0
plaes[15].neibs[0] = plaes[4]
plaes[15].tip = 1

/** 
console.log(plaes[1].iden)
console.log(plaes[1].neibs)
console.log(plaes[2].iden)
console.log(plaes[2].neibs)
console.log(plaes[3].iden)
console.log(plaes[3].neibs)
console.log(plaes[4].iden)
console.log(plaes[4].neibs)
*/

for(i=0; i<6; i++){


    var cuades1=[prim, sec, ter, cuar, qin, seg]

    plaes[fili[i]+1].neibs[1] = plaes[fili[i+2]]
    plaes[fili[i+2]].neibs[0] = plaes[fili[i]+1]
    plaes[fili[i+2]].tip = 2

    plaes[fili[i]+1].neibs[2] = plaes[fili[i+1]+1]
    plaes[fili[i+1]+1].neibs[0] = plaes[fili[i]+1]
    plaes[fili[i+1]+1].tip = 0

    plaes[fili[i]+1].neibs[3] = plaes[fili[i+1]+2]
    plaes[fili[i+1]+2].neibs[0] = plaes[fili[i]+1]
    plaes[fili[i+1]+2].tip = 1

    //console.log(plaes[fili[i]+1].iden)
    //console.log(plaes[fili[i]+1].neibs)

    for(o=fili[i]+2; o<fili[i+1]+1; o++){
        cuades1[plaes[o].tip]()
        //console.log(plaes[o].iden)
        //console.log(plaes[o].neibs)
    }
}
for(o=fili[6]+1; o<fili[7]+1; o++){
    for(xz=0; xz<4; xz++){
        if(plaes[o].neibs[xz]==null){
            plaes[o].neibs[xz] = plaes[100000]
        }
    }
    //console.log(plaes[o].iden)
    //console.log(plaes[o].neibs)
}
function prim(){
    plaes[o].neibs[1] = plaes[plaes[o-1].neibs[3].iden+1]
    plaes[o].neibs[1].neibs[0] = plaes[o]
    plaes[o].neibs[1].tip = 2

    plaes[o].neibs[2] = plaes[plaes[o].neibs[1].iden+1]
    plaes[o].neibs[2].neibs[0] = plaes[o]
    plaes[o].neibs[2].tip = 0

    plaes[o].neibs[3] = plaes[plaes[o].neibs[2].iden+1]
    plaes[o].neibs[3].neibs[0] = plaes[o]
    plaes[o].neibs[3].tip = 1
}
function sec(){
    plaes[o].neibs[1] = plaes[plaes[o-1].neibs[3].iden+1]
    plaes[o].neibs[1].neibs[0] = plaes[o]
    plaes[o].neibs[1].tip = 2

    plaes[o].neibs[2] = plaes[plaes[o].neibs[1].iden+1]
    plaes[o].neibs[2].neibs[0] = plaes[o]
    plaes[o].neibs[2].tip = 3

    plaes[o].neibs[3] = plaes[plaes[o].iden+1]
}
function ter(){
    plaes[o].neibs[1] = plaes[plaes[o].iden-1]

    plaes[o].neibs[2] = plaes[plaes[o-1].neibs[2].iden+1]
    plaes[o].neibs[2].neibs[0] = plaes[o]
    plaes[o].neibs[2].tip = 4

    plaes[o].neibs[3] = plaes[plaes[o].neibs[2].iden+1]
    plaes[o].neibs[3].neibs[0] = plaes[o]
    plaes[o].neibs[3].tip = 1
}
function cuar(){
    plaes[o].neibs[1] = plaes[plaes[o-1].neibs[3].iden+1]
    plaes[o].neibs[1].neibs[0] = plaes[o]
    plaes[o].neibs[1].tip = 2

    plaes[o].neibs[2] = plaes[plaes[o].neibs[1].iden+1]
    plaes[o].neibs[2].neibs[0] = plaes[o]
    plaes[o].neibs[2].tip = 0

    plaes[o].neibs[3] = plaes[plaes[o].neibs[2].iden+1]
    plaes[o].neibs[3].neibs[1] = plaes[o]
    plaes[o].neibs[3].tip = 5
}

function qin(){
    plaes[o].neibs[1] = plaes[plaes[o-1].neibs[3].iden]
    plaes[o].neibs[1].neibs[0] = plaes[o]
    plaes[o].neibs[1].tip = 5

    plaes[o].neibs[2] = plaes[plaes[o].neibs[1].iden+1]
    plaes[o].neibs[2].neibs[0] = plaes[o]
    plaes[o].neibs[2].tip = 0

    plaes[o].neibs[3] = plaes[plaes[o].neibs[2].iden+1]
    plaes[o].neibs[3].neibs[0] = plaes[o]
    plaes[o].neibs[3].tip = 1
}

function seg(){

    plaes[o].neibs[2] = plaes[plaes[o-1].neibs[3].iden+1]
    plaes[o].neibs[2].neibs[0] = plaes[o]
    plaes[o].neibs[2].tip = 2

    plaes[o].neibs[3] = plaes[plaes[o].neibs[2].iden+1]
    plaes[o].neibs[3].neibs[0] = plaes[o]
    plaes[o].neibs[3].tip = 1
}


var sqs = []
for(hc=0; hc<45; hc++){
    sqs[hc]=[]
}
for(i=0; i<45; i++){
    for(c=0; c<8; c++){
        sqs[i][c] = new Image
        sqs[i][c].src = 'tss/'+i+''+c+'.PNG'
        //console.log(sqs[i][c])
    }
}

var obs = []
for(hc=0; hc<17; hc++){
    obs[hc]=[]
}
for(i=0; i<17; i++){
    obs[i][0] = new Image
    obs[i][0].src = 'tss/'+i+''+'a.PNG'
    //console.log(sqs[i][c])
    obs[i][1] = new Image
    obs[i][1].src = 'tss/'+i+''+'b.PNG'

    obs[i][2] = new Image
    obs[i][2].src = 'tss/'+i+''+'c.PNG'
}


var taman = 1000

function rend(o, prz, d){


    for(k=0; k<4; k++){
        if(prz==o.neibs[k]){

            dowr = o.neibs[(k+d)%4]

            lefr = o.neibs[(k+d+1)%4]

            ur = o.neibs[(k+d+2)%4]

            righr = o.neibs[(k+d+3)%4]

            naw = o

            //console.log(ur)
            //console.log(righr)
            //console.log(dowr)
            //console.log(lefr)
        }
    }




    
    ctx.drawImage(sqs[0][o.conten], 10, 10, taman, taman)
    o.obect(0)

    ctx.drawImage(sqs[1][ur.conten], 10, 10, taman, taman)
    ur.obect(1)
    ctx.drawImage(sqs[2][righr.conten], 10, 10, taman, taman)
    righr.obect(2)
    ctx.drawImage(sqs[3][dowr.conten], 10, 10, taman, taman)
    dowr.obect(3)
    ctx.drawImage(sqs[4][lefr.conten], 10, 10, taman, taman)
    lefr.obect(4)

    for(k=0; k<4; k++){
        if(o == ur.neibs[k]){
            ctx.drawImage(sqs[16][ur.neibs[(k+1)%4].conten], 10, 10, taman, taman)
            ur.neibs[(k+1)%4].obect(16)

            for(l=0; l<4; l++){
                if(ur == ur.neibs[(k+1)%4].neibs[l]){
                    ctx.drawImage(sqs[42][ur.neibs[(k+1)%4].neibs[(l+2)%4].conten], 10, 10, taman, taman)
                    
                    ctx.drawImage(sqs[43][ur.neibs[(k+1)%4].neibs[(l+3)%4].conten], 10, 10, taman, taman)
                }
            }

            ctx.drawImage(sqs[5][ur.neibs[(k+2)%4].conten], 10, 10, taman, taman)
            ur.neibs[(k+2)%4].obect(5)

            for(l=0; l<4; l++){
                if(ur == ur.neibs[(k+2)%4].neibs[l]){
                    ctx.drawImage(sqs[44][ur.neibs[(k+2)%4].neibs[(l+1)%4].conten], 10, 10, taman, taman)
                    ctx.drawImage(sqs[17][ur.neibs[(k+2)%4].neibs[(l+2)%4].conten], 10, 10, taman, taman)
                    ctx.drawImage(sqs[18][ur.neibs[(k+2)%4].neibs[(l+3)%4].conten], 10, 10, taman, taman)
                }
            }

            ctx.drawImage(sqs[6][ur.neibs[(k+3)%4].conten], 10, 10, taman, taman)
            ur.neibs[(k+3)%4].obect(6)

            for(l=0; l<4; l++){
                if(ur == ur.neibs[(k+3)%4].neibs[l]){
                    ctx.drawImage(sqs[19][ur.neibs[(k+3)%4].neibs[(l+1)%4].conten], 10, 10, taman, taman)
                    ctx.drawImage(sqs[20][ur.neibs[(k+3)%4].neibs[(l+2)%4].conten], 10, 10, taman, taman)
                }
            }

        }
    }


    for(k=0; k<4; k++){
        if(o == righr.neibs[k]){
            ctx.drawImage(sqs[7][righr.neibs[(k+1)%4].conten], 10, 10, taman, taman)
            righr.neibs[(k+1)%4].obect(7)

            for(l=0; l<4; l++){
                if(righr == righr.neibs[(k+1)%4].neibs[l]){
                    ctx.drawImage(sqs[21][righr.neibs[(k+1)%4].neibs[(l+2)%4].conten], 10, 10, taman, taman)
                    ctx.drawImage(sqs[22][righr.neibs[(k+1)%4].neibs[(l+3)%4].conten], 10, 10, taman, taman)
                }
            }

            ctx.drawImage(sqs[8][righr.neibs[(k+2)%4].conten], 10, 10, taman, taman)
            righr.neibs[(k+2)%4].obect(8)

            for(l=0; l<4; l++){
                if(righr == righr.neibs[(k+2)%4].neibs[l]){
                    ctx.drawImage(sqs[23][righr.neibs[(k+2)%4].neibs[(l+1)%4].conten], 10, 10, taman, taman)
                    ctx.drawImage(sqs[24][righr.neibs[(k+2)%4].neibs[(l+2)%4].conten], 10, 10, taman, taman)
                    ctx.drawImage(sqs[25][righr.neibs[(k+2)%4].neibs[(l+3)%4].conten], 10, 10, taman, taman)
                }
            }

            ctx.drawImage(sqs[9][righr.neibs[(k+3)%4].conten], 10, 10, taman, taman)
            righr.neibs[(k+3)%4].obect(9)

            for(l=0; l<4; l++){
                if(righr == righr.neibs[(k+3)%4].neibs[l]){
                    ctx.drawImage(sqs[26][righr.neibs[(k+3)%4].neibs[(l+1)%4].conten], 10, 10, taman, taman)
                    ctx.drawImage(sqs[27][righr.neibs[(k+3)%4].neibs[(l+2)%4].conten], 10, 10, taman, taman)
                }
            }
        }
    }


    for(k=0; k<4; k++){
        if(o == dowr.neibs[k]){
            ctx.drawImage(sqs[10][dowr.neibs[(k+1)%4].conten], 10, 10, taman, taman)
            dowr.neibs[(k+1)%4].obect(10)

            for(l=0; l<4; l++){
                if(dowr == dowr.neibs[(k+1)%4].neibs[l]){
                    ctx.drawImage(sqs[28][dowr.neibs[(k+1)%4].neibs[(l+2)%4].conten], 10, 10, taman, taman)
                    ctx.drawImage(sqs[29][dowr.neibs[(k+1)%4].neibs[(l+3)%4].conten], 10, 10, taman, taman)
                }
            }

            ctx.drawImage(sqs[11][dowr.neibs[(k+2)%4].conten], 10, 10, taman, taman)
            dowr.neibs[(k+2)%4].obect(11)
            
            for(l=0; l<4; l++){
                if(dowr == dowr.neibs[(k+2)%4].neibs[l]){
                    ctx.drawImage(sqs[30][dowr.neibs[(k+2)%4].neibs[(l+1)%4].conten], 10, 10, taman, taman)
                    ctx.drawImage(sqs[31][dowr.neibs[(k+2)%4].neibs[(l+2)%4].conten], 10, 10, taman, taman)
                    ctx.drawImage(sqs[32][dowr.neibs[(k+2)%4].neibs[(l+3)%4].conten], 10, 10, taman, taman)
                }
            }

            ctx.drawImage(sqs[12][dowr.neibs[(k+3)%4].conten], 10, 10, taman, taman)
            dowr.neibs[(k+3)%4].obect(12)

            for(l=0; l<4; l++){
                if(dowr == dowr.neibs[(k+3)%4].neibs[l]){
                    ctx.drawImage(sqs[33][dowr.neibs[(k+3)%4].neibs[(l+1)%4].conten], 10, 10, taman, taman)
                    ctx.drawImage(sqs[34][dowr.neibs[(k+3)%4].neibs[(l+2)%4].conten], 10, 10, taman, taman)
                }
            }
        }
    }


    for(k=0; k<4; k++){
        if(o == lefr.neibs[k]){
            ctx.drawImage(sqs[13][lefr.neibs[(k+1)%4].conten], 10, 10, taman, taman)
            lefr.neibs[(k+1)%4].obect(13)
            
            for(l=0; l<4; l++){
                if(lefr == lefr.neibs[(k+1)%4].neibs[l]){
                    ctx.drawImage(sqs[35][lefr.neibs[(k+1)%4].neibs[(l+2)%4].conten], 10, 10, taman, taman)
                    ctx.drawImage(sqs[36][lefr.neibs[(k+1)%4].neibs[(l+3)%4].conten], 10, 10, taman, taman)
                }
            }

            ctx.drawImage(sqs[14][lefr.neibs[(k+2)%4].conten], 10, 10, taman, taman)
            lefr.neibs[(k+2)%4].obect(14)
                        
            for(l=0; l<4; l++){
                if(lefr == lefr.neibs[(k+2)%4].neibs[l]){
                    ctx.drawImage(sqs[37][lefr.neibs[(k+2)%4].neibs[(l+1)%4].conten], 10, 10, taman, taman)
                    ctx.drawImage(sqs[38][lefr.neibs[(k+2)%4].neibs[(l+2)%4].conten], 10, 10, taman, taman)
                    ctx.drawImage(sqs[39][lefr.neibs[(k+2)%4].neibs[(l+3)%4].conten], 10, 10, taman, taman)
                }
            }

            ctx.drawImage(sqs[15][lefr.neibs[(k+3)%4].conten], 10, 10, taman, taman)
            lefr.neibs[(k+3)%4].obect(15)
            
            for(l=0; l<4; l++){
                if(lefr == lefr.neibs[(k+3)%4].neibs[l]){
                    ctx.drawImage(sqs[40][lefr.neibs[(k+3)%4].neibs[(l+1)%4].conten], 10, 10, taman, taman)
                    ctx.drawImage(sqs[41][lefr.neibs[(k+3)%4].neibs[(l+2)%4].conten], 10, 10, taman, taman)
                }
            }
        }
    }
}


function nun(){
    return
}

function lonk(wc){
    ctx.drawImage(obs[wc][0], 10, 10, taman, taman)
}
function kay(wc){
    if(wc==0){
        naw.obect = nun
        lk.obect = nun
        lk.wali = 0
        return
    }
    ctx.drawImage(obs[wc][1], 10, 10, taman, taman)
}

function pringe(wc){
    if(wc==0){
        ctx.drawImage(obs[wc][2], 10, 10, taman, taman)
        naw.obect = nun
        atk(3)

        return
    }
    ctx.drawImage(obs[wc][2], 10, 10, taman, taman)
}

var enemnau 
function atk(ww){
    console.log(ww)
    enemnau = ww
    mob= false
    setTimeout(function(){
        cutblak()
    }, 1500)
    
}

function cutblak(){
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, canx, cany)
    setTimeout(function(){
        ctx.fillRect(0, 0, canx, cany)
        setTimeout(function(){
            enem()
        }, 500)
    }, 500)
}
var fi = [new Image, new Image, new Image, new Image]
fi[0].src = 'fisgrin.png'
fi[1].src = 'fisred.png'
fi[3].src = "prinman.png"

var choi = false
var mofat = false

function enem(){
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(0, 0, canx, cany)
    setTimeout(function(){
        ctx.drawImage(fi[enemnau], 10, 10, taman, taman)
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(0, 0, canx, cany)
        setTimeout(function(){
            ctx.fillStyle = "rgba(0, 0, 0, 1)";
            ctx.fillRect(0, 0, canx, cany)
            ctx.drawImage(fi[enemnau], 10, 10, taman, taman)
            if(enemnau<3){
                setTimeout(function(){
                    nawe =  Math.floor(7*Math.random())
                    makbuts()
                    choi=true
                }, 500)
            }else{
                setTimeout(function(){
                    monog()
                    mofat = true
                }, 500)
            }
            
        }, 500)
    }, 500)

}

var cores = [[0, 0], [1, 0], [1, 0], [1, 1], [0, 0], [0, 1], [0, 1], [1, 1], [1, 0], [0, 0], [1, 0]]

var pres = []
for(ip=0; ip<9; ip++){
    pres[ip]= {
        im: new Image, 
        cor: [cores[ip]]        
    }    
    pres[ip].im.src = 'pregs/preg'+ip+'.png'
}
var ens = [[new Image, new Image], [new Image, new Image]]
ens[0][0].src = 'pregs/res0.png'
ens[1][0].src = 'pregs/res1.png'
ens[0][1].src = 'pregs/res2.png'
ens[1][1].src = 'pregs/res3.png'

var en = [0, 0]

var nawe = 0

function makbuts(){
    //console.log(nawe)
    //console.log(pres[nawe])
    ctx.drawImage(pres[nawe].im, 10, 10, taman, taman)
    ctx.drawImage(ens[en[0]][en[1]], 10, 10, taman, taman)
}

var mno = [new Image, new Image, new Image]
mno[0].src = 'mono/monol0.png'
mno[1].src = 'mono/monol1.png'
mno[2].src = 'mono/monol2.png'

var stage = 0



function monog(){
    ctx.drawImage(mno[stage], 10, 10, taman, taman)
    if(stage ==2){
        nawe = 8
        mofat = false
        choi = true
        makbuts()
    }
}

function upun(){
    if(choi==false){return}
    en[1] = (2+en[1]-1)%2
    makbuts()
}
function downun(){
    if(choi==false){return}
    en[1] = (2+en[1]+1)%2
    makbuts()
}
function leftun(){
    if(choi==false){return}
    en[0] = (2+en[0]-1)%2
    makbuts()
}
function rightun(){
    if(choi==false){return}
    en[0] = (2+en[0]+1)%2
    makbuts()
}

function chuz(){
    if(choi){
        if(en[0]== pres[nawe].cor[0][0] && en[1]== pres[nawe].cor[0][1]){
            if(nawe == 8){
                choi=false
                winin()
            }else{
                kiled()
            }
            
        }else{
            dez()
        }    
    }
    if(mofat){
        stage++
        monog()
    }
    
}

function kiled(){
    choi = false
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(0, 0, canx, cany)
    ctx.drawImage(fi[enemnau], 10, 10, taman, taman)
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, canx, cany)

    setTimeout(function(){
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.fillRect(0, 0, canx, cany)

        setTimeout(function(){
            mob= true
            rend(naw, dowr, 0);
        }, 1000)
    }, 1000)
}

function dez(){
    location.reload()
}

var vicr = []
for(y=0; y<14; y++){
    vicr[y] = new Image
    vicr[y].src = 'viic/vic'+y+'.png'
}
var aa = 0
function winin(){
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, canx, cany)
    ctx.drawImage(vicr[aa], 10, 10, taman, taman)
    aa = (aa+1)%14
    setTimeout(function(){
        winin()
    }, 100)
}

