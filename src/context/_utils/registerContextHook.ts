import { useContext } from "react";

type HookContextType = {
  name: string;
  hookContext: any;
};

// Wrap to create a custom useXYX for every context/ Hook
export function registerContextHook(contextHooks: HookContextType[]) {
  contextHooks.forEach((contextHook) => {
    
  });
  return contextHooks;
}

// One useContext, From here, Pass our Contexts as a list param to the registerContextHook
// An array of objects:
/** 
 * 
 {
    name: '' // name of the hook
    hookContext: // hook we import and register 
 }
//  */
import { AuthContext } from "@/context/AuthContext";

const useAuth = () => useContext(AuthContext);

export default useAuth;
