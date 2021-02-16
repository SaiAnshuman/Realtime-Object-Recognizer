function setup(){

 canvas = createCanvas(300,300);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();
 classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ATfBgdu87/model.json",modelLoaded);

 

}

function draw(){

    image(video,0,0,300,300);
    classifier.classify(video,gotResults);

}

function modelLoaded(){

 console.log("Model has been loaded succesfully!");

}

function gotResults(error , results){

  if(error){

   console.log(error);

  }

  else{

   console.log(results);
   document.getElementById("result_obj").innerHTML = results[0].label;
   document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3);

  }

}