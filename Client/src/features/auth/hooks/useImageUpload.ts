import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage"
import { storage } from "../../../firebase"
export const imageUploadUrl =():((id:string,photoUpload:File)=>Promise<string>)=>{
    const getUrl = async(id:string,photoUpload:File)=>{
        const imageUploadRef = ref(storage,`${id}/${photoUpload.name}`)
        const folderRef = ref(storage,`${id}/`)
        await uploadBytes(imageUploadRef,photoUpload)
        const result = await listAll(folderRef);
        let downloadUrl:string[] = []
        for(const item of result.items){
            const url = await getDownloadURL(item);
            downloadUrl.push(url)
        }

        return downloadUrl[0]
    } 
    return getUrl
}