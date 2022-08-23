
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export const Setroot=(name,params)=>{
    if (navigationRef.isReady()) {
        navigationRef.reset({
            index: 0,
            routes: [{ name: name }],
          });
      }
}

export const Colors={
  Theme:"green",
  Default:"black"
}
// navigation.reset({
//           index: 0,
//           routes: [{ name: 'Login' }],
//         });
// import { useNavigation } from "@react-navigation/native"
// const Navigate =(name)=>{
//     const {navigate} = useNavigation();
//     navigate(name)
// }

// export {Navigate}