// indexOf lastIndexOf,find,findIndex,set,filter,includes,search,sort

// const   =
// console.log(.filter(()=>),'')

const agecategory =  [4,5,6,7,5,9,10,22,34,65,12,18,4,5,6,7,8,4,4,5,6,9,3]
// const agecategory1 =  '4,5,6,7,5,9,10,22,34,65,12,18,4,5,6,7,8,4,4,5,6,9,3'

// console.log(agecategory.filter((items)=>items>=18),'filter')
// console.log(agecategory.filter((items)=>items===18),'18')
// console.log(agecategory.filter((items)=>items!==18),'excluding 18') //remove 18 from array
// console.log(new Set(agecategory),'index,value,unique key value')
// console.log(new Set(agecategory1),'index,value,unique key value,also add string as element')


const  priceOfProduct = [200,500,250,150,450,1000,650]
//console.log(priceOfProduct.find((range)=>range<500),'output:200,only one elment')
console.log(priceOfProduct.find((range)=>range>1000),'output:undefined')

//console.log(priceOfProduct.findIndex((range)=>range<500),'output:200,indexNumber')
//console.log(priceOfProduct.findIndex((range)=>range<1000),'output:-1,indexNumber')

// console.log(priceOfProduct.filter((range)=>range<500),'priceOfProduct')

// let num = 10
// const createArr = [...Array()]
// const createArr1 = [...Array(num)]
// const createArr2 = [...Array(num).keys()]

// console.log(createArr,'createArr')
// console.log(createArr1,'createArr1')

// const seen = new Set()
// const duplicate = new Set()

// for (const items of agecategory){
// if(seen.has(items)){
//     duplicate.add(items)
// }else{
//     seen.add(items)
// }

// }
// console.log(seen,'seen')
// console.log(duplicate,'duplicate')


// const techteam = [{name:'ankit',position:'laravel developer'},{name:'swati',position:'laravel developer'},
// {name:'himanshu',position:'fullstack developer'},{name:'sumit',position:'server manager'},{name:'aman',position:'laravel developer'}]

// console.log(techteam.filter((items,index)=>items.position==='laravel developer'))
// console.log(techteam.filter((items,index)=>items.position!=='laravel developer'))
// console.log(new Set(agecategory),'agecategory')  //set caintain unique value //set has find the dublicate value
//[...Array()] caintain dublicate value

//****  find the dublicate array using indexOF with filter,new set ,set method has, sort && slice

// const findDuplicate = (arr)=>{
//     let sortedArray = arr.slice().sort()
//     let results = []
//     for(let i =0;i<sortedArray.length-1;i++){
//         if(sortedArray[i+1]===sortedArray[i]){
//        results.push(sortedArray[i])
//         }
//     }
//     return results

// }
// console.log(findDuplicate(agecategory))


//seach and filtering arr  //id data is not found in arr always return -1 //forward,case sensetive
const frdnames = ["pihu",'sunu',"gunu","Sunu","muhu","fazo",'fizu','sunu']
// console.log(frdnames.indexOf('sunu'),'2')
// console.log(frdnames.indexOf('sunu',4),'-1')
// console.log(frdnames.indexOf('sunu'),'case sensetive (-1)')  
// console.log(frdnames.indexOf('sunu',1),'indexNO 6')
// console.log(frdnames.lastIndexOf('sunu'),'1')
// console.log(frdnames.lastIndexOf('sunu'),'7')  //backward,count with indexno 1 ,case senstive ,-1
// console.log(frdnames.lastIndexOf('sun'),'-1') 
//console.log(frdnames.lastIndexOf('Sunu'),'5')     //****************** */

// const fruits = ["app","man","app","org","app"]   //index of large element of arry ,backword 
// console.log(fruits.lastIndexOf('app',1),'output:always last occurance of element index') 

// console.log(frdnames.includes('sunu'),'output:true')
// console.log(frdnames.includes('sun'),'output:false')
//console.log(frdnames.includes('sunu',4),'output:true')  //forword,case sensetive

//sord method converting the elements into thed string 
// const number = [100,10000,300,200,5000,6000,250,700,9000]
// console.log(number.sort(),'100,10000,200,250,300,5000,6000,700,9000')


// const arrvalue = [1,7,2,2,1,3,4,5,6] 
// console.log(arrvalue.filter((items,index)=>arrvalue.indexOf(items)===index))
// console.log(arrvalue.filter((items,index)=>arrvalue.indexOf(items)!==index))