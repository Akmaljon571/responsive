import { useContext } from "react";
import { State } from '../content/start'

function useStart() {
   const { lan, setLan } = useContext(State)

   return {
      lan, 
      setLan
   }
  
}

export default useStart;