(function($){
  $('#submit').click(function(e){
    e.preventDefault();
    $('#target').val(tt.parseWords($('#source').val().split(' ')).toString());
  });
})(jQuery)
