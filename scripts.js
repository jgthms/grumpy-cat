function insertMessage(name, message) {
  var date = new Date();

  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();

  var comment =
  `<div class="comment">
    <strong>${name}</strong>
    <small>${year}-${month}-${day}</small>
    <p>
      ${message}
    </p>
  </div>`;

  $('#comments').prepend(comment);

  $('#name').val('');
  $('#message').val('');
  $('#checkbox').attr('checked', false);
}

$('#contact').submit( function(e) {
  e.preventDefault();

  $('.alert').slideUp();

  var contactName = $('#name').val();
  var contactMessage = $('#message').val();

  if (contactName == '' || contactMessage == '') {
    $('#error-text').slideDown();
  } else {
    if ($('#checkbox').prop('checked')) {
      $('#success').slideDown();
      insertMessage(contactName, contactMessage);
    } else {
      $('#error-checkbox').slideDown();
    }
  }
});
