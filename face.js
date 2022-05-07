let outputHeight; // определение высоты экрана
let outputWidth; // определение ширины жкрана
let faceTracker; // определение черт лица
let videoInput; // изображение с веб
let imgMisha;  // изображения для масок
let imgEldar;
let imgSanya;
let imgEva;
let imgZozh;
let imgSema;
let imgLisiy;
let imgBilly;
let selected = -1; // фильтр

function preload(){ //загрузка изображений для использования
    imgMisha = loadImage('imgonline-com-ua-Resize-iexGOL9sqrv0BfAQ.png'); //передача из p5 в качестве объекта изображения
    imgBogdan = loadImage('imgonline-com-ua-Resize-0l7BQILgiDPqDR.png');
    imgEldar = loadImage('5-zB74-6f7kAdCGiTi9C7sVpYT1eQHBNo5mhNt30STTJ0Viyz4oXOXi72kWcLFzWJC0fkw9EHnegu5ulGaQTr5lw.jpg.png');
    imgZozh = loadImage('imgonline-com-ua-Resize-4J1PavZATUgt.png');
    imgSema = loadImage('imgonline-com-ua-Resize-IAt32CzLaHvo4dX.png');
    imgSanya = loadImage('imgonline-com-ua-Resize-bYNxVvTgIAeGrwZ.png');
    imgEva = loadImage('imgonline-com-ua-Resize-Oj6TQulI0cKk.png');
    imgLisiy = loadImage('imgonline-com-ua-Resize-70WbJNnO2CFN.png');
    imgBilly = loadImage('imgonline-com-ua-Resize-Fv7SNdDZwiEg6s.png');
}

function setup(){ //создание пользовательского интерфейса

    const maxWidth = Math.min(windowWidth, windowHeight); //создание элемента <canvas> для графики
    pixelDensity(1);
    outputHeight = maxWidth * 0.75; // высота экрана с учетом 4:3
    outputWidth = maxWidth; // ширина с учетом 4:3

    createCanvas(outputWidth, outputHeight); // создание <canvas> через ширину и высоту окна

    videoInput = createCapture(VIDEO); // видопоток с веб камеры и перенос в <canvas>
    videoInput.size(outputWidth, outputHeight) // получение размеров видеопотока
    videoInput.hide() // скрытие при проблемах с кодом или аппаратной частью

    const sel = createSelect(); // выпадающий список для выбора масок
    const selectList = ['Миша', 'Богдаша','Эльдар', 'Незожник и зожник', 'Семушка','Санечка','Ева','Лысый известный мужчина','Билли кумир молодежи'] // выбор маски
    sel.option('Выбрать маску', -1); // пункт в списке по умолчанию
    for(let i = 0; i<selectList.length; i++){
        sel.option(selectList[i],i);
    }
    sel.changed(applyFilter);

    faceTracker = new clm.tracker(); // создание трекера для отслеживания лица
    faceTracker.init();
    faceTracker.start(videoInput.elt)


}
function applyFilter(){
    selected = this.selected();
}

function draw(){
    image(videoInput, 0, 0, outputWidth, outputHeight); // рендер изображение в <canvas>

    switch(selected){
        case '-1': break;
        case '0': drawMisha(); break;
        case '1': drawBogdan(); break;
        case '2': drawEldar(); break;
        case '3': drawZozh(); break;
        case '4': drawSema(); break;
        case '5': drawSanya(); break;
        case '6': drawEva(); break;
        case '7': drawLisiy(); break;
        case '8' : drawBilly(); break;
    }
}

function drawMisha(){ // размещение масок на лице
    const positions = faceTracker.getCurrentPosition();
    if(positions !== false){
        push();
        const wx = Math.abs(positions[13][0] - positions[1][0]) * 1.2; // ширина по x
        const wy = Math.abs(positions[7][1] - Math.min(positions[16][0], positions[20][1])) * 1.2;
        translate(-wx/2, -wy/2);
        image(imgMisha, positions[62][0], positions[62][1],wx, wy);
        pop();

    }
}
function drawBogdan(){ // 
    const positions = faceTracker.getCurrentPosition();
    if(positions !== false){
        push();
        const wx = Math.abs(positions[13][0] - positions[1][0]) * 1.2; // ширина по x
        const wy = Math.abs(positions[7][1] - Math.min(positions[16][0], positions[20][1])) * 1.2;
        translate(-wx/2, -wy/2);
        image(imgBogdan, positions[62][0], positions[62][1],wx, wy);
        pop();

    }
}
function drawEldar(){ // 
    const positions = faceTracker.getCurrentPosition();
    if(positions !== false){
        push();
        const wx = Math.abs(positions[13][0] - positions[1][0]) * 2; // ширина по x
        const wy = Math.abs(positions[7][1] - Math.min(positions[16][0], positions[20][1])) * 2;
        translate(-wx/2, -wy/2);
        image(imgEldar, positions[62][0], positions[62][1],wx, wy);
        pop();
    }
}
function drawZozh(){ // 
    const positions = faceTracker.getCurrentPosition();
    if(positions !== false){
        push();
        const wx = Math.abs(positions[13][0] - positions[1][0]) * 2; // ширина по x
        const wy = Math.abs(positions[7][1] - Math.min(positions[16][0], positions[20][1])) * 2;
        translate(-wx/2, -wy/2);
        image(imgZozh, positions[62][0], positions[62][1],wx, wy);
        pop();
    }
}
function drawSema(){ // 
    const positions = faceTracker.getCurrentPosition();
    if(positions !== false){
        push();
        const wx = Math.abs(positions[13][0] - positions[1][0]) * 1.25; // ширина по x
        const wy = Math.abs(positions[7][1] - Math.min(positions[16][0], positions[20][1])) * 1.25;
        translate(-wx/2, -wy/2);
        image(imgSema, positions[62][0], positions[62][1],wx, wy);
        pop();
    }
}
function drawSanya(){ // 
    const positions = faceTracker.getCurrentPosition();
    if(positions !== false){
        push();
        const wx = Math.abs(positions[13][0] - positions[1][0]) * 1.25; // ширина по x
        const wy = Math.abs(positions[7][1] - Math.min(positions[16][0], positions[20][1])) * 1.25;
        translate(-wx/2, -wy/2);
        image(imgSanya, positions[62][0], positions[62][1],wx, wy);
        pop();
    }
}
function drawEva(){ // 
    const positions = faceTracker.getCurrentPosition();
    if(positions !== false){
        push();
        const wx = Math.abs(positions[13][0] - positions[1][0]) * 1.5; // ширина по x
        const wy = Math.abs(positions[7][1] - Math.min(positions[16][0], positions[20][1])) * 1.5;
        translate(-wx/2, -wy/2);
        image(imgEva, positions[62][0], positions[62][1],wx, wy);
        pop();
    }
}
function drawLisiy(){ // 
    const positions = faceTracker.getCurrentPosition();
    if(positions !== false){
        push();
        const wx = Math.abs(positions[13][0] - positions[1][0]) * 2.5; // ширина по x
        const wy = Math.abs(positions[7][1] - Math.min(positions[16][0], positions[20][1])) * 2.5;
        translate(-wx/2, -wy/2);
        image(imgLisiy, positions[62][0], positions[62][1],wx, wy);
        pop();
    }
}
function drawBilly(){ // 
    const positions = faceTracker.getCurrentPosition();
    if(positions !== false){
        push();
        const wx = Math.abs(positions[13][0] - positions[1][0]) * 2; // ширина по x
        const wy = Math.abs(positions[7][1] - Math.min(positions[16][0], positions[20][1])) * 2;
        translate(-wx/2, -wy/2);
        image(imgBilly, positions[62][0], positions[62][1],wx, wy);
        pop();
    }
}



function windowResized(){ // для изменения окна видеопотока при изменении экрана
    const maxWidth = Math.min(windowWidth, windowHeight);
    pixelDensity(1);
    outputHeight = maxWidth * 0.75;
    outputWidth = maxWidth;
    resizeCanvas(outputWidth, outputHeight);

}