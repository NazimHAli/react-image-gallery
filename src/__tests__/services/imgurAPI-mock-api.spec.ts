import { ImgurAPI } from "@/services/imgurAPI";
import { initialState } from "@/state/initialState";
import fetchMock from "jest-fetch-mock";
import { rest } from "msw";
import { setupServer } from "msw/node";

const initialRequestArgs = initialState["requestArgs"];

const requestHandlers = [
  rest.get(
    "https://api.imgur.com/3/gallery/search/top/all/1",
    (_req, res, ctx) => {
      return res(ctx.json({ data: ["meow"] }));
    }
  ),
  rest.get("https://api.imgur.com/3/account/", (_req, res, ctx) => {
    return res(ctx.json({ data: { user: { name: "First Last" } } }));
  }),
];

describe("test mock API server", () => {
  let api, response;

  const server = setupServer(...requestHandlers);

  beforeAll(() => {
    process.env.PUBLIC_IMGUR_CLIENT_ID = "mockAPI";
    server.listen();
    fetchMock.doMock();
  });

  afterAll(() => {
    delete process.env.PUBLIC_IMGUR_CLIENT_ID;
    server.resetHandlers();
    server.close();
    fetchMock.disableMocks();
  });

  test("useFakeResponse is false", async () => {
    api = ImgurAPI.getInstance(initialRequestArgs);
    expect(await api.useFakeResponse).toBeFalsy();
  });

  test("get galleries", async () => {
    api = ImgurAPI.getInstance(initialRequestArgs);
    response = await api.getGallerySearchResults();
    expect(response.length).toEqual(1);
  });

  test("get user account", async () => {
    api = ImgurAPI.getInstance(initialRequestArgs);

    response = await api.methodDispatcher("account");
    expect(response.user.name).toEqual("First Last");
  });
});