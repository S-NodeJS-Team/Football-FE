import { storage } from "./config";
import { ref, deleteObject } from "firebase/storage";

const deleteFile = (filePath: string) => {
  const imageRef = ref(storage, filePath);

  return deleteObject(imageRef);
};

export default deleteFile;
