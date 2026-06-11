import ContainerMessanger from "@/components/messanger-components/ConteinerMessanger";
import { Suspense } from "react";

export default function MyProfile() {
  return (
    <Suspense fallback={'Загрузка...'}>
      <ContainerMessanger />
    </Suspense>
    
  ) 
}
