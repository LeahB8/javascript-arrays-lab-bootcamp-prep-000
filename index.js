var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten (name) {
  array.push (name);
  return array
}

kittens.push ("Panther")

function destructivelyPrependKitten (name) {
  array.unshift(name)
  return array
}

kittens.unshift ("Panther")

function destructivelyRemoveLastKitten() {
  array.pop()
  return array
}

kittens.pop()

function destructivelyRemoveFirstKitten() {
  array.shift()
  return array
}

kittens.shift()

function appendKitten (name) {
  return [... array, name]
}

[... kittens, "Panther"]

function prependKitten(name) {
  return [name, ...array]
}

["Panther", ... kittens]

function removeLastKitten() {
  return array.slice(0, array.length - 1)
}

kittens.slice(0, kittens,length - 1)

function removeFirstKitten() {
  return array.slice(1)
}

kittens.slice(1)