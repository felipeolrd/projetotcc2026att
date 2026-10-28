// src/utils/searchUtils.js
import { fisicaContents } from "@/contents/fisica/fisica";

export function globalSearch(query) {
  if (!query || query.trim() === "") return [];

  const searchTerm = query.toLowerCase().trim();
  const results = [];

  Object.entries(fisicaContents).forEach(([id, topic]) => {
    const matchTitle = topic.title?.toLowerCase().includes(searchTerm);
    const matchSubtitle = topic.subtitle?.toLowerCase().includes(searchTerm);
    const matchCategory = topic.category?.toLowerCase().includes(searchTerm);
    
    // Varre o array de parágrafos (content) procurando o termo
    const matchedParagraph = topic.content?.find(paragraph => 
      paragraph.toLowerCase().includes(searchTerm)
    );

    if (matchTitle || matchSubtitle || matchCategory || matchedParagraph) {
      results.push({
        id,
        name: topic.title,
        category: topic.category,
        subtitle: topic.subtitle,
        preview: matchedParagraph || topic.subtitle || topic.title,
      });
    }
  });

  return results;
}