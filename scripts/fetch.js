var data = {
    date_from: '2021-04-27',
    date_to: '2021-05-04'
  };
  $.ajax({
    url: 'https://data.gov.gr/api/v1/query/mdg_emvolio',
    data: data,
    dataType: 'jsonp',
    headers: {
      "Authorization": "Token 67b4e691b907faee4b61004b4c179740b6fbd3dd"
    },
    success: function(data) {
      alert('Total results found: ' + data.length)
    }
  });