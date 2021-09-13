import React from 'react'
import File from './File.js'
const FileList = ({files}) => {
    // console.log(files.length);
    // console.log(files);

    if(files.length>1){
        return (
            <div>
            <h5 className="center  "></h5>
            <table className = "responsive-table highlight centered striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                    <th>TYPE</th>
                    <th>SIZE</th>
                    <th>DATE</th>
                    <th>UPLOADER/VIEW</th>
                    <th>HASH/VIEW/GET</th>
                </tr>
                </thead>
                <tbody>
                {files.map((file,key)=>{
                    //console.log(file);
                    if(file!=null){
                        return(
                            <File file = {file} key = {key}/>
                            )
                        }
                        return(
                            <div>

                            </div>
                        )
                    }
                    )
                }
              </tbody>
            </table>
        </div>
        )
    }else{
        return(
            <div>

            </div>
        )
    }
}

export default FileList
