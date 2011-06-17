function AudioClip(audioFile) {
    this.audio = new Audio(audioFile);
    this.audioChannels = [];
    this.length = this.audio.duration;
}

AudioClip.prototype = {
    play: function(start, finish) {
        var i = 0;
        while (this.audioChannels[i] !== undefined) {
            if (this.audioChannels[i].ended) {break;}
            i += 1;
        }
        if (this.audioChannels[i] === undefined) {
            this.audioChannels[i] = this.audio.cloneNode(true);
        }
        if (start !== undefined) {
            this.audioChannels[i].currentTime = start
        }
        if (finish !== undefined) {
            thisObj = this;
            setTimeout(function() {
                thisObj.audioChannels[i].currentTime = 
                thisObj.length;}, finish - thisOjb.audioChannels[i].currentTime);
        }
        this.audioChannels[i].play();
    }
}
