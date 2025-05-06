import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch content");

    const html = await response.text();

    // First, try to extract the main content section
    const contentRegex =
      /<div class="body markup"[^>]*>([\s\S]*?)<\/div>\s*<\/article>/i;
    const contentMatch = html.match(contentRegex);

    if (!contentMatch) {
      throw new Error("Could not find main content");
    }

    let content = contentMatch[1];

    // Extract the first image (hero image)
    const heroImageMatch = content.match(
      /<figure[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"[^>]*>[\s\S]*?<\/figure>/i
    );
    const heroImage = heroImageMatch ? heroImageMatch[1] : null;

    // Clean the content
    content = content
      // Remove hero image since we'll display it separately
      .replace(/<figure[^>]*>[\s\S]*?<\/figure>/i, "")

      // Remove hashtags section at the end
      .replace(/<p[^>]*>(?:#[^\s<]+\s*)+<\/p>\s*$/g, "")

      // Remove discussion section
      .replace(/<h3[^>]*>Discussion about this post<\/h3>[\s\S]*$/i, "")

      // Remove share section
      .replace(/<div[^>]*>Share<\/div>/gi, "")
      .replace(/<button[^>]*>Share<\/button>/gi, "")

      // Remove comments section
      .replace(/<div[^>]*>Comments<\/div>[\s\S]*$/i, "")

      // Remove Restacks section
      .replace(/<div[^>]*>Restacks<\/div>[\s\S]*$/i, "")

      // Remove navigation elements
      .replace(/<div[^>]*>Previous<\/div>/gi, "")
      .replace(/<div[^>]*>Next<\/div>/gi, "")

      // Remove any BABCO links at the end
      .replace(/<p[^>]*>BABCO[\s\S]*?<\/p>\s*$/i, "")

      // Remove any remaining social sharing elements
      .replace(/<div[^>]*class="[^"]*social[^"]*"[\s\S]*?<\/div>/gi, "")

      // Remove numbered bullets that might appear at the end
      .replace(/<p[^>]*>\s*\*{1,2}\d+\*{1,2}\s*<\/p>/g, "")

      // Clean up multiple blank lines
      .replace(/(\s*<\/p>\s*){2,}/g, "</p>")
      .replace(/\n{3,}/g, "\n\n")
      .trim();

    // Return both the cleaned content and the hero image
    return NextResponse.json({
      content,
      heroImage,
    });
  } catch (error) {
    console.error("Error fetching content:", error);
    return NextResponse.json(
      { error: "Failed to fetch content" },
      { status: 500 }
    );
  }
}
