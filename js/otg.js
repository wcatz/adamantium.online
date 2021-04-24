$.getJSON('https://js.adapools.org/pools/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae/summary.json', function(data) {
  $.each(data.data, function(i, val) {
    a = new Array('tax_fix', 'pledge', 'total_stake', 'active_stake');
    if (a.includes(i)) val = Math.round(parseInt(val) / 1000000);
    if (i == 'blocks_lifetime') val = parseInt(val) + parseInt(data.data.blocks_epoch);
    if (i == 'pledge') val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    if (i == 'total_stake') val = nFormatter(parseInt(val) * 10 ** -6, 2);
    if (i == 'active_stake') val = nFormatter(parseInt(val) * 10 ** -6, 2);
    if (i == 'tax_ratio') val = val * 100;
    if (i == 'blocks_estimated') val = val * 100;


    $('#c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae_' + i).html(val).text();
  });
});

function nFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

document.querySelector('video').defaultPlaybackRate = 2.0;

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
