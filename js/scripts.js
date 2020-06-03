$(document).ready(function () {
  $("form#sales").submit(function(event) {
    event.preventDefault();

    const name = $("input#name").val();
    const address = $("input#address").val();
    const item = $("input:radio[name=item]:checked").val();

    $("div#receipt").append(`<p>Thank you ${name} for purchasing human item ${item}. Your human item purchase will be mailed to ${address}. 1,000,000,000 intergalactic credits have been deducted from your banking conglomerate.`);
  });
});