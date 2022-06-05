const firstData ={
     listData: []
}

const reducer = (state=firstData,actions)=>{
 switch (actions.type) {
     case  "ADD":
       const { id,data }=actions.payLoadData;

     return {
         ...state,
         listData: [
            ...state.listData,
             {
                 id:id,
                 data:data
             }
         ]
     }

     case "delete":
      const newData =state.listData.filter((ele)=> ele.id !== actions.id)
      return {
        ...state,
        listData: newData
    }

    case 'remove':
        return {
            listData:[]
        }
         
     default:return state;
 }
 

}


export default reducer;