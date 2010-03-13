
function Display (quotes, div) {
  this.quotes = this.shuffle(quotes);
  this.index = 0;
  this.area = div;
  this.area.children().hide();
}

Display.prototype = {

  show: function() {
    var x = this.next();
    this.area.find('#quote').html(x.quote).fadeIn(1000);
    this.area.find('#author').html(x.author).fadeIn(3000);
    var self = this;
    window.setTimeout(function() { self.hide(); }, 3000+x.quote.length*30);
  },

  hide: function() {
    this.area.children().fadeOut(2000);
    var self = this;
    window.setTimeout(function() { self.show(); }, 3000);
  },

  next: function() {
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
