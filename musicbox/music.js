$(document).ready(function() {

    var cNote = document.getElementById('cAudio');
    var dNote = document.getElementById('dAudio');
    var eNote = document.getElementById('eAudio');
    var fNote = document.getElementById('fAudio');
    var gNote = document.getElementById('gAudio');
    var aNote = document.getElementById('aAudio');
    var bNote = document.getElementById('bAudio');

    $('#c').on('click mouseover', function(){
        cNote.currentTime = 0;
        cNote.play();
    });

    $('#d').on('click mouseover', function(){
        dNote.currentTime = 0;
        dNote.play();
    });

    $('#e').on('click mouseover', function(){
        eNote.currentTime = 0;
        eNote.play();
    });
    
    $('#f').on('click mouseover', function(){
        fNote.currentTime = 0;
        fNote.play();
    });
    
    $('#g').on('click mouseover', function(){
        gNote.currentTime = 0;
        gNote.play();
    });
    
    $('#a').on('click mouseover', function(){
        aNote.currentTime = 0;
        aNote.play();
    });

    $('#b').on('click mouseover', function(){
        bNote.currentTime = 0;
        bNote.play();
    });
    
});