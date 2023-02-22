# DROPBLOCKS

DROPBLOCKS is a decentralized file storage system 

## Description

so what is the purpose of this project
In todays world we live under a monoply of big corporations and are dependent on them for storing and accesing our private files. These corporations if they wish could easily access,use
tamper with our files. We have heard about various examples of these comppanies deleting some files, data just because they thought it as inappropriate
DropBlocks is a secure way to store our files once the files are uploaded no one other than the uploader can tamper with the files 

![upload](https://drive.google.com/uc?export=view&id=1auU2fvpEWyAXuTmR8z9s3F0GyOON-H2l)

on clicking the choose file button a window will popup that wlll allow user to choose file from the system . User can enter description for the file if he wants. After clicking the upload button 
a transaction would get initiated.

The file will then be added to the IPFS . IPFS is a peer to peer network for storing and sharing data in distributed file system . Ipfs will generate a hash value which will be unique for a every file 
This hash value is then stored onto the etherum blockchain . Once stored in the blockchain it cannot be changed thus ensuring security of the data 

Once uploaded the file will be visible in the view section 

![view](https://drive.google.com/uc?export=view&id=1ncinKF9QnRpeSDfC8VmWkIRRT9ZmFZvk)


here the user can download the file if he wants by clcking the download button . 

![download](https://drive.google.com/uc?export=view&id=1mLPDjWWAsx8hgmcFyrpP75cEByiekSNd)

The user can view the details of the transaction if he wants 
![transaction](https://drive.google.com/uc?export=view&id=1QW_ml-UklOEj2SRsu5NyvBYDPNy9JC8M)
## Getting Started

## Built With 
  * [React.js](https://reactjs.org/)
  * [Solidity](https://soliditylang.org/)
  * [web3.js](https://web3js.readthedocs.io/en/v1.5.2/)
  * [Materialize](https://materializecss.com/)
  * [Javascript](https://www.javascript.com/)

## Getting Started

### Installing

* Install truffle 
 ```
npm install truffle -g
```
* clone the repository 
 ```
git clone https://github.com/Pushkarlonkar/LostAndFound.git
```
* Install necessary dependencies
 ```
npm install
```
### Executing program

#### In Parent Folder
* Compile Contracts
```
truffle compile
```
* Migrate the Contract to the  blockchain
```
truffle migrate 
truffle migrate --reset
```
#### In Client Folder
* start react app  
```
cd client
npm start
```
## Further Improvements 
Currently this is a single user app it can be upgraded to support multiple users .
Login / Register page can be added 

