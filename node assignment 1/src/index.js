const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile("file.txt","Hello");

}
//myFileWriter();
const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = await fs.readFile(fileName,"utf-8")
	console.log(data);
}
//myFileReader("file.txt");


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName, fileContent);}
	//myFileUpdater("file.txt"," world");


const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName);
}
myFileDeleter("file.txt");



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }