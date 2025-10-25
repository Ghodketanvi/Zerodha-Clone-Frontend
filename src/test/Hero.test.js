import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import except from "expect";
import Hero from "../landing_page/home/Hero";
// Test Suite
describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    except(heroImage).toBeInTheDocument();
    except(heroImage).toHaveAttribute("src",'media/images/homeHero.png');
  });

test("renders signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button", { name: "/signup now/i" });
    except(signupButton).toBeInTheDocument();
    except(signupButton).toHaveClass("btn-primary");
  });
});
