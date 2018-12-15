let time = 0;
let wave = [];

let nslider;
let rslider;

function setup() {
    createCanvas(900, 500);
    nslider = createSlider(1, 100, 1);
    rslider = createSlider(50, 130, 15);

}


function draw() {
    background(0);
    translate(175, 200);

    let x = 0;
    let y = 0;

    for (let i = 0; i < nslider.value(); i++) {
        let prevx = x;
        let prevy = y;

        let n = (2 * i) + 1;
        let radius = rslider.value() * (4 / (n * PI));
        x += radius * cos(n * time);
        y += radius * sin(n * time);



        stroke(255, 100);
        noFill();
        ellipse(prevx, prevy, radius * 2);


        //fill(255);
        stroke(255);
        line(prevx, prevy, x, y);
        //ellipse(x, y, 8);




    }
    wave.unshift(y);
    translate(200, 0);
    line(x - 200, y, 0, wave[0]);


    beginShape();
    noFill();
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();


    time += 0.05;

    if (wave.length > 600) {
        wave.pop();
    }
}