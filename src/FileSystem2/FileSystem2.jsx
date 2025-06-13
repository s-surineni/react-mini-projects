function FileSystem2 () {
    const folderStructure = {
        "data": [
            {
                "id": "1",
                "name": "src",
                "type": "directory"
            },
            {
                "id": "3",
                "name": "public",
                "type": "directory"
            },
            {
                "id": "4",
                "name": "components",
                "type": "directory",
                "parentId": "1"
            },
            {
                "id": "5",
                "name": "buttons",
                "type": "directory",
                "parentId": "4"
            },
            {
                "id": "6",
                "name": "button.js",
                "type": "file",
                "parentId": "5"
            },
            {
                "id": "2",
                "name": "assets",
                "type": "directory"
            },
            {
                "id": "7",
                "name": "index.js",
                "type": "file",
                "parentId": "4"
            },
            {
                "id": "8",
                "name": "index.html",
                "type": "file",
                "parentId": "3"
            },
            {
                "id": "12",
                "name": ".gitignore",
                "type": "file"
            },
            {
                "id": "13",
                "name": "README.md",
                "type": "file"
            }
        ]
    }
    return <div>Hello</div>
}
export default FileSystem2;