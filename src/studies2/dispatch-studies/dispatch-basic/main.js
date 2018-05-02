var dispatch = d3.dispatch('typeName1', 'typeName2');

dispatch.on('typeName1', msg=>{
  console.log('typeName1 received', msg)
} )

dispatch.on('typeName1.nameA', msg=>{
  console.log('typeName1.nameA received', msg)
} )

dispatch.on('typeName2', msg=>{
  console.log('typeName2 received', msg)
} )

dispatch.on('typeName2.nameA', msg=>{
  console.log('typeName2.nameA received', msg)
} )


const button1 = d3.select('body')
  .append('button')
  .text('dispatch typeName1, typeName2')
  .on('click', ()=>{
    dispatch.call('typeName1', this, 'message for typeName1')
    dispatch.call('typeName2', this, 'message for typeName2')
  })

const button2 = d3.select('body')
  .append('button')
  .text('remove .nameA')
  .on('click', ()=>{
    dispatch.on('.nameA', null)
    console.log('removed .nameA')
  })

const button3 = d3.select('body')
  .append('button')
  .text('remove typeName1')
  .on('click', ()=>{
    dispatch.on('typeName1', null)
    console.log('removed typeName1')
  })


