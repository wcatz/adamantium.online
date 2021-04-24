$.getJSON('https://js.adapools.org/pools/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae/summary.json', function(data) {
  $.each(data.data, function(i, val) {
    a = new Array('tax_fix', 'pledge', 'total_stake', 'active_stake', 'delegators');
    if (a.includes(i)) val = Math.round(parseInt(val) / 1000000);
    if (i == 'blocks_lifetime') val = parseInt(val) + parseInt(data.data.blocks_epoch);
    if (i == 'pledge') val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    if (i == 'total_stake') val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    if (i == 'active_stake') val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    if (i == 'tax_ratio') val = val * 100;
    if (i == 'blocks_estimated') val = val * 100;


    $('#c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae_' + i).html(val).text();
  });
});

document.querySelector('video').defaultPlaybackRate = 3.0;

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
