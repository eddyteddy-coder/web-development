//Create 2 object and try to use call, apply and bind on them
//Try to use different events on objects, you can refer to this link
//Create the project shown in the lec.
const server={
  servername:"devsnest",
//  getInvite: function (a,b) {
  //  console.log("discord.gg/"+ this.servername);
    //console.log(this);
    //console.log(a+b);
//  }
};



const server2={
  servername:"theDeveloperCommunity",

}
//server.getInvite.call(server2);
//server.getInvite.call(server2,1,2);
//server.getInvite.apply(server2,[1,2]);
const ab=server.getInvite.bind(server,1,2);
console.log(ab);
