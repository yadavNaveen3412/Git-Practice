let walk =['n','n','n','s','n','s','n','s','n','s'];

function isValidWalk(walk) {
  let x = 0;
  let y = 0;
    if(walk[item] === 'n'){
console.log(x, " ", y);
        y += 1;
    }
    else if(walk[item]=== 's'){
console.log(x, " ", y);
        y -= 1;
    }
    else if(walk[item]=== 'e'){
console.log(x, " ", y);
        x += 1;
    }
    else if (walk[item]=== 'w'){
console.log(x, " ", y);
        x -= 1;
    }
  return (x === 0 && y === 0 && walk.length === 10);  
}

console.log(isValidWalk(walk));