import FolderComp from "./FolderComp";
import FileComp from "./FileComp";
function ShowFiles({ files }) {
    function findChildren(fileId) {
        const children = files.filter(aFile => {
            return aFile.parentId === fileId;
        })
        return children;
    }
    function renderFile(file) {
        let res = [];

        if (file.type === "directory") {
            res.push(<FolderComp name={file.name} />);
            const children = findChildren(file.id);
            for (const aChild of children) {
                res = res.concat(renderFile(aChild));
            }
        } else {
            res.push(<FileComp name={file.name} />)
        }
        return res
    }
    // return <>
    //     {folderStructure.map(afile => (
    //         afile.type === "directory" ? <FolderComp name={afile.name} /> : <FileComp name={afile.name} />
    //     ))}</>

    // show outer files
    return (<>
        {files.map(afile => {
            // console.log(afile)
            if (!("parentId" in afile)) { return renderFile(afile) }
        })}

    </>)
}

export default ShowFiles;