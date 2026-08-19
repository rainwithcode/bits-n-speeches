import { Page } from "openai/pagination.js";
import PageHero from "../components/PageHero";

export default function About() {
  return (
    <PageHero
      title="About Us"
      description="Who we are, what we believe, and why we meet every Thursday."
    />
  );
}
