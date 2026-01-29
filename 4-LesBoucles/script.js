//TP11
//fait j! avec while 
let i=0, j=0
while(i<=100){
    j=j+i
    i++
}
console.log(j)
//fait j! avec do while
let x=prompt("Saisi un nombre"), y=0, z=0
do{
    z=z+y
    y++
}while(y<=x)
console.log(z)
//TP12
//affiche les elements d'un tableau avec for
let t=[1,2,3,4,5,6,7,8]
for (let e = 0; e<t.length; e++){
    console.log(t[e])
}