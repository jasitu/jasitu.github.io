$(document).ready(function() {

    var cNote = document.getElementById('cAudio');
    var dNote = document.getElementById('dAudio');
    var eNote = document.getElementById('eAudio');
    var fNote = document.getElementById('fAudio');
    var gNote = document.getElementById('gAudio');
    var aNote = document.getElementById('aAudio');
    var bNote = document.getElementById('bAudio');

    $('#c').mouseover(function(){
        cNote.currentTime = 0;
        cNote.play();
    });

    $('#d').mouseover(function(){
        dNote.currentTime = 0;
        dNote.play();
    });

    $('#e').mouseover(function(){
        eNote.currentTime = 0;
        eNote.play();
    });
    
    $('#f').mouseover(function(){
        fNote.currentTime = 0;
        fNote.play();
    });
    
    $('#g').mouseover(function(){
        gNote.currentTime = 0;
        gNote.play();
    });
    
    $('#a').mouseover(function(){
        aNote.currentTime = 0;
        aNote.play();
    });

    $('#b').mouseover(function(){
        bNote.currentTime = 0;
        bNote.play();
    });
    
});