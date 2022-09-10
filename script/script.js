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