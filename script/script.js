async function prediction(){
    var name=document.getElementById('name').value;
    //initializing urls as variables
    var url1="https://api.genderize.io?name="+name;
    var url2="https://api.agify.io?name="+name;
    var url3=" https://api.nationalize.io/?name="+name;
    var url4="https://dog.ceo/api/breeds/image/random";
    //creating new variables "response" and fetching the urls
    const response1 = await fetch(url1);
    const response2 = await fetch(url2);
    const response3 = await fetch(url3);
    const response4 = await fetch(url4);
    //intitializing data as variables and using the urls inside these data
    var data1 = await response1.json();
    var data2 = await response2.json();
    var data3 = await response3.json();
    var data4 = await response4.json();
    //calling the ids given to the paragraphs in the html file and the concatinated part is us choosing the info we need from the urls (gender/age/nationality)
    //using innerHTML allows our data to appear on the screen for the user to see (it becomes external)
    document.getElementById('demo1').innerHTML="Gender: "+data1.gender;
    document.getElementById('demo2').innerHTML="Age: "+data2.age;       
    document.getElementById('demo3').innerHTML="Nationality: "+data3.country.country_id;
    //calling the image by id 
    document.getElementById("image").src = data4.message;
}

//calling the function loadImage
window.onload = function() {
    loadImage();
}
 
//
async function loadImage(){
    var url5="https://dog.ceo/api/breeds/image/random";
    const response5 = await fetch(url5);
    var data5 = await response5.json();
    document.getElementById("image").src = data5.message;
}
