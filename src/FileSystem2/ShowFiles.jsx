import FolderComp from "./FolderComp";
import FileComp from "./FileComp";
function ShowFiles({file}) {
    console.log("file", file)
    if (file.type === "directory") {
        return <FolderComp name={file.name} />
    } else {
        <FileComp name={file.name} />
    }
    // return <>
    //     {folderStructure.map(afile => (
    //         afile.type === "directory" ? <FolderComp name={afile.name} /> : <FileComp name={afile.name} />
    //     ))}</>
}

export default ShowFiles;