const it=require('lodash')
const itema = [1,[2,[3,[4]]]]
const new1 = it.flattenDeep(itema)
console.log(new1)