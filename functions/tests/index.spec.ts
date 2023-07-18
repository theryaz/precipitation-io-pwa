import {Request} from "firebase-functions/v2/https";
import {Response} from "express";
import {helloWorld} from "../src/index";

describe("helloWorld", () => {
  it("should return a message", () => {
    const req = {} as Request;
    const res = {
      json: jest.fn(),
    } as unknown as Response;
    helloWorld(req, res);
    expect(res.json).toHaveBeenCalledWith({
      msg: "Hello from Firebase!",
    });
  });
});
