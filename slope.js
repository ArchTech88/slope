function slope(m){
    if(m >= 0){
        console.log("Things are trending up!");
    }
    else if(m===0){
        console.log("staying level!");
    }
    else{
        console.log("things are trending down :(")
    }
} 

x1 = 10
x2 = 12

m = 1/2
b = 0.3

y1 = m * x1 + b
y2 = m * x2 + b
slope(x1);
slope(x2);
slope(m);