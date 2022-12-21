import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import HeaderPage from "@/components/HeaderPage.vue";

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(HeaderPage);
  });
  it("should title h1", () => {
    const value = wrapper.find("h1").text();
    expect(value).toBe("SUPER HEROES UNIVERSE");
  });

  it("should first link include Home"),
    () => {
      const value = wrapper.find("a").text();
      expect(value).toBe("Home");
    };

  it("should second link include Favorites"),
    () => {
      const value = wrapper.findAll("a")[1].text();
      expect(value).toBe("Favorites");
    };
});
