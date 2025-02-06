const ip=document.getElementById('search_box');
const res=document.getElementById('search_result');
const more=document.getElementById('show-more-btn');
const sbtn=document.getElementById('searching');

let keyword="";
let page=1;
let client_Access="Z2hp9vzDMXxnEzm-rtofeSV4cn5U-b";
let value=3;
let real_value=12;
async function search_image(){
    res.innerHTML='';
    keyword=ip.value;
    // console.log(keyword);
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${client_Access}&per_page=12`;
    const respons=await fetch(url);
    const data=await respons.json();
    const results=data.results;
    console.log(data);
    for(let result=0;result<results.length;result++){
        const url=results[result].urls.small;
        // console.log(url);
        const imag=document.createElement('img');
        imag.src=url;
        const atag=document.createElement('a');
        atag.href=results[result].links.html;
        // atag.target="_blank";
        atag.appendChild(imag);
        res.appendChild(atag);
    }
    more.style.display='block';
    real_value=12;
}

async function more_image(){
    res.innerHTML='';
    keyword=ip.value;
    // console.log(keyword);
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${client_Access}&per_page=${real_value+value}`;
    const respons=await fetch(url);
    const data=await respons.json();
    const results=data.results;
    for(let result=0;result<results.length;result++){
        const url=results[result].urls.small;
        // console.log(url);
        const imag=document.createElement('img');
        imag.src=url;
        const atag=document.createElement('a');
        atag.href=results[result].links.html;
        // atag.target="_blank";
        atag.appendChild(imag);
        res.appendChild(atag);
    }
    real_value+=value;
    more.style.display='block';
}


sbtn.addEventListener('click',function(){
    search_image();
});

more.addEventListener('click',function(){
    more_image();
});

// search_image();