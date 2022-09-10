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
