export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, num) => String.fromCharCode(Number(num)))
    .replace(/&#x([a-fA-F0-9]+);/g, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16))
    );
}

// NOTE: This runs BEFORE decodeHtmlEntities, so attribute values still
// contain entity-encoded quotes (&quot;) which makes regex matching reliable.
export function sanitizeSubstackHtml(html: string): string {
  let result = html;

  // Phase 1: Remove entire elements that shouldn't render
  result = result
    .replace(/<svg[\s\S]*?<\/svg>/gi, "")
    .replace(/<button[\s\S]*?<\/button>/gi, "")
    .replace(/<source[^>]*\/?>/gi, "");

  // Phase 2: Simplify images — unwrap <picture> to just <img>
  result = result.replace(
    /<picture>[\s\S]*?(<img[^>]+>)[\s\S]*?<\/picture>/gi,
    "$1"
  );

  // Phase 3: Strip all attributes except src, alt, href, width, height
  // Remove data-*, style, class, target, rel, srcset, sizes, fetchpriority
  result = result
    .replace(/\s*(?:data-[\w-]+|style|class|target|rel|srcset|sizes|fetchpriority)="[^"]*"/gi, "")
    // data-attrs uses &quot; for inner quotes — match the whole thing
    .replace(/\s*data-[\w-]+=&quot;[^]*?&quot;(?=[\s>\/])/gi, "");

  // Phase 4: Strip ALL <div> and </div> tags (unwrap everything)
  // Substack nests content in many div layers — just remove them all
  result = result.replace(/<\/?div[^>]*>/gi, "");

  // Phase 5: Clean up figure/image structure
  // Remove <a> wrappers around images (Substack expand links)
  result = result.replace(
    /<a[^>]*>\s*(<figure>[\s\S]*?<\/figure>)\s*<\/a>/gi,
    "$1"
  );
  result = result.replace(
    /<a[^>]*>\s*(<img[^>]+>)\s*<\/a>/gi,
    "$1"
  );

  // Phase 6: Convert line breaks to proper paragraph structure
  result = result
    .replace(/<br\s*\/?>\s*<br\s*\/?>/gi, "</p><p>")
    .replace(/<p>\s*<\/p>/gi, "");

  // Phase 7: Final cleanup
  result = result
    .replace(/>\s{2,}</g, ">\n<")
    .trim();

  return result;
}

export function extractFirstImage(html: string): string | null {
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
}

export function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}
