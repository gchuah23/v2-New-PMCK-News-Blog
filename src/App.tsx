import { useEffect, useState } from 'react';
import { supabase } from './lib/supabaseClient';

interface Article {
  id: number;
  title: string;
  blurb: string;
  imageUrl?: string | null;
  url: string;
  sourceTitle?: string | null;
  publishedDate?: string | null;
}

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchArticles() {
      const { data, error } = await supabase
        .from('articles')
        .select('id, title, blurb, imageUrl, url, sourceTitle, publishedDate')
        .order('publishedDate', { ascending: false })
        .limit(20);
      if (error) {
      	// Print error to console but don't block UI
        console.error('Error fetching articles:', error);
        setArticles([]);
      } else if (data) {
        setArticles(data as Article[]);
      }
      setLoading(false);
    }
    fetchArticles();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>PMCK Health News Blog</h1>
      {loading ? (
        <p>Loading articles...</p>
      ) : articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <div>
          {articles.map((article) => (
            <div
              key={article.id}
              style={{
                marginBottom: '2rem',
                borderBottom: '1px solid #eaeaea',
                paddingBottom: '1rem',
              }}
            >
              {article.imageUrl && (
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    marginBottom: '0.5rem',
                  }}
                />
              )}
              <h2>{article.title}</h2>
              <p>{article.blurb}</p>
              {article.sourceTitle && (
                <p style={{ fontStyle: 'italic', color: '#666' }}>
                  {article.sourceTitle}
                </p>
              )}
              {article.publishedDate && (
                <p style={{ color: '#999' }}>{article.publishedDate}</p>
              )}
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0070f3' }}
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
