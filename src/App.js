import Todo from "./components/app"

function App() {
  return (
    <div style={{textAlign:"center",border:"1px solid",width:"400px",height:"600px",margin:"auto",borderRadius:"10px",backgroundColor:"#ffa500"}}>
      <h1 style={{border:"1px solid",backgroundColor:"#0f0909",color:"white"}}>TODO APP</h1>
      <Todo />
    </div>
  )
}
export default App
