interface MediumPost {
    title: string;
    link: string;
    guid: string;
    pubDate: string;
    description: string;
  }
  
  export async function GET() {
    try {
      const username = 'medium'; // Replace with your Medium username
      const response = await fetch(`https://medium.com/feed/@${username}`);
      const xmlText = await response.text();
      
      // Simple XML parsing (you might want to improve this)
      const items = xmlText.match(/<item>[\s\S]*?<\/item>/g) || [];
      
      const parsedItems: MediumPost[] = items.map(item => {
        const title = item.match(/<title>(.*?)<\/title>/)?.[1] || '';
        const link = item.match(/<link>(.*?)<\/link>/)?.[1] || '';
        const guid = item.match(/<guid>(.*?)<\/guid>/)?.[1] || '';
        const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || '';
        const description = item.match(/<description>(.*?)<\/description>/)?.[1] || '';
        
        return {
          title: decodeEntities(title),
          link,
          guid,
          pubDate,
          description: decodeEntities(description)
        };
      });
  
      return Response.json({ items: parsedItems });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch Medium posts';
      console.error('Error fetching Medium posts:', errorMessage);
      return Response.json(
        { error: errorMessage },
        { status: 500 }
      );
    }
  }
  
  // Helper function to decode HTML entities
  function decodeEntities(text: string): string {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  }