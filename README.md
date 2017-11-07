# tlx-editor

A single HTML component supporting multiple input types, select, textarea, radio groups, and star ratings.

# Installation

`npm install tlx`

# Usage

Load the files you need from the `node_modules/tlx/browser` and `./browser` directories. Or, copy files around as you need to fit your file system structure.

Use the custom tag `<tlx-input>` in place of `<input>`, `<select>` and `<textarea>`. Fields will behave like they are in a form and use native validation styling even if you do not put them inside a form tag.

All the base values for the `<input>` attribute `type` supported by your browser will work. In addtion, you can use:

1) `type="rating"` for a star rating. It defaults to 5 stars, but you can add more by setting the attribute `max` to a value.

2) `type="radiogroup"` with the attribute `options=[<some values>...]`. Optionally provide a `value` to have it pre-selected.

3) `type="select-one"` with the attribute `options=[<some values>...]` for a single value select. Optionally provide a `value` to have it pre-selected.

4) `type="select-multiple"`, also with the attribute `options`. Optionally provide an array for `value` to have them pre-selected, e.g. `value="[1,3]"`.

5) `type="textarea"` where you you would normally use `<textarea>`.

Since not all browsers support custom elements, you must perform an initial transform on the page. Once all browsers support custom elements, `tlx` will be enhanced to take advantage of it. For now, using `onload` will work:

```html
<body onload="tlx(document.getElementById('app'))">
<div id="app">
... your html here ...
<div>
</body>
```

Below is a more complete example from the `examples` directory:


```html
<html>
<head>
<script src="../node_modules/tlx/browser/tlx.js"></script>
<script src="../browser/tlx-editor.js"></script>
<style>
input:invalid {border: 2px solid red;}
</style>
</head>
<body onload="tlx.bind({name:'Joe',age:20,honorific:'Mx.',seatingPreferences:['aisle','exit'],optIn:true,tier:'gold',notes:'',attest:'',rating:3})(document.getElementById('page'))">
<div id="page">
	<form>
	
	<p><tlx-editor type="text" value="${name}" label="Name:" t-on="${{input:this.linkState('name')}}" required></tlx-editor></p>
	
	<p><tlx-editor type="number" value="${age}" min="0" max="115" label="Age:" t-on="${{change:this.linkState('age')}}"></tlx-editor></p>
	
	<p><tlx-editor type="select-one" value="${honorific}" options="${['Ind.','Misc.','Mr.','Mrs.','Ms.','Mx.','Dr.','Msgr.','Rev.','Sir']}" label="Honorific:" t-on="${{change:this.linkState('honorific')}}"></tlx-editor></p>
	
	<p><tlx-editor type="select-multiple" value="${seatingPreferences}" options="${['aisle','middle','window','exit','bulkhead','rear']}" label="Seating Preference:" t-on="${{change:this.linkState('seatingPreferences')}}"></tlx-editor></p>
	
	<p><tlx-editor type="checkbox" value="${optIn}" label="Opt In:" t-on="${{click:this.linkState('optIn')}}"></tlx-editor></p>
	
	<p><tlx-editor type="radiogroup" value="${tier}" label="Tier:" options="${['bronze','silver','gold']}" t-on="${{click:this.linkState('tier')}}"></tlx-editor></p>
	
	<p><tlx-editor type="textarea" value="${notes}" label="Notes:" t-on="${{input:this.linkState('notes')}}"></tlx-editor></p>
	
	<p><tlx-editor type="rating" value="${rating}" label="Rating:" max="5" style="color:yellow" t-on="${{change:this.linkState('rating')}}"></tlx-editor></p>
	
	<p><tlx-editor type="text" value="no" options="${['yes','no']}" label="Verified (yes or no):" t-on="${{change:this.linkState('attest')}}"></tlx-editor></p>
	
	<p><input type="submit"></p>
	
	</form>
	
	<p>${honorific} ${name}, a ${rating} star customer, has opted ${(optIn ? "in" : "out")} and prefers the following seating: ${seatingPreferences.join(", ")} with ${tier} tier priority.</p>
	
	<table><tr><td>Notes: </td><td>${notes}</td></table>
	</body>
</div>
</html>
```

# Rationale and Roadmap

1) We needed a simple way to put edit controls in a table in a uniform way to simulate a spreadsheet.

2) Over time we will enhance the control to provide cross browsers support fro unsupported special types, e.g. date calendars are not supported in Firefox. we will also add additional types, e.g. `range`, which will operate like a like a tow sides slider with an array as a value containing its selected min and max rather than absolute min and max.


# Release History

2017-11-07 v0.1.0 Initial public release
