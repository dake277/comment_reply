export const formatDateTime = function (dateJson) {
  let date = new Date(dateJson)
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  let d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  let h = date.getHours();
  h=h < 10 ? ('0' + h) : h;
  let minute = date.getMinutes();
  minute = minute < 10 ? ('0' + minute) : minute;
  let second=date.getSeconds();
  second=second < 10 ? ('0' + second) : second;
  return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
};
let res = []
export const findItemByID = (arr, index)=>{
  arr.forEach(item =>{
    if(Array.isArray(item)){
      res = findItemByID(item,index)
    }
    if(item.id === index){
      console.log(item)
      res = item
    }
  })
  return res
}

let len = 0
export const getItemLengthByID = (arr, id)=>{
  arr.forEach((item, index, curArr) =>{
    if(Array.isArray(item)){
      len = getItemLengthByID(item,id)
    }
    if(item.id === id){
      console.log(curArr)
      len = curArr.length
    }
  })
  return len
}

let result = []
export const pushItemToList = (arr, id, com)=>{
  arr.forEach((item, index, curArr) =>{
    if(Array.isArray(item)){
      result = pushItemToList(item,id,com)
    }
    if(item.id === id){
      curArr.push(com)
      console.log(curArr)
    }
  })
  return arr
}