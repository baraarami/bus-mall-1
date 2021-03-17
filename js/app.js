'use strict'

const Images= [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg',  
];

const imgSection = document.getElementById('imagesection');
const leftImage = document.getElementById('leftImage');
const middleImage = document.getElementById('middleImage');
const rightImage = document.getElementById('rightImage');
const button = document.getElementById('result');
const list = document.getElementById('list');
let firstIndex=0;
let secodIndex =0 ;
let thirdIndex=0;
let clicks=25;

function image (name){
    this.name =name ;
    this.path =`./img/${name}`;
    this.click =0;
    this.shown =0;
    this.votes=0;
    image.all.push(this);
}
image.all = [];


for (let i=0 ; i <Images.length ; i++){
    new image(Images[i]);
}

gititem();
function render(){
    firstIndex=random(0,image.all.length-1);
    const first=image.all[firstIndex];
    leftImage.src = first.path;
    leftImage.title= first.name;
    leftImage.alt = first.name ;

    
    secodIndex=random(0,image.all.length-1);
    const sec=image.all[secodIndex];
    middleImage.src = sec.path;
    middleImage.title= sec.name;
    middleImage.alt = sec.name ;

   
    thirdIndex=random(0,image.all.length-1);
    const third=image.all[firstIndex];
    rightImage.src = third.path;
    rightImage.title= third.name;
    rightImage.alt = third.name ;
    
}
render();

let count =0 ;

imagesection.addEventListener('click' , addVotes);
function addVotes(event){
    if ( event.target.id !== 'imagesecton'){
        for (let i=0 ; i <Images.length ; i++){
            if (image.all[i].name === event.target.title){
                image.all[i].shown++;
                count++
            }
        }
          render();
    }
    if (count === 25){
        imagesection.removeEventListener('click' , addVotes);
        localStorage.setItem('image' , JSON.stringify(image.all));
        creatchart();
        // for (let i =0 ; i <Images.length; i++){
        //     document.getElementById(`${i}`).textContent=` name : ${image.all[i].name} had ${image.all[i].click}votes , and have seen ${image.all[i].shown} times`;
        //  }
    }
}

button.addEventListener('click', getresult);

function getresult(){
    let imageel=document.createElement('ul');
    list.appendChild(imageel);
    let PElement ;
    for (let i =0 ; i< image.all.length ;i++){
        PElement=document.createElement('li');
        PElement.textContent=` name : ${image.all[i].name} had ${image.all[i].click}votes , and have seen ${image.all[i].shown} times`;
        imageel.appendChild(PElement);

    }
    
    button.removeEventListener('click' , getresult);
    button.textContent = 'reset';
    button.onclick=function addVotes(event){
        location.reload ();
    };
}
  
function creatchart(){
    const imageNames = [];
    const votes = [];
    const shown=[];
    const click=[];
    for (let i = 0; i < image.all.length; i++) {
      imageNames.push (image.all[i].name);
      votes.push(image.all[i].votes);
      shown.push(image.all[i].shown);
      click.push(image.all[i].shown);}
        
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels:['bag',
                'banana',
                'bathroom',
                'boots',
                'breakfast',
                'bubblegum',
                'chair',
                'cthulhu',
                'dog-duck',
                'dragon',
                'pen',
                'pet-sweep',
                'scissors',
                'shark',
                'sweep',
                'tauntaun',
                'unicorn',
                'usb',
                'water-can',
                'wine-glass'],
                datasets: [{
                    label: '# of Votes',
                    data: votes,
                    backgroundColor: [
                        'rgba(233, 136, 10, 0.658)',
                      'rgba(73, 77, 20, 0.658)',
                      'rgb(161, 238, 89)',
                      'rgba(3, 63, 35)',
                      'rgba(193, 102, 255, 0.2)',
                      'rgba(25, 159, 64, 0.2)',
                      'rgba(50, 8, 90, 0.534)',
                      'rgba(127, 69, 182, 0.534)',
                      'rgba(161, 128, 192, 0.534)',
                      'rgba(207, 47, 74, 0.836)',
                      'rgba(92, 3, 3, 0.774)',
                      'rgba(236, 40, 66, 0.774)',
                      'rgba(94, 40, 40, 0.808)',
                      'rgba(97, 65, 65, 0.808)',
                      'rgba(119, 33, 218, 0.808)',
                      'rgba(33, 17, 122, 0.808)',
                      'rgba(64, 125, 238, 0.658)',
                      'rgba(64, 197, 238, 0.658)',
                      'rgba(26, 238, 174, 0.658)',
                      'rgba(5, 110, 40, 0.658)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                  },
                    {label: '# of shown',
                    data: shown,
                    backgroundColor: [
                        'rgba(143, 84, 8, 0.658)',
                      'rgb(115, 170, 64)',
                      'rgb(11, 187, 40)',
                      'rgba(750, 192, 192, 0.2)',
                      'rgba(163, 102, 255, 0.2)',
                      'rgba(25, 159, 64, 0.2)',
                      'rgba(207, 155, 218, 0.534)',
                      'rgba(123, 13, 145, 0.534)',
                      'rgba(223, 118, 197, 0.534)',
                      'rgba(158, 8, 33, 0.637)',
                      'rgba(173, 39, 39, 0.774)',
                      'rgba(165, 31, 49, 0.808)',
                      'rgba(155, 67, 67, 0.808)',
                      'rgba(65, 50, 50, 0.808)',
                      'rgba(42, 4, 85, 0.808)',
                      'rgba(46, 20, 190, 0.658)',
                      'rgba(9, 86, 228, 0.658)',
                      'rgba(43, 113, 134, 0.658)',
                      'rgba(5, 165, 117, 0.658)',
                      'rgba(5, 155, 55, 0.658)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                  },
                  {label: '# of click',
                  data: click,
                  backgroundColor: [
                    'rgba(177, 129, 66, 0.658)',
                  'rgb(79, 114, 46)',
                  '(4, 117, 23)',
                  'rgba(750, 192, 192, 0.2)',
                  'rgba(183, 102, 255, 0.2)',
                  'rgba(225, 159, 64, 0.2)',
                  'rgba(184, 125, 169, 0.36)',
                  'rgba(99, 8, 76, 0.836)',
                  'rgba(212, 24, 165, 0.534)',
                  'rgba(97, 6, 21, 0.637)',
                  'rgba(231, 8, 8, 0.637)',
                  'rgba(88, 7, 18, 0.808)',
                  'rgba(212, 96, 96, 0.808)',
                  'rgba(54, 31, 31, 0.808)',
                  'rgba(42, 4, 85, 0.808)',
                  'rgba(100, 77, 235, 0.658)',
                  'rgba(8, 59, 155, 0.658)',
                  'rgba(8, 67, 85, 0.658)',
                  'rgba(4, 99, 70, 0.658)',
                  'rgba(11, 218, 80, 0.658)',

                ],


                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    function random(min , max ){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
      
    function gititem(){
        let par=localStorage.getItem('list');
        if (par){
            const dat =JSON.parse(par);
            render();
        }
    }
    gititem();
    render();
