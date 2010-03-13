
function Display (quotes, div) {
  this.quotes = this.shuffle(quotes);
  this.index = 0;
  this.area = div;
  this.area.hide();
}

Display.prototype = {

  show: function() {
    var x = this.random();
    this.area.html(x.quote+"<br/><br/> -- <i>"+x.author+"</i>").fadeIn(1000);
    var self = this;
    window.setTimeout(function() { self.hide(); }, 3000+x.quote.length*30);
  },

  hide: function() {
    this.area.fadeOut(2000);
    var self = this;
    window.setTimeout(function() { self.show(); }, 2000);
  },

  random: function() {
    if (this.index >= this.quotes.length) {
      this.index = 0;
    }
    return this.quotes[this.index++];
  },
  
  shuffle: function(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

};
