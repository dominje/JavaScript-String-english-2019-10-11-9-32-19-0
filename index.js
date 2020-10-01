// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
name = name.toUpperCase();
alert(name);
// TODO write your code here...

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function capitalize(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

alert(capitalize(sentence));


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
res = money.substring(1, 3);
alert(res);

//TODO write your code here...