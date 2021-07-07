Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});



camera=document.getElementById("camera");

Webcam.attach('camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("output").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    });
}

console.log("ml5_version",ml5.version);


classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IpQbTgiQC/model.json',modelLoaded);

console.log("modelLoaded");