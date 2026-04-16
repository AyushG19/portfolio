import type { Root } from "hast"
import { visit } from "unist-util-visit"

/**
 * Rehype plugin that appends query parameters to all `<a>` href attributes.
 *
 * @example
 * // In a rehype pipeline:
 * [rehypeAddQueryParams, { utm_source: "mysite.com" }]
 */
export function rehypeAddQueryParams(
  params: Record<string, string>
): (tree: Root) => void {
  return (tree: Root) => {
    visit(tree, "element", (node) => {
      if (
        node.tagName !== "a" ||
        !node.properties ||
        typeof node.properties.href !== "string"
      ) {
        return
      }

      try {
        const url = new URL(node.properties.href)
        Object.entries(params).forEach(([key, value]) => {
          url.searchParams.set(key, value)
        })
        node.properties.href = url.toString()
      } catch {
        // Not a valid absolute URL, skip
      }
    })
  }
}
