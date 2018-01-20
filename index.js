var katzDeli = [];

function takeANumber(line, name){
  line.push(name);
  // return "Welcome, " + name + ". You are number " + line.length + " in line."
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(arr) {
    var line = []
    if (arr.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < arr.length; i++) {
          //remember: don't have to define line as var
        line += (i + 1) + ". " + arr[i] + ", "
          // (i + 1) = start from 1 instead of 0
          // + ". " = add a "."
          // arr[i] + ", " = add ", " at current iteration of arr
          //"1. Bob, "
      }
      line = line.slice(0, line.length-2)
        //removing the last comma
        //we add commas with `line +=` above, so we must
        // remove the last one.
      return "The line is currently: " + line
    }
}