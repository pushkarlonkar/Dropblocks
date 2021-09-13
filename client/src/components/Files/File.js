import React from 'react'
import { convertBytes } from '../Form/helper';
import moment from 'moment'

const File = ({file}) => {
        //{file.fileHash.substring(0,10)}...
        // console.log(file);
        return (
            <tr>
                <td>{file.fileId}</td>
                <td>{file.fileName}</td>
                <td>{file.fileDescription}</td>
                <td>{file.fileType}</td>
                <td>{convertBytes(file.fileSize)}</td>
                <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                <td>
                    <a href={"https://etherscan.io/address/" + file.uploader}
                    rel="noopener noreferrer"
                    target="_blank">{file.uploader.substring(0,10)}...</a>
                </td>
                <td><a href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                        rel="noopener noreferrer"
                        target="_blank">Download
                    </a>
                </td>
            </tr>
        )
    
}

export default File
