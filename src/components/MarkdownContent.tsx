import React, { useEffect, useState } from 'react'
import { Card } from "@/components/ui/card"

interface MarkdownContentProps {
  contentPath: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ contentPath }) => {
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    fetch(contentPath)
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading content:', error))
  }, [contentPath])

  const renderMarkdown = (text: string) => {
    const sections = text.split('\n\n')
    
    return sections.map((section, index) => {
      // Handle headers
      if (section.startsWith('#')) {
        const level = (section.match(/^#+/) || [''])[0].length
        const text = section.replace(/^#+\s/, '')
        const className = level === 1 
          ? 'text-4xl font-bold text-primary mb-8'
          : level === 2 
            ? 'text-3xl font-semibold text-primary mb-6'
            : 'text-2xl font-medium text-primary mb-4'
        
        return React.createElement(
          `h${level}`,
          { key: index, className: `font-poppins ${className}` },
          text
        )
      }
      
      // Handle lists
      if (section.match(/^[*-]/m)) {
        const items = section.split('\n').map(item => item.replace(/^[*-]\s/, ''))
        return (
          <ul key={index} className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )
      }
      
      // Handle numbered lists
      if (section.match(/^\d+\./m)) {
        const items = section.split('\n').map(item => item.replace(/^\d+\.\s/, ''))
        return (
          <ol key={index} className="list-decimal pl-6 mb-6 space-y-2 text-muted-foreground">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        )
      }
      
      // Regular paragraphs
      return (
        <p key={index} className="text-muted-foreground mb-6">
          {section}
        </p>
      )
    })
  }

  return (
    <div className="prose prose-lg max-w-none">
      {renderMarkdown(content)}
    </div>
  )
}

export default MarkdownContent