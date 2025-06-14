import FolderComp from "./FolderComp";
import FileComp from "./FileComp";
function ShowFiles({ files }) {
    function findChildren(fileId) {
        const children = files.filter(aFile => {
            return aFile.parentId === fileId;
        })
        return children;
    }
    function renderFile(file, depth) {
        let res = [];

        if (file.type === "directory") {
            res.push(<div style={{ marginLeft: `${depth}px` }}><FolderComp name={file.name} /></div>);
            const children = findChildren(file.id);
            for (const aChild of children) {
                res = res.concat(renderFile(aChild, depth + 16));
            }
        } else {
            res.push(<div style={{ marginLeft: `${depth}px` }}><FileComp style={{ marginLeft: `${depth}px` }} name={file.name} /></div>)
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
            if (!("parentId" in afile)) { return renderFile(afile, 0) }
        })}

    </>)
}

export default ShowFiles;