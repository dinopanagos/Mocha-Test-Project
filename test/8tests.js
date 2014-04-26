var expect = require("chai").expect;
var assert = require('chai').assert;
var should = require('chai').should();
var tags = require("../lib/tags.js");

describe("contains string", function(){
    it("it does contain buff", function(){
    var first = 'buffalo';
    var second = 'buff';

       expect(first).to.have.string(second);
   });
});

describe("Is a String", function(){
    it("should be a string", function(){
   
var num = 69;

num.should.be.a('string');
   });
});

describe("Is false", function(){
    it("should be a false", function(){
   
var guess = true;

expect(guess).to.be.false;
   });
});

describe("add", function(){
    it("should equal 113", function(){
    var first = 99;
    var second = 3;
    var third = 11;

       expect(first+second+third).to.equal(113);
   });
});

describe("atLeast", function(){
    it("should be at least 9", function(){
    var num = 10;

       expect(num).to.be.at.least(9);
   });
});

describe("word length", function(){
    it("should equal 5", function(){
    var word = "level";

       expect(word).to.have.length(5);
   });
});



describe("subtract", function(){
    it("should equal 50", function(){
    var first = 100;
    var second = 50;

       expect(first-second).to.equal(45);
   });
});

describe("first below second", function(){
    it("10 is below 50", function(){
    var first = 10;
    var second = 50;

       expect(first).to.be.below(second);
   });
});


