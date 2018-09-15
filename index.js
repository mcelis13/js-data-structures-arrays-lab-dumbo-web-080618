const drivers = ["Milo", "Otis", "Garfield"];


function destructivelyAppendDriver(name){
  drivers.push(name);
};

function destructivelyPrependDriver(name){
  drivers.unshift(name);
};

function destructivelyRemoveLastDriver(name){
  drivers.pop();
};

function destructivelyRemoveFirstDriver(){
  drivers.shift();
};

function appendDriver(name){
  const copy = [...drivers, name];
  return copy;
};

function prependDriver(name){
  const copy = [name, ...drivers];
  return copy;
};

function removeLastDriver(){
  let copy = drivers.slice();
  return copy.slice(0, copy.length -1);
};

function removeFirstDriver(){
  let copy = drivers.slice();
  return copy.slice(1);
};
