const l = console.log
d3.tsv('./data.tsv', data=>{

  const result = d3
    .nest()
    .key(function(d) { return d.year; })
    .rollup( function(values, i) {
      l(i)
      return d3.sum(values, d=>d.totalpop)
    })
    .entries(data);

  l(result)

})



