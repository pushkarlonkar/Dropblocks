import React, {useEffect, useState} from "react";
import DStorageJson from "./contracts/DStorage.json";
import Web3 from "web3";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Head from "./components/Navbar/Head";
import FileList from "./components/Files/FileList";
import './App.scss'



const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient.create('https://ipfs.infura.io:5001/api/v0');

//console.log(ipfsClient.create);

function App (){
  useEffect(() => {
    loadWeb3(); 
    loadBlockchaindata();
  }, [])

  //console.log(create);
  
  // we need 2 var 
  // 1 for storing the current account number 
  // 2 for storing the loader 
  // the loader is necessary because we need to check if the page is loaded or not 
  const [curaccount,setcurAccount] = useState("");
  const [loader,setLoader] = useState(true);
  const [DStorage,setDStorage ] = useState();
  const [fileCount,setfileCount] = useState();
  const [files,setFiles] = useState([]);
  const [type,setType] = useState();
  const [name,setName] = useState();
  const [f,setF] = useState();
  
  
  const loadWeb3 = async () => {
    // connects our app to the blockchain
    // boiler plate code
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected . You should consider trying metamask!"
      );
    }
  };
  const loadBlockchaindata = async () =>{
    setLoader(true);
    const web3 = window.web3;
    //console.log(web3);

    // here the main logic happens 
    // get the accounts await is important
    const accounts = await web3.eth.getAccounts();
    //console.log(accounts); 
    setcurAccount(accounts[0]);
    // NETWORK ID
    const networkId = await web3.eth.net.getId();
    const networkData = DStorageJson.networks[networkId];
    //console.log(networkData);
    if(networkData){
      // we get the contract from from web3 by passing it the parameters 
      // ContractName.abi and networkData.address
      const DS = new web3.eth.Contract(DStorageJson.abi,networkData.address);
      setDStorage(DS);
      //console.log(DS);
      const FileCount = await DS.methods.fileCount().call()
      //console.log(FileCount);
      
      setfileCount(FileCount);
      
      //console.log(FileCount);
      for(var i = FileCount;i>=1;i--){
        const f = await DS.methods.files(i).call();
        // console.log(f);
        // console.log(files);
        setFiles(files =>[...files,f]);
      }
      //SF(FileCount);
      setLoader(false);
    }else{
      window.alert("DStorage Contract Not Deployed to detected Network")
    }
    setLoader(false);
  }




  const captureFile = (e) => {

    //console.log("Inside Capture File");
    e.preventDefault();
    const file = e.target.files[0];
    //console.log(file);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    //console.log(reader);

    reader.onloadend = () =>{
      // const B = await Buffer(reader.result);
      //console.log("Inside onloadend");
      //console.log(Buffer(reader.result));
      // setBf(
      //   {
      //     buffer : Buffer(reader.result)[0]
      //   }
      // );
      setF(file);



      if(file.name!=null && file.type!=null){
        setType( file.type);
        setName( file.name);
      }

      
    }
    // *! Buffer here is undefined so what to do wait for
  }






  const uploadFile = async (description)=>{
    // Step 2
    // adding the processed file to ipfs
    //setterFor();
    //console.log(description);
    setLoader(true);
    //console.log("inside the uploadfile")
    
    var buffer = [];
    const reader = new window.FileReader();
    //console.log(f);
    reader.readAsArrayBuffer(f);
    reader.onloadend=async()=>{
      buffer = await Buffer(reader.result);
      //console.log("uploading file to ipfs");
      //console.log(buffer);
      try{
        const result = await ipfs.add(buffer);

        DStorage.methods.uploadFile(result.path,result.size,type,name,description).send({from : curaccount}).on('transactionHash',(hash)=>{
          setLoader(false); 
          setType(null);
          setName(null);
        })
        window.location.reload();
        
      }catch(error){
        window.alert("ERROR");
        console.log(error);
      }
      
    }
    //if(buffer.length!=0){
      //window.location.reload();
    //}
    setLoader(false);
  }

  if(loader){
    return(
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
      )
  } 
  return (
    <div> 
      <Navbar curaccount = {curaccount}/>
      <div className = "container">
        <div className="divider"></div>
            <div className="section">
                  <Head/>
            </div>

            <div className="section">
                  <Form captureFile = {captureFile} uploadFile= {uploadFile}/>
            </div>

            <div className="divider"></div>

            <div className="section">
                  <FileList files = {files}/>
            </div>
        </div>
      </div>

  )

}

export default App
