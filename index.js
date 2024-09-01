const dgram = require('node:dgram');
const dnsPacket = require('dns-packet');
const server = dgram.createSocket('udp4');

server.on('message', (msg, remoteInfo) => {
    const incomingRequestMsg = dnsPacket.decode(msg);
    console.log({ questions:incomingRequestMsg.questions, remoteInfo:remoteInfo});
})

server.bind(53, ()=>console.log("DNS Server in running on port 53"));