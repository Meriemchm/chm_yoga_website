import React from "react";

interface TitleSectionProps {
  text: string;
  keyword: string;
  className?: string;
}

const TitleSection = React.forwardRef<HTMLHeadingElement, TitleSectionProps>(
  ({ text, keyword, className = "" }, ref) => {
    const highlighted = text.replace(
      keyword,
      `<span class="cormorant">${keyword}</span>`
    );

    return (
      <h2
        className={`text-3xl max-w-xs font-extralight capitalize ${className}`}
        dangerouslySetInnerHTML={{ __html: highlighted }}
        ref={ref}
      />
    );
  }
);

TitleSection.displayName = "TitleSection";

export default TitleSection;
