studentarray=[];
displaystudentarray=[];

function submit(){
for(var j=1 ; j<4; j++)
{
    studentname=document.getElementById ("name_of_the_student_"+j).value;
    studentarray.push(studentname)
}
length=studentarray.length;
console.log(length);

for(var k=0; k<length; k++){
    displaystudentarray.push("<h4>Name-"+studentarray[k]+"</H4>");
}
document.getElementById("display_name_with_commas").innerHTML=displaystudentarray;
var removecomma=displaystudentarray.join(" ");
document.getElementById("display_name_without_commas").innerHTML=removecomma;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}