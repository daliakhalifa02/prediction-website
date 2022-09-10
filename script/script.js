async function prediction(){
    var name=document.getElementById('name').value;
    //initializing urls as variables
    var url1="https://api.genderize.io?name="+name;
    var url2="https://api.agify.io?name="+name;
    var url3=" https://api.nationalize.io/?name="+name;
    var url4="https://dog.ceo/api/breeds/image/random";
