import { useEffect } from "react"

export const useDocumentTitle = (titleText) =>{
useEffect(()=>{
    document.title = `${titleText} | Productivity App `;
},[titleText])
}