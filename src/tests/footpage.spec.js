import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import FooterPage from "@/components/FooterPage.vue";

describe("FooterPage", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(FooterPage);
  });
  it("the title must be an h2", () => {
    const value = wrapper.find("h2").text();
    expect(value).toBe("SUPER HEROES UNIVERSE");
  });

  it("the footer must have 3 links to social networks", () => {
    const container = wrapper.findAll("div")[1].html();
    console.log(container);
    expect(container).toBe(
      '<div class="footer__container-social-media"><i class="fa-brands fa-instagram icon-media"></i><i class="fa-brands fa-twitter icon-media"></i><i class="fa-brands fa-facebook icon-media"></i></div>'
    );
  });
});
