var user = { name : "Arun", age:37};

var buffer = new Buffer(30);
buffer.fill(0);
buffer.write(user.name,"utf-8");
buffer.writeInt8(65,25);

console.log(buffer.toString("base64",0,25));
console.log(buffer.readInt8(25));