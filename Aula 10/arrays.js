const vetor = [];
vetor.push("item 1");
vetor.push("item 2");
vetor.push("item 3");
vetor.push(12345678);
console.log(vetor);
console.log(vetor.pop());
console.log(vetor);
vetor.splice(1, 1);
console.log(vetor);


for(let i=0; i<vetor.length;i++){
    console.log(vetor[i])
}

for(let it of vetor){
    console.log(it)
}

vetor.forEach(it =>console.log(it))
