
type Props = {
  name:string;
  age:number;
  isLogged:boolean;
  fullName : {
  first:string;
  last:string;
  }
  names : {
    first:string;
    last:string;
  }[]
}
export default function SayHello(props:Props) {
  return (
    <div>
     <div>Hello {props.isLogged ? props.name : "Ahmad"}</div> 
     <div>my age {props.age}</div> 
     <div>Hello {props.fullName.first} {props.fullName.last}</div> 
     <ul>{props.names.map((item,index) => {
         return <li key={index}>{item.first} {item.last}</li>
     })}</ul>
      
    </div>
  )
}
