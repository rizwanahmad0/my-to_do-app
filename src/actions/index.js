




export const clickAdd = (data)=>{
  return { type:"ADD",
  payLoadData:{
      id: new Date().getTime().toString(),
      data:data
  }
}
}

export const clickDelete = (id) =>{
  //  console.log("ajk")
    return {
        type:'delete',
        id
    }

}


export const removeAll = ()=>{
  //console.log("jskl")
  return {
    type:'remove',
  }
}