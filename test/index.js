var chai,
	expect,
	unionizor,
	_;
if(typeof(window)==="undefined") {
	chai = require("chai");
	expect = chai.expect;
	unionizor = require("../index.js");
	_ = require("lodash");
}

describe("Test",function() {
	it("text",function(done) {
		const app = document.getElementById("app");
		tlx.render(tlx`<tlx-editor type="number" value="test">`,app);
		setTimeout(() => {
			expect(app.children[0].children[0].children[0].children[1].getAttribute("value")).to.equal("test");
			while(app.lastChild) app.removeChild(app.lastChild);
			done();
		},20)
	});
	it("number",function(done) {
		const app = document.getElementById("app");
		tlx.render(tlx`<tlx-editor type="number" value="1">`,app);
		setTimeout(() => {
			expect(app.children[0].children[0].children[0].children[1].getAttribute("value")).to.equal("1");
			while(app.lastChild) app.removeChild(app.lastChild);
			done();
		},20)
	});
	it("color",function(done) {
		const app = document.getElementById("app");
		tlx.render(tlx`<tlx-editor type="number" value="#000000">`,app);
		setTimeout(() => {
			expect(app.children[0].children[0].children[0].children[1].getAttribute("value")).to.equal("#000000");
			while(app.lastChild) app.removeChild(app.lastChild);
			done();
		},20)
	});
	it("select-one",function(done) {
		const app = document.getElementById("app");
		tlx.render(tlx`<tlx-editor type="select-one" options="[1,2,3]" value="2">`,app);
		setTimeout(() => {
			expect(app.children[0].children[0].children[0].children[1].value).to.equal("2");
			while(app.lastChild) app.removeChild(app.lastChild);
			done();
		},20)
	});
	it("select-multiple",function(done) {
		const app = document.getElementById("app");
		tlx.render(tlx`<tlx-editor type="select-multiple" options="[1,2,3]" value="[1,3]">`,app);
		setTimeout(() => {
			expect(app.children[0].children[0].children[0].children[1].value.includes(1)).to.equal(true);
			while(app.lastChild) app.removeChild(app.lastChild);
			done();
		},20)
	});
	it("textarea",function(done) {
		const app = document.getElementById("app");
		tlx.render(tlx`<tlx-editor type="textarea" value="test">`,app);
		setTimeout(() => {
			expect(app.children[0].children[0].children[0].children[1].value).to.equal("test");
			while(app.lastChild) app.removeChild(app.lastChild);
			done();
		},20)
	});
	it("rating",function(done) {
		const app = document.getElementById("app");
		tlx.render(tlx`<tlx-editor type="rating" value="5">`,app);
		setTimeout(() => {
			expect(app.children[0].children[0].children[0].children[1].children[4].innerText.charCodeAt(0)).to.equal(9733);
			while(app.lastChild) app.removeChild(app.lastChild);
			done();
		},20)
	});
});