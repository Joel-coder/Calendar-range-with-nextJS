import React from "react";
import { act } from "react-dom/test-utils";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { GlobalStateProvider } from "../../../store/globalStateProvider";
import LandingPage from "../../../pages/landingPage";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      locale: "en",
    };
  },
}));

const server = setupServer(
  // stop server calls from going to backend by simulating server
  rest.post("*", (req, res, ctx) => {
    req.body = {};
    return res(ctx.json({ message: "Success" }));
  }),
  rest.get("*", (req, res, ctx) => {
    req.body = {};
    return res(ctx.json({ message: "Success" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Landing page test", () => {
  it("renders page", async () => {
    const { container } = render(
      <GlobalStateProvider>
        {" "}
        <LandingPage />
      </GlobalStateProvider>
    );
    setTimeout(() => {
      expect(container.innerHTML).toMatch(/hhh/i);
    }, 2000);
  });
});
