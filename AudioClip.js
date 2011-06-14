function AudioClip(audioFile) {
    this.audio = new Audio(audioFile);
    this.audioChannels = [];
    this.length = audio.duration;
}

AudioClip.prototype = {
    play: function(start, finish) {
        var i = 0;
        while (this.audioChannels[i] != undefined) {i += 1}
        currAudio = this.audioChannels[i];
        currAudio = new Audio();
        currAudio.src = this.audio.src;
        if (start === undefined) {start = 0;}
        if (finish === undefined) {finish = this.length;}
        currAudio.play();
        thisObj = this;
        setTimeout(function() {thisObj.audioChannels.delete(i);}, finish);
    }
}
