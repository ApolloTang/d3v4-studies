const l = console.log
d3.tsv('./data.tsv', data=>{

  const groupByYear = d3
    .nest()
    .key(d => d.year)

  l('groupByYear:')
  l(groupByYear.entries(data))

  const groupByYearCount_cardinality = groupByYear
    .rollup( (values, i)=>{
      // l(i)
      return d3.sum(values, d=>d.totalpop)
    })

  l('groupByYear cardinality:')
  l(groupByYearCount_cardinality.entries(data))
})



