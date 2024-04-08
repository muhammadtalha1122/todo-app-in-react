import{useState} from "react";
import { IoIosAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function Todo(){
    let [item,setItem] =useState(["class 1"])
    let [inputData,setInputData]= useState()

    const AddTodo=()=>{
        console.log(inputData)
        setItem([...item,inputData])
        setInputData("")
    }
    const deleteItem =(ind)=>{
        item.splice(ind,1)
        setItem([...item])
    }
    return(
        <div>
             <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
            <input type="text" name="" id="" placeholder="Enter Data" value={inputData || ""} 
            onChange={(e)=>setInputData(e.target.value)} style={{width:"250px",height:"30px",borderRadius:"20px",outline:"none",border:"none",fontSize:"17px", }} />
            <div style={{display:"inline-block"}}>
            <IoIosAddCircle size={30} color="green" onClick={()=>AddTodo()}/></div>

        </div>
        <div>
                {item.map((val,ind)=>{
                    return(
                        <div style={{textAlign:"center"}}>
                        <li style={{display:"inline-block",textAlign:"left",fontSize:"20px",marginTop:"20px"}} key={ind}>
                            <b style={{width:200+"px",display:"inline-block",overflow:"hidden"}}>{val}</b>
                        <FaEdit size={30} color="blue" style={{margin:"2px"}}/>
                        <RiDeleteBin6Line size={30} color="red" onClick={()=>deleteItem(ind)}/>
                        </li>

                        </div>
                    )
                })}
            </div>
        </div>
       
    )
}
export default Todo