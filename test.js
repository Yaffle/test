var test = require('tape');

test("querySelector + :scope", function (t) {
  t.plan(1);
  var div = document.createElement("div");
  div.innerHTML = "<p></p>";
  var x = document.documentElement;
  x.appendChild(div);
  var node = div.querySelector("p");
  var y = null;
  try {
    y = div.querySelector(":scope div p");
  } catch (e) {
    y = String(e);
  }
  t.equal(y, null, "it works!");
});
