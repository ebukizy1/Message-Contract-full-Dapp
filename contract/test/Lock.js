const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Message", function () {

  async function deloymentOfTheIntialValueFromTheConstructor() {
    const intialValue = "the story of my love life";
    const [owner] = await ethers.getSigners();

    const Message = await ethers.getContractFactory("Message");
    const message = await Message.deploy(intialValue);

    return { message, owner, intialValue};
  }

  describe("Deployment", function () {
    it("test that Message contract can be deploy", async function () {
      const { message, intialValue} = await loadFixture(deloymentOfTheIntialValueFromTheConstructor);
      expect(await message.message()).to.equal(intialValue);
    });
    it("test that i can get the initial message that was set in the contructor", async function(){
      const{message, intialValue} = await  loadFixture(deloymentOfTheIntialValueFromTheConstructor);
      expect(await message.message()).to.equal(intialValue);
    })
    it("test that message can be set using the setter function", async function(){
      const {message} = await loadFixture(deloymentOfTheIntialValueFromTheConstructor);
      await message.setMessage("my lovly wife");
      expect(await message.getMessage()).to.equal("my lovly wife")
    });
    it("test that i can set set message can get the message value that was set", async function(){
      const {message} = await loadFixture(deloymentOfTheIntialValueFromTheConstructor);
      await message.setMessage("my lovly wife");
      expect(await message.getMessage()).to.equal("my lovly wife")
    });
    



  });
});
