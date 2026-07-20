const input = document.getElementById("markdown-input");
const rawHTML = document.getElementById("html-output");
const preview = document.getElementById("preview");

const boldRegex = /(?:\*\*|__)(.*?)(?:\*\*|__)/g;
const italicRegex = /(?:\*|_)(.*?)(?:\*|_)/g;
const heading3Regex = /^\s*###\s+(.*)/gm;
const heading2Regex = /^\s*##\s+(.*)/gm;
const heading1Regex = /^\s*#\s+(.*)/gm;
const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
const anchorRegex = /\[(.*?)\]\((.*?)\)/g;
const blockquoteRegex = /^\s*>\s*(.*)/gm;

const imageTest = "https://picsum.photos/200";

const convertMarkdown = () => {
  let html = input.value;

  // Replace bold and italic
  html = html.replace(boldRegex, "<strong>$1</strong>");
  html = html.replace(italicRegex, "<em>$1</em>");

  // Replace headings
  html = html.replace(heading3Regex, "<h3>$1</h3>");
  html = html.replace(heading2Regex, "<h2>$1</h2>");
  html = html.replace(heading1Regex, "<h1>$1</h1>");

  // Replace images
  html = html.replace(imageRegex, '<img alt="$1" src="$2">');

  // Replace anchor (links)
  html = html.replace(anchorRegex, '<a href="$2">$1</a>');

  // Replace blockquote
  html = html.replace(blockquoteRegex, "<blockquote>$1</blockquote>");

  rawHTML.textContent = html;
  preview.innerHTML = html;

  return html;
}

input.addEventListener("input", convertMarkdown);