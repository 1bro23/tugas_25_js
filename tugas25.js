let x=[2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log("Sebelumnya :",x.join());
console.log("Ascending :",x.sort().join());
console.log("Descending :",x.sort().reverse().join());
console.log("Filter :",x.filter(y=>y>10).join());
