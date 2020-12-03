var select=document.querySelector('select');
var div=document.querySelector('#div');
var button=document.querySelector('button');
select.addEventListener("change",()=>{
    var str='';
    for(var i=1;i<=select.value;i++){
        str=str+"<label class='col-sm-5 col-form-label'>Semester "+i+" : </label><input type='text' class='gpa form-control col-sm-7 form-control-md' name='gpa"+i+"' required><br><br>";
    }
    div.innerHTML=str;
})
button.addEventListener("click",()=>{
    var arr = document.querySelectorAll(".gpa");
    var sum=0;
    arr.forEach((a)=>{
        sum+=parseInt(a.value);
    })
    sum=sum/select.value;
    document.querySelector("#cgpa").setAttribute("value",sum);
})
