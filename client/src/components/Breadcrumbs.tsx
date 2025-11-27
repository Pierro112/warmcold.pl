import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'wouter';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-sm ${className}`}>
      <Link href="/pl" className="flex items-center gap-1 text-gray-600 hover:text-[#25344c] transition-colors">
        <Home className="h-4 w-4" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-gray-400" />
          {item.href && index < items.length - 1 ? (
            <Link href={item.href} className="text-gray-600 hover:text-[#25344c] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#25344c] font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
